import * as Amplitude from '@amplitude/node';

interface EventData<ET> {
    userId: string;
    eventType: ET;
    data: object;
}

export abstract class IAuditLogService<ET> {

    protected abstract readonly apiKey: string;
    private client: Amplitude.NodeClient;

    public async logEvent(params: EventData<ET>): Promise<void> {
        const client = this.getClient();

        client.logEvent(this.formatData(params));
        client.flush();
    }

    private getClient(): Amplitude.NodeClient {
        if (!this.client) {
            this.client = Amplitude.init(this.apiKey);
        }

        return this.client;
    }

    private formatData({ userId, eventType, data }: EventData<ET>): Amplitude.Event {
        return {
            user_id: userId,
            event_type: eventType as unknown as string,
            event_properties: data,
        };
    }
}