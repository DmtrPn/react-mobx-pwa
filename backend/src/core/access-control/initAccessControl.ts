import { AccessControl } from './AccessControl';

import { MoviePermission } from '@catalog/access/MoviePermission';
import { UserMoviePermission } from '@catalog/access/UserMoviePermission';
import { AffirmationPermission } from '@catalog/access/AffirmationPermission';
import { UserPermission } from '@user/access/UserPermission';

const accessControl = AccessControl.getInstance();

accessControl.addEntityPermission(MoviePermission.entity, MoviePermission);
accessControl.addEntityPermission(UserMoviePermission.entity, UserMoviePermission);
accessControl.addEntityPermission(AffirmationPermission.entity, AffirmationPermission);
accessControl.addEntityPermission(UserPermission.entity, UserPermission);
