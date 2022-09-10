import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';

import { Request } from '@core/types';
import { DreamService } from '@modules/dream/services';
import { backendProxy } from '@components/proxy';

@Controller('dream')
export class DreamController {

    private dreamService = new DreamService();

    @Get('/')
    public async getDreams(): Promise<{ id: number, name: string }[]> {
        return this.dreamService.getDreams();
    }

    @Get('/:id')
    public async getDreamProxy(
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<void> {
        await backendProxy.proxyRequest({ req, res });
    }

}
