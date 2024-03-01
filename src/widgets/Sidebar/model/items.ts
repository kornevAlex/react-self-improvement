import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/img/home-outline.svg';
import Info from 'shared/img/info-outline.svg';
import Profile from 'shared/img/profile.svg';
import Article from 'shared/img/article.svg';

export interface SidebarItemInterface {
    path: string;
    textKey: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemInterface[] = [
	{
		path: RoutePath.main,
		textKey: 'main_nav',
		Icon: Home
	},
	{
		path: RoutePath.about,
		textKey: 'about_nav',
		Icon: Info
	},
	{
		path: RoutePath.profile,
		textKey: 'profile',
		Icon: Profile
	},
	{
		path: RoutePath.article,
		textKey: 'article',
		Icon: Article
	},
];
