import { ApiResponseProperty } from '@nestjs/swagger';

import { AffirmationViewModel } from './view-model/AffirmationViewModel';

export class AffirmationListResponse {

    @ApiResponseProperty({
        type: [AffirmationViewModel],
    })
    public affirmations: AffirmationViewModel[];

}
