import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';



export default function PostRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      <Typography component="legend"></Typography>
      <Rating name="customized-10" defaultValue={2} max={5} />
    </Box>
  );
}
