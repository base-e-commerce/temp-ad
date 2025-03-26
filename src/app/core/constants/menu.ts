import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Accueil',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/arcticons--agenda.svg',
          label: 'Tableau de bord',
          route: '/dashboard/home',
        },
      ],
    },
    {
      group: 'Gestion',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/user-group-outline.svg',
          label: 'Clients',
          route: '/dashboard/gestion/customers',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/ic--sharp-shopify.svg',
          label: 'Commandes',
          route: '/dashboard/gestion/orders',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/document-text.svg',
          label: 'Produits',
          route: '/dashboard/gestion/products',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/material-symbols--flights-and-hotels.svg',
          label: 'Services',
          route: '/dashboard/gestion/services',
        },
      ],
    },
    {
      group: 'Finances',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/tdesign--money.svg',
          label: 'Paiements',
          route: '/dashboard/fincance/payments',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/mdi--money.svg',
          label: 'Rapports',
          route: '/dashboard/fincance/reports',
        },
      ],
    },
    {
      group: 'Support',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/custom-other/arcticons--la-poste.svg',
          label: 'Avis',
          route: '/dashboard/support/reviews',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/material-symbols-light--history-rounded.svg',
          label: 'Historique',
          route: '/dashboard/support/history',
        },
      ],
    },
    {
      group: 'Configuration',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user-circle.svg',
          label: 'Mon compte',
          route: '/dashboard/config/profile',
        },
        {
          icon: 'assets/icons/heroicons/custom-other/cog.svg',
          label: 'Paramètres',
          route: '/dashboard/config/settings',
        },
      ],
    },
  ];
}
