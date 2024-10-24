type Menu = {
  label: string;
  icon?: string;
  path?: string;
  children?: Menu[];
}

const menus: Menu[] = [
  {
    label: 'Dashboard',
    icon: 'solar:home-2-bold-duotone',
    path: '/'
  },
  {
    label: 'Checkin/Out',
    icon: 'solar:inbox-archive-bold-duotone',
    path: '/'
  },
  {
    label: 'Kamar',
    icon: 'solar:bed-bold-duotone',
    children: [
      {
        label: 'Daftar Kamar',
        path: '/kamar'
      },
      {
        label: 'Tambah Kamar',
        path: '/kamar-add'
      }
    ]
  },
  {
    label: 'Transaksi',
    icon: 'solar:cart-3-bold-duotone',
    children: [
      {
        label: 'Transaksi',
        path: '/transaksi'
      },
      {
        label: 'Laporan',
        path: '/transaksi-add'
      }
    ]
  },
  {
    label: 'Komisi',
    icon: 'solar:money-bag-bold-duotone',
    path: '/'
  },
  {
    label: 'Penguna',
    icon: 'solar:users-group-rounded-bold-duotone',
    children: [
      {
        label: 'Admin',
        path: '/transaksi'
      },
      {
        label: 'Afiliator',
        path: '/transaksi-add'
      },
      {
        label: 'Pelanggan',
        path: '/transaksi-add'
      }
    ]
  },
  {
    label: 'Post',
    icon: 'solar:signpost-2-bold-duotone',
    children: [
      {
        label: 'Berita',
        path: '/transaksi'
      },
      {
        label: 'Kategory',
        path: '/transaksi-add'
      }
    ]
  },
  {
    label: 'Pengaturan',
    icon: 'solar:settings-bold-duotone',
    children: [
      {
        label: 'Kontak',
        path: '/transaksi'
      },
      {
        label: 'Sosial',
        path: '/transaksi-add'
      }
    ]
  }
];

export default menus;