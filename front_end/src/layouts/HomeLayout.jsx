import { Button, Typography, Grid, AppBar } from '@mui/material'
import { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

function HomeLayout() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    return (
        <Grid container minWidth={'100vw'} minHeight={'100vh'}>
            <Grid container item xs={12} marginBottom={'auto'} bgcolor='skyblue' borderBottom={'2px blue solid'}>
                <Grid item xs={'auto'} marginLeft={'auto'}>
                    <Link to='/'>Project Management System</Link>
                </Grid>
                <Grid item xs={'auto'} marginLeft={'auto'}>
                    <Button variant='outlined' onClick={() => navigate('login')}>Login</Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Outlet />
            </Grid>
            <Grid item xs={12} marginTop={'auto'} bgcolor='skyblue' borderTop={'2px blue solid'}>
                <Typography>This is the footer</Typography>
            </Grid>
        </Grid>
    )
}

export default HomeLayout