import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  
  {
    title: 'User',
    icon: 'nb-person',
    link: '/pages/user',
    children: [
      {
        title: 'Add User',
        link: '/pages/user/adduser',
      },
      {
        title: 'View User',
        link: '/pages/user/viewuser',
      },
      // {
      //   title: 'Edit User',
      //   link: '/pages/user/edituser/:id',
      // },
    ]
   },
   {
      title: 'Vendor Management',
      icon: 'nb-person',
      link: '/pages/vendor',
      children: [
        {
          title: 'Add Vendor',
          link: '/pages/vendor/addvendor',
        }, {
          title: 'View Vendor',
          link: '/pages/vendor/viewvendor',
        },
        // {
        //   title: 'Edit Vendor',
        //   link: '/pages/vendor/editvendor',
        // },
      ],
    },
    {
      title: 'Sub Admin',
      icon: 'nb-person',
      link: '/pages/subadmin',
      children: [
        {
          title: 'Add Subadmin',
          link: '/pages/subadmin/addsubadmin',
        }, {
          title: 'View Subadmin',
          link: '/pages/subadmin/viewsubadmin',
        },
      ],
    },
    {
      title: 'Driver Management',
      icon: 'nb-person',
      link: '/pages/driver',
      children: [
        {
          title: 'Add Driver',
          link: '/pages/driver/adddriver',
        }, {
          title: 'View Driver',
          link: '/pages/driver/viewdriver',
        },        
      ],
    },
    {
      title: 'Vehicle Management',
      icon: 'nb-location',
      link: '/pages/vehicle',
      children: [
        {
          title: 'Add Vehicle',
          link: '/pages/vehicle/addvehicle',
        }, {
          title: 'View Vehicle',
          link: '/pages/vehicle/viewvehicle',
        }, {
          title: 'Add Vehicle Type',
          link: '/pages/vehicle/vehicletype',
        },
        {
          title: 'View Vehicle Type',
          link: '/pages/vehicle/viewvehicletype',
        },
      ],
    },
    {
      title: 'Quotation Management',
      icon: 'nb-compose',
      link: '/pages/quotation',
      children: [
        {
          title: 'Add Quotation',
          link: '/pages/quotation/addquotation',
        }, {
          title: 'View Quotation',
          link: '/pages/quotation/viewquotation',
        },
      ],
    },
    {
      title: 'Order Management',
      icon: 'nb-list',
      link: '/pages/order',
      children: [
        {
          title: 'Add Order',
          link: '/pages/order/addorder',
        }, {
          title: 'View Order',
          link: '/pages/order/vieworder',
        },
      ],
    },
    {
      title: 'Trip Management',
      icon: 'nb-arrow-retweet',
      link: '/pages/trip',
      children: [
        {
          title: 'Add Trip',
          link: '/pages/trip/addtrip',
        }, {
          title: 'View Trip',
          link: '/pages/trip/viewtrip',
        },
      ],
    },
    {
      title: 'Transaction Management',
      icon: 'nb-arrow-retweet',
      link: '/pages/transaction',
      children: [{
          title: 'Transaction List View',
          link: '/pages/transaction/transactionlistview',
        },
      ],
    },
    {
      title: 'Session Management',
      icon: 'nb-arrow-retweet',
      link: '/pages/session',
      children: [
        {
          title: 'Session',
          link: '/pages/session/session',
        }
      ],
    },
    {
      title: 'Invoice Management',
      icon: 'nb-email',
      link: '/pages/invoice',
      children: [
        {
          title: 'Add Invoice',
          link: '/pages/invoice/addinvoice',
        }, {
          title: 'View Invoice',
          link: '/pages/invoice/viewinvoice',
        },
      ],
    },
    {
      title: 'Request Management',
      icon: 'nb-email',
      link: '/pages/request',
      children: [
        {
          title: 'Add Request',
          link: '/pages/request/addrequest',
        }, {
          title: 'View Invoice',
          link: '/pages/invoice/viewinvoice',
        },
      ],
    },
    {
      title: 'Ticket Management',
      icon: 'ion-document-text',
      link: '/pages/ticket',
      children: [
        {
          title: 'Add Ticket',
          link: '/pages/ticket/addticket',
        }, {
          title: 'View Ticket',
          link: '/pages/ticket/viewticket',
        },
      ],
    },
    {
      title: 'Earnings Management',
      icon: 'nb-bar-chart',
      link: '/pages/earnings',
      children: [
        {
          title: 'Add Earnings',
          link: '/pages/earnings/addearnings',
        }, {
          title: 'View Earnings',
          link: '/pages/earnings/viewearnings',
        },
      ],
    },
    {
      title: 'Notifications',
      icon: 'nb-snowy-circled',
      link: '/pages/notifications',
      children: [{
          title: 'View Notifications',
          link: '/pages/notifications/viewnotifications',
        },
      ],
    }
];
