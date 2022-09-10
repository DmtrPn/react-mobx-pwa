import { Controller, Get } from '@nestjs/common';

import { WishService } from '@modules/wish/services';

@Controller('wish')
export class WishController {

    private wishService = new WishService();

    @Get('/')
    public async getWishes(): Promise<{ wishes: { id: number, name: string }[] }> {
        const wishes = await this.wishService.getWishes();

        return { wishes };
    }

}
