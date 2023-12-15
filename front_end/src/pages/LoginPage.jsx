import { TextField, Typography, Grid, Button } from '@mui/material'
import { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    
    const handleLogin = () => {
        fetch(import.meta.env.VITE_API_URL + '/api/users/login', {
            body: JSON.stringify({
                email: email,
                pass: password
            }),
            method: "POST"
        }).then(res => {
            if (res.status == 200) {
                res.json()
            } else if (res.status == 404) {
                setMessage('Incorrect Email or Password')
            } else if (res.status == 500) {
                setMessage('Server error. Please try again')
            }
        }).then(res => {
            console.log('received data',res)
        }).catch(err => {
            console.error(err)
            setMessage('Error querying the server')
        })
    }

    return (
        <Grid container  padding={5} paddingLeft={10} justifyContent={'center'} display={'flex'}> 
        <Grid container item xs={'auto'} justifyContent={"center"} sx={{ boxShadow: 10 }} display='flex'>
            <img src="/images/logins_bg.jpg" width={'280'} style={{border:'3px solid grey'}}></img>        
            </Grid>
        
        <Grid container item xs={3} sx={{ boxShadow: 10 }} bgcolor={"white"} alignItems={'center'} padding={3} border={1} borderColor={'primary.grey'}>
            <Grid item xs={'auto'}>
                <Typography align='center' padding={1}>Welcome to GLOW Consultants</Typography>
                <Typography align='center' padding={1} >Project Management Tool</Typography>
            </Grid>
            <Grid item xs={'auto'}>
                <TextField variant='outlined' label="Email" onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={'auto'}>
                <TextField variant='outlined' label="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Grid>
            <Grid item xs={'auto'}>
                <Typography align='center' padding={1}>{message}</Typography>
            </Grid>
            <Grid item xs={'auto'}>
                <Button variant="contained" onClick={handleLogin} disabled={!email || !password}>Login</Button>
            </Grid>
        </Grid>
        </Grid> 
    )

}

export default LoginPage