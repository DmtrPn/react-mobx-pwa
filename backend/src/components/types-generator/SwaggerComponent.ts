// import path from 'path';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { OpenAPIObject, DocumentBuilder, SwaggerModule, SwaggerCustomOptions } from '@nestjs/swagger';
// import dtsgenerator from 'dtsgenerator';
//
// // import { keysFrom } from 'chaika-utils';
//
// // import { tagDescriptions } from './tags';
// // import { customCss } from './customCss';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from '../../AppModule';
//
// type Config = Pick<OpenAPIObject, 'openapi' | 'info' | 'servers' | 'security' | 'tags' | 'externalDocs'>;
//
// class SwaggerComponent {
//
//     private document: OpenAPIObject;
//     private app: NestExpressApplication;
//
//     constructor() {
//         // this.app = app;
//         // this.document = SwaggerModule.createDocument(app, config);
//     }
//
//     public get schemeJson(): string {
//         return JSON.stringify(this.document);
//     }
//
//     public async init() {
//         this.app = await NestFactory.create(AppModule);
//         const config = new DocumentBuilder()
//             .setTitle('Cats example')
//             .setDescription('The cats API description')
//             .setVersion('1.0')
//             .addTag('cats')
//             .build();
//
//         const options = {
//             // customCss,
//             customSiteTitle: 'Dobro API',
//             customJs: 'custom.js',
//             swaggerOptions: {
//                 filter: true,
//                 docExpansion: 'none',
//             },
//         };
//         this.document = SwaggerModule.createDocument(this.app, config);
//         SwaggerModule.setup('api', this.app, this.document, options);
//     }
//
//     public generateTypes(): Promise<string> {
//         console.log('swagger:', path.resolve(__dirname, '..', '..', '..', 'types', 'backend', 'types.ts'));
//
//         return dtsgenerator({
//             contents: [this.document],
//             namespaceName: '',
//             ignoredNamespaces: ['Responses'],
//         });
//     }
//
// }
//
// function buildConfig(): Config {
//     const builder = new DocumentBuilder()
//         .setTitle('ChaikaCMS API')
//         .setVersion('1.0');
//
//     keysFrom(tagDescriptions).forEach(tag => builder.addTag(tag, tagDescriptions.get(tag)));
//
//     return builder.build();
// }
//
// function createOptions(): SwaggerCustomOptions {
//     return {
//         customCss,
//         customSiteTitle: 'ChaikaCMS API',
//         customJs: 'custom.js',
//         swaggerOptions: {
//             filter: true,
//             docExpansion: 'none',
//         },
//     };
// }
//
// export {
//     SwaggerComponent,
// };
