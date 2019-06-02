import {
    JsonController,
    Get,
} from 'routing-controllers';

import { DreamService } from '../../services/dream';

@JsonController('/api/dream')
export class DreamController {
    @Get('/')
    public async getDreams(): Promise<{ id: number, name: string }[]> {
        return await DreamService.getDreams();
    }
}
