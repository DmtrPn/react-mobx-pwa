import { TelegrafModule } from 'nestjs-telegraf';
import { Module } from '@nestjs/common';

import { BotModule } from '@bot/BotModule';

@Module({
    imports: [
        TelegrafModule.forRoot({
            token: process.env.TB_TOKEN,
            launchOptions: process.env.CURRENT_ENV !== 'dev'
                ? {
                    webhook: {
                        domain: `${process.env.TB_WEBHOOK_URL}`,
                        hookPath: `/${process.env.TB_WEBHOOK_SECRET}`,
                    },
                }
                : undefined,
        }),
        BotModule,
    ],
    providers: [],
})
export class BotAppModule {}
