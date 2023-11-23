import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
} from '@mui/material'

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

const sideBarComponent = [
  {
    title: 'Home',
    icon: <HomeOutlined color="primary" />,
  },
  {
    title: 'Inventory',
    icon: <Inventory2Outlined color="primary" />,
  },
  {
    title: 'Orders',
    icon: <CardTravelOutlined color="primary" />,
  },
  {
    title: 'Customers',
    icon: <PeopleAltOutlined color="primary" />,
  },
  {
    title: 'Revenue',
    icon: <MonetizationOnOutlined color="primary" />,
  },
  {
    title: 'Growth',
    icon: <TrendingUpOutlined color="primary" />,
  },
  {
    title: 'Reports',
    icon: <DescriptionOutlined color="primary" />,
  },
  {
    title: 'Settings',
    icon: <SettingsOutlined color="primary" />,
  },
]

export default function SideBar() {
  const [selected, setSelected] = useState(0)
  const handlSelectedComponent = (_, index) => {
    setSelected(index)
  }

  return (
    <Box
      component="aside"
      sx={{
        pt: 2,
        pr: 2,
        height: '100%',
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      <List
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {sideBarComponent.map((comp, index) => (
          <ListItem
            key={index}
            style={{
              marginTop: index + 1 === sideBarComponent.length ? 'auto' : 0,
            }}
            disablePadding
            dense
          >
            <ListItemButton
              sx={{ borderRadius: '0 50px 50px 0', mb: 1, px: 2, py: 1 }}
              selected={selected === index}
              onClick={(event) => handlSelectedComponent(event, index)}
              component={NavLink}
              to={`/${comp.title}`}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>{comp.icon}</ListItemIcon>
              <ListItemText primary={comp.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
