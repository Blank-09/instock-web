import { Grid, Box, Typography } from '@mui/material'
import ProductItems from '../components/ProductItems'

const Inventory = (props) => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid item xs={9} sm={11} md={10} lg={11}>
        <Box
          sx={{
            bgcolor: 'white',
            // marginLeft: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Inventory
          </Typography>
          <ProductItems />
        </Box>
      </Grid>
    </Box>
  )
}

export default Inventory
