import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Inject } from 'typescript-ioc';

import { Uuid } from '@common/controllers/validators/Uuid';
import { Public } from '@components/decorators/Pubic';
import { IAffirmationCrudService } from '@catalog/domain/affirmation/IAffirmationCrudService';

import { AffirmationListResponse } from './responces/AffirmationListResponse';
import { AffirmationCreateForm } from './validators/AffirmationCreateForm';
import { AffirmationUpdateForm } from './validators/AffirmationUpdateForm';
import { Action } from '@components/decorators/Action';
import { ActionType, EntityName } from '@core/access-control/types';

@ApiTags('Affirmations')
@Controller('affirmation')
export class AffirmationController {

    @Inject private crudService: IAffirmationCrudService;

    @Public()
    @ApiOkResponse({ type: AffirmationListResponse })
    @Get('/')
    public async find(): Promise<AffirmationListResponse> {
        const affirmations = await this.crudService.find({});
        return { affirmations };
    }

    @Public()
    @ApiOkResponse({ type: AffirmationListResponse })
    @Get('/random')
    public async getRandom(): Promise<AffirmationListResponse> {
        const affirmations = await this.crudService.getRandom();
        return { affirmations };
    }

    @Action(EntityName.Affirmation, ActionType.Create)
    @Post('/')
    public async create(
        @Body() { affirmation }: AffirmationCreateForm,
    ): Promise<void> {
        await this.crudService.create(affirmation);
    }

    @Action(EntityName.Affirmation, ActionType.Edit)
    @Put('/:id')
    public async update(
        @Body() { affirmation }: AffirmationUpdateForm,
        @Param() { id }: Uuid,
    ): Promise<void> {
        await this.crudService.update(id, affirmation);
    }

    @Action(EntityName.Affirmation, ActionType.Remove)
    @Delete('/:id')
    public async remove(
        @Param() { id }: Uuid,
    ): Promise<void> {
        await this.crudService.remove(id);
    }

}
