import { FindCommand } from '@common/infrastructure/FindCommand';
import { AffirmationModel } from '@catalog/infrastructure/affirmation/AffirmationModel';
import { AffirmationFindOptions } from '@catalog/domain/affirmation/types';

export class AffirmationFindCommand extends FindCommand<AffirmationModel, AffirmationFindOptions> {

    private text?: string;
    private random?: string;

    constructor(options: AffirmationFindOptions) {
        super(options, AffirmationModel);
    }

    protected addFilters(): this {
        return this
            .filterBy('text', this.text);
        // .addRandomFilter();
    }

    protected addRandomFilter(): this {
        if (this.random) {
            // const sub = this.qb.subQuery('floor(random() * (SELECT COUNT(*) FROM affirmation))');
            this.qb
                .offset('floor(random() * (SELECT COUNT(*) FROM affirmation))' as unknown as number)
                .limit(1);
        }
        return this;
    }
}
