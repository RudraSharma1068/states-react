/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import"./InfoBox.css"


export default function InfoBox({ Info }) {
    const INIT_URL = 
    "https://imgs.search.brave.com/kPmrj3L7uACNCIzdmuCqaH_F6fynvS3SyWZhzKyMzA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/NS8xMi9kZWxoaS1m/b2ctMi5qcGc_dz0y/NDA"
    

    return (
        <div className='container'>
        <div className="InfoBox">
        <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Info.city}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
        <p>Temperature = {Info.temp}&deg;C</p>
        <p>Max Temp = {Info.tempMax}&deg;C</p>
        <p>Min Temp = {Info.tempMin}&deg;C</p>
        <p>The Weather Feels Like = {Info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
         </div>
    )
}