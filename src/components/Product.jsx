import { Avatar, Typography } from '@mui/material'
export default function Product({ productName }) {
  return (
    <>
      <Avatar
        alt="alt"
        // src="image/source"
        sx={{ width: 30, height: 30 }}
      >
        A
      </Avatar>

      <Typography sx={{ mx: 3 }} variant="subtitle2">
        {productName}
      </Typography>
    </>
  )
}
