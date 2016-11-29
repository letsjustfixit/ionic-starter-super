import { User } from './user';
import { Api } from './api';
import { Settings } from './settings';
import { Items } from '../mocks/providers/items';

export {
  User,
  Api,
  Settings,
  Items
};

export const Providers: any[] = [
  User,
  Api,
  Items
  // Settings is not included in this list because it needs to be configured separately
]
