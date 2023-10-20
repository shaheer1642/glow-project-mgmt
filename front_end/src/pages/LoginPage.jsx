import { TextField, Typography, Grid, Button } from '@mui/material'
import { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    return (
        <Grid container minHeight={'100%'} display='flex' alignItems={'center'} justifyContent={'center'}>
            <Grid container item xs={'auto'} gap={3} padding={3} flexDirection={'column'} display='flex' alignItems={'center'} justifyContent={'center'} border='3px solid skyblue'>
                <Grid item xs={12}>
                    <Typography>Please Login to Access the Dashboard</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' label='Username' />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant='outlined' label='Password' />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' onClick={() => navigate('/dashboard')}>Login</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginPage