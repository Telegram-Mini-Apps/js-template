import { HomePage } from '@/pages/HomePage/HomePage';
import { ThemeParamsPage } from '@/pages/ThemeParamsPage';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage';
import { InitDataPage } from '@/pages/InitDataPage/InitDataPage';
import { TonConnectPage } from '@/pages/TonConnectPage/TonConnectPage';

export const routes = [
  { pathname: '/', Page: HomePage },
  { pathname: '/init-data', Page: InitDataPage, title: 'Init Data' },
  { pathname: '/theme-params', Page: ThemeParamsPage, title: 'Theme Params' },
  { pathname: '/launch-params', Page: LaunchParamsPage, title: 'Launch Params' },
  {
    pathname: '/ton-connect',
    Page: TonConnectPage,
    title: 'TON Connect',
    icon: `${import.meta.env.BASE_URL}/ton.svg`,
  },
];
