import { ContentPage } from './content/content';
import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage } from './welcome/welcome';
import { ListMasterPage } from './list-master/list-master';
import { ListDetailPage } from './list-detail/list-detail';

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
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

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = ListMasterPage;
export const Tab3Root = ListMasterPage;
