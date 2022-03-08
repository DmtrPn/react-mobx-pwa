import {
    JsonController,
    Post,
    Body,
    QueryParam,
    Res,
} from 'routing-controllers';
import { Response } from 'express';
import * as webPush from 'web-push';

webPush.setGCMAPIKey(process.env.GCM_API_KEY || null);

webPush.setVapidDetails(
    'mailto:hallo@justmarkup.com',
    process.env.WP_PUBLICK_KEY,
    process.env.WP_PRIVATE_KEY,
);

@JsonController('/api/push')
export class PushController {
    @Post('/register')
    public async register(@Res() res: Response) {
        return res.sendStatus(201);
    }

    @Post('/notification')
    public async notification(
        @Body() body: {
            endpoint: string,
            key: string,
            ttl: number,
            authSecret: string,
            payload: string,
        },
        @QueryParam('delay') delay: number,
        @Res() res: Response,
    ) {
        setTimeout(() => {
            webPush.sendNotification(
                {
                    endpoint: body.endpoint,
                        // TTL: body.ttl,
                    keys: {
                        p256dh: body.key,
                        auth: body.authSecret,
                    },
                }, body.payload);
        }, delay * 1000);
    }
}
