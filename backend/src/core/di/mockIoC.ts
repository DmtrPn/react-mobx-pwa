import { Container } from 'typescript-ioc';

import { IMovieCrudService } from '@catalog/domain/movie/IMovieCrudService';
import { MovieCrudService } from '@catalog/infrastructure/movie/MovieCrudService';

Container.bind(IMovieCrudService).to(MovieCrudService);
