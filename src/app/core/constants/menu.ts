import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'HOME',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/user-group-outline.svg',
          label: 'DASHBOARD',
          route: '/dashboard/home',
        }
      ],
    },
    {
      group: 'MENU',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/user-group-outline.svg',
          label: 'SUBMENU',
          route: '/dashboard/page',
        }
      ],
    },
    {
      group: 'CONFIG',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/cog.svg',
          label: 'SETTINGS',
          route: '/dashboard/page-example',
        },
      ],
    },
  ];
}
