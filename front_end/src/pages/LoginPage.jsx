import { TextField, Typography, Grid, Button } from '@mui/material'
import { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    return (
        <Grid container  padding={3}> 
        <Grid container item xs={6} justifyContent={"right"}>
            <img src="/images/login_bg.JPG" width={300}></img>        
            </Grid>
        <Grid container item xs={3} bgcolor={"grey"} alignItems={'center'} padding={3}>
            <Grid item xs={12}>
                <TextField variant='outlined' label="Username"/>
            </Grid>
            <Grid item xs={12}>
                <TextField variant='outlined' label="Password"/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={() => navigate('/dashboard')}>Login</Button>
            </Grid>
        </Grid>
        </Grid> 
    )

}

export default LoginPage