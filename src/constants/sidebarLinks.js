import {
  HomeOutlined,
  Inventory2Outlined,
  SettingsOutlined,
  DescriptionOutlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  TrendingUpOutlined,
  PeopleAltOutlined,
} from '@mui/icons-material'

export const sideBarLinks = [
  {
    title: 'Home',
    url: '/',
    icon: HomeOutlined,
  },
  {
    title: 'Inventory',
    url: '/inventory',
    icon: Inventory2Outlined,
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: CardTravelOutlined,
  },
  {
    title: 'Customers',
    url: '/customers',
    icon: PeopleAltOutlined,
  },
  {
    title: 'Revenue',
    url: '/revenue',
    icon: MonetizationOnOutlined,
  },
  {
    title: 'Growth',
    url: '/growth',
    icon: TrendingUpOutlined,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: DescriptionOutlined,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsOutlined,
  },
]
