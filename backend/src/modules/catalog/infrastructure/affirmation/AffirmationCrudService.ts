import { Class } from 'project-types/common';

import { IdentityCrudService } from '@common/infrastructure/IdentityCrudService';
import { FindCommand } from '@common/infrastructure/FindCommand';

import { IAffirmationCrudService } from '@catalog/domain/affirmation/IAffirmationCrudService';
import { AffirmationCreateData, AffirmationFindOptions, AffirmationUpdateData } from '@catalog/domain/affirmation/types';

import { AffirmationModel } from './AffirmationModel';
import { AffirmationFindCommand } from './AffirmationFindCommand';

export class AffirmationCrudService
    extends IdentityCrudService<AffirmationModel, AffirmationCreateData, AffirmationUpdateData, AffirmationFindOptions>
    implements IAffirmationCrudService {

    protected modelClass = AffirmationModel;
    protected findCommand: Class<FindCommand<AffirmationModel, AffirmationFindOptions>, AffirmationFindOptions> = AffirmationFindCommand;

    public async getRandom(): Promise<AffirmationModel[]> {
        const rows = await this.manager.query('select * from affirmation offset floor(random() * (select count(*) from affirmation))  limit 1;');
        return rows.map(({ affirmation_id, text }) => ({ text, id: affirmation_id }));
    }

    protected enrichCreationParams(params: AffirmationCreateData): AffirmationModel {
        return new AffirmationModel({ ...params });
    }

}
