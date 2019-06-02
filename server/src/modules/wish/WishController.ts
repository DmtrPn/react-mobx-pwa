import {
    JsonController,
    Get,
} from 'routing-controllers';

import { WishService } from '../../services/wish';

@JsonController('/api/wish')
export class WishController {
    @Get('/')
    public async getWishes(): Promise<{ id: number, name: string }[]> {
        return await WishService.getWishes();
    }
}
