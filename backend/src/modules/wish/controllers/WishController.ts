import { Controller, Get } from '@nestjs/common';

import { Public } from '@components/decorators/Pubic';

import { WishService } from '../../wish/services';

@Controller('wish')
export class WishController {

    private wishService = new WishService();

    @Public()
    @Get('/')
    public async getWishes(): Promise<any> {
        const wishes = await this.wishService.getWishes();

        return { wishes };

    }

}
