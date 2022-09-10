import { AccessControl } from './AccessControl';

import { MoviePermission } from '@catalog/access/MoviePermission';
import { MovieRatingPermission } from '@catalog/access/MovieRatingPermission';
import { AffirmationPermission } from '@catalog/access/AffirmationPermission';
import { UserPermission } from '@user/access/UserPermission';

const accessControl = AccessControl.getInstance();

accessControl.addEntityPermission(MoviePermission.entity, MoviePermission);
accessControl.addEntityPermission(MovieRatingPermission.entity, MovieRatingPermission);
accessControl.addEntityPermission(AffirmationPermission.entity, AffirmationPermission);
accessControl.addEntityPermission(UserPermission.entity, UserPermission);
