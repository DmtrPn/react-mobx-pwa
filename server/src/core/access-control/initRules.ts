import { AccessControl } from './AccessControl';

import { MovieRule } from '@catalog/access/MovieRule';

const accessControl = AccessControl.getInstance();

accessControl.addRule(MovieRule.entity, MovieRule);
