import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { AffirmationModel } from '@catalog/infrastructure/affirmation/AffirmationModel';
import { AffirmationCreateData, AffirmationFindOptions, AffirmationUpdateData } from '@catalog/domain/affirmation/types';

export abstract class IAffirmationCrudService extends TransactionManager {
    public abstract find(options: AffirmationFindOptions): Promise<AffirmationModel[]>;
    public abstract getRandom(): Promise<AffirmationModel[]>;
    public abstract getById(id: string): Promise<AffirmationModel>;
    public abstract create(params: AffirmationCreateData): void;
    public abstract update(id: string, params: AffirmationUpdateData): void;
    public abstract remove(id: string): void;
}
