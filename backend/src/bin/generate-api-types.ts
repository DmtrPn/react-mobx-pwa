#!/usr/bin/env node
import '../bootstrap';

import { writeFileSync } from 'fs';
import path from 'path';
import dtsgenerator, { DefaultTypeNameConvertor, SchemaId } from 'dtsgenerator';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '../AppModule';

const rootDir = path.resolve(__dirname, '../');
const projectRootDir = path.resolve(rootDir, '../../');
const relativePath = process.argv[2] || 'types/backend/types.ts';
const filePath = path.resolve(projectRootDir, relativePath);

function typeNameConvertor(id: SchemaId): string[] {
    const names = DefaultTypeNameConvertor(id);
    if (names.length > 0) {
        const lastIndex = names.length - 1;
        names[lastIndex] = names[lastIndex];
    }
    return names;
}

function buildConfig() {
    const builder = new DocumentBuilder()
        .setTitle('Dobro API')
        .setVersion('1.0');

    return builder.build();
}

async function main() {
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, buildConfig());

    const types = await dtsgenerator({
        typeNameConvertor,
        contents: [document],
        namespaceName: '',
        // ignoredNamespaces: ['Responses'],
    });

    await writeFileSync(filePath, types);
    await app.close();
}

main().finally(() => { console.log('finish'); });
