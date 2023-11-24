import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
} from '@mui/material'

import { sideBarLinks as sidebarLinks } from '../constants/sidebarLinks'

export default function SideBar() {
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen)

  return (
    <Box
      component="aside"
      sx={{
        pt: 2,
        pr: 2,
        height: '100%',
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        position: { xs: 'absolute', md: 'static' },
        width: { xs: '350px', md: '100%' },
        maxWidth: '90%',
        transition: 'left 0.3s ease-in-out',
        top: 0,
      }}
      style={{ left: isSidebarOpen ? '0%' : '-100%' }}
    >
      <List
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {sidebarLinks.map((item, index) => (
          <ListItem
            key={index}
            style={{
              marginTop: index + 1 === sidebarLinks.length ? 'auto' : 0,
            }}
            disablePadding
            dense
          >
            <ListItemButton
              sx={{ borderRadius: '0 50px 50px 0', mb: 1, px: 2, py: 1 }}
              component={NavLink}
              to={`/user${item.url}`}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <item.icon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
