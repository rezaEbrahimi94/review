/* Mock Data of Side bar */
export const sideMenuData = {
  id: 'sidebar-01',
  items: [
    {
      id: 'parent-01',
      label: 'Dashboard',
      url: '/dashboard',
      icon: 'DashboardIcon',
    },
    {
      id: 'parent-02',
      label: 'Inventory',
      icon: 'InventoryIcon',
      items: [
        {
          id: 'child-01',
          label: 'Artwork',
          url: '/dashboard/artwork',
        },
        {
          id: 'child-02',
          label: 'Products',
          url: '/dashboard/products',
        },
        {
          id: 'child-03',
          label: 'Editions',
          url: '/dashboard/editions',
        },
        {
          id: 'child-04',
          label: 'Collections',
          url: '/dashboard/collections',
        },
      ]
    },
    {
      id: 'parent-03',
      label: 'Artists',
      url: '/dashboard/artists',
      icon: 'BrushIcon',
    },
    {
      id: 'parent-04',
      label: 'Consignments',
      url: '/dashboard/consignments',
      icon: 'SendIcon',
    },
    {
      id: 'parent-05',
      label: 'Sales',
      url: '/sales',
      icon: 'SalesIcon',
    },
    {
      id: 'parent-06',
      label: 'Accounts',
      url: '/dashboard/accounts',
      icon: 'PiggyIcon',
    },
    {
      id: 'parent-07',
      label: 'Reports',
      url: '/dashboard/reports',
      icon: 'GraphIcon',
    },
  ]
}

/* Mock Data of Side bar */
export const sideMenuSettingsData = {
  id: 'sidebar-02',
  items: [
    {
      id: 'parent-01',
      label: 'Art centre profile',
      url: '/dashboard/SAM-set-up/art-centre-profile',
      icon: 'ACIcon',
    },
    {
      id: 'parent-02',
      label: 'SAM setup',
      icon: 'TuneIcon',
      items: [
        {
          id: 'child-01',
          label: 'General',
          url: '/dashboard/SAM-set-up/general',
        },
        {
          id: 'child-02',
          label: 'Sales factors',
          url: '/dashboard/SAM-set-up/sakes-factors',
        },
        {
          id: 'child-03',
          label: 'Price manager',
          url: '/dashboard/SAM-set-up/price-manager',
        },
        {
          id: 'child-04',
          label: 'Categories',
          url: '/dashboard/SAM-set-up/categories',
        },
      ]
    },
    {
      id: 'parent-03',
      label: 'Users',
      url: '/dashboard/users',
      icon: 'PeopleIcon',
    },
  ]
}
