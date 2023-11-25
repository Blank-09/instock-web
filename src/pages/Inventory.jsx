import { Grid, Box, Typography } from '@mui/material'
import { Component } from 'react'
import ProductItems from '../components/ProductItems'
export default class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Box>
        <Grid item xs={9} sm={11} md={10} lg={11}>
          <Box
            sx={{
              bgcolor: 'white',
              marginLeft: 2,
              width: '100vb',
            }}
          >
            <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold', my: 3 }}>
              Inventory
            </Typography>
            <ProductItems />
          </Box>
        </Grid>
      </Box>
    )
  }
}
