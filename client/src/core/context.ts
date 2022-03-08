import { Container } from 'typescript-ioc';

import { IDreamFacade } from '@facades';

import { DreamFacade } from '@dream/services/DreamFacade';

Container.bind(IDreamFacade).to(DreamFacade);
