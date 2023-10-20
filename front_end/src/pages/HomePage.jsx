import { TextField, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <Grid container height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography>Welcome to Home!</Typography>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Link to='login'>Login to continue.</Link>
            </Grid>
        </Grid>
    )
}

export default HomePage