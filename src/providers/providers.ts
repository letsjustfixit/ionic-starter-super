import { User } from './user';
import { Api } from './api';
//import { Thing } from './thing';
import { Thing } from '../mocks/providers/thing';

export {
  User,
  Api,
  Thing
};

export const Providers: any[] = [
  User,
  Api,
  Thing
]
