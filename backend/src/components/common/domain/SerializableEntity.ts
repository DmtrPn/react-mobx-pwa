import { assignParams } from '@utils/assignParams';

export abstract class SerializableEntity<CP, UP, Dto> {

    constructor(params: CP) {
        this.checkCreateParams(params);
        this.setParams(params);
    }

    public abstract get dto(): Dto;

    protected setParams(params: CP | UP): void {
        assignParams(this, params as any);
    }

    protected checkCreateParams(params_: CP): void {}

}
