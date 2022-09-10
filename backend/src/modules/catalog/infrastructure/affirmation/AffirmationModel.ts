import { Entity, Column, PrimaryColumn } from 'typeorm';

import { BaseModel } from '@common/infrastructure/BaseModel';

@Entity('affirmation')
export class AffirmationModel extends BaseModel<AffirmationModel> {

    @PrimaryColumn({ name: 'affirmation_id' })
    public id: string;

    @Column()
    public text: string;

}
