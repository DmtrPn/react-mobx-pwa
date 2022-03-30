import { Controller, Get } from '@nestjs/common';

import { WishService } from '@modules/wish/services';

@Controller('wish')
export class WishController {

    private wishService = new WishService();

    @Get('/')
    public async getWishes(): Promise<{ id: number, name: string }[]> {
        return await this.wishService.getWishes();
    }

}
