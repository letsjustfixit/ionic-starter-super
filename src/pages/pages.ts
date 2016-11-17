import { ContentPage } from './content/content';
import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage } from './welcome/welcome';
import { ListMasterPage } from './list-master/list-master';
import { ListDetailPage } from './list-detail/list-detail';

export const Pages: any[] = [
  ContentPage,
  LoginPage,
  SignupPage,
  TabsPage,
  TutorialPage,
  WelcomePage,
  ListMasterPage,
  ListDetailPage
];

console.log('Pages here', Pages);

export const FirstRunPage = TutorialPage;
export const MainPage = TabsPage;
export const Tab1Root = ListMasterPage;
export const Tab2Root = ListMasterPage;
export const Tab3Root = ListMasterPage;
