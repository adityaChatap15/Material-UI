import React, {useState}  from 'react'
import {Stack, Rating,} from '@mui/material'
// import FavoriteIcon from '@mui/icons-material/FavoriteIcon'
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {

    const [value, setValue] = useState<number | null>(null)
    const handleChange = (
        event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setValue(newValue)
    }
  return (
    <Stack spacing={2}>
      <Rating
       value={value}
       onChange={handleChange}
       precision ={0.5}
       size='large'
    //    icon={<FavoriteIcon fontSize='inhrit' color='error'/>}
       emptyIcon = {<FavoriteBorderIcon fontSize='inherit'/>}
      
      />
    </Stack>
  )
}

export default MuiRating

