import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/img/home-outline.svg';
import Info from 'shared/img/info-outline.svg';
import Profile from 'shared/img/profile.svg';
import Article from 'shared/img/article.svg';
import { SidebarItemInterface } from '../types/sidebar';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItems: SidebarItemInterface[] = [
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
    ];
        
    if (userData){
      sidebarItems.push(
        {
          path: RoutePath.profile + userData?.id,
          textKey: 'profile',
          Icon: Profile
        },
        {
          path: RoutePath.article,
          textKey: 'article',
          Icon: Article
        }
      );
    }
    return sidebarItems;
  }
);
