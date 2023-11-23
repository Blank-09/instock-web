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
import { sideBarLinks as sidebarLinks } from '../constants/sidebarLinks'

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
              selected={selected === index}
              onClick={(event) => handlSelectedComponent(event, index)}
              component={NavLink}
              to={`/${item.title}`}
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
