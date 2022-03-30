import { Controller, Get } from '@nestjs/common';

import { DreamService } from '@modules/dream/services';

@Controller('dream')
export class DreamController {

    private dreamService = new DreamService();

    @Get('/')
    public async getDreams(): Promise<{ id: number, name: string }[]> {
        return await this.dreamService.getDreams();
    }

}
