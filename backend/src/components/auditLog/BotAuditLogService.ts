import { IAuditLogService } from './IAuditLogService';

export const enum BotAuditEventType {
    Start = 'Start',
    Command = 'Command',
    Text = 'Text',
    GetMovie = 'GetMovie',
    ActionGetMovie = 'ActionGetMovie',
}

class BotAuditLogService extends IAuditLogService<BotAuditEventType> {
    protected readonly apiKey = process.env.AMPLITUDE_BOT_PKEY;
}

export const botAuditLogService = new BotAuditLogService();
