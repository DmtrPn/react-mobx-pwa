import { EntityPermission } from '@core/access-control/abstract/EntityPermission';
import { EntityName } from '@core/access-control/types';

export class MoviePermission extends EntityPermission {

    public static get entity(): EntityName {
        return EntityName.Movie;
    }

}
