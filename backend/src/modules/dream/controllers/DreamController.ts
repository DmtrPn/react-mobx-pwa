import { Controller, Get } from '@nestjs/common';

import { Public } from '@components/decorators/Pubic';

import { DreamService } from '../../dream/services';

@Controller('dream')
export class DreamController {

    private dreamService = new DreamService();

    @Public()
    @Get('/')
    public async getDreams(): Promise<{ id: number, name: string }[]> {
        return this.dreamService.getDreams();
    }

}
