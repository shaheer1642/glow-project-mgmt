import { TextField, Typography, Grid, CircularProgress, Card, CardContent, Chip } from '@mui/material'
import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    const [projects, setProjects] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/api/reliefweb/projects')
            .then(payload => payload.json())
            .then(payload => {
                console.log(payload)
                setProjects(payload.data)
                const career_categories = payload.data.reduce((cats, p) => cats.concat(p.detail.fields.career_categories.map((cat => cat.name)).filter(cat => !cats.includes(cat))), [])
                setCategories(career_categories)
                setSelectedCategories(career_categories)
            })
    }, [])

    const handleCategoryClick = (cat) => {
        if (selectedCategories.includes(cat)) {
            setSelectedCategories(selectedCategories.filter(name => name != cat))
        } else {
            setSelectedCategories([...selectedCategories, cat])
        }
    }

    return (
        <Grid container height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography>Welcome to Dashboard!</Typography>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography>Total Projects: {projects.length}</Typography>
            </Grid>
            <Grid container item gap={1} xs={12} display='flex' justifyContent={'center'}>
                {categories.map(cat =>
                    <Grid item xs={'auto'} display='flex' justifyContent='center'>
                        <Chip onClick={() => handleCategoryClick(cat)} label={cat} style={selectedCategories.includes(cat) ? { color: 'blue', borderColor: 'blue' } : {}} variant='outlined' />
                    </Grid>
                )}
            </Grid>
            {projects.length == 0 ? <CircularProgress /> :
                projects.filter(p => selectedCategories.some(cat => p.detail.fields.career_categories.some(p_cat => p_cat.name == cat))).map(p =>
                    <Grid item xs={12} padding={5}>
                        <Card elevation={10} style={{ border: '3px blue solid' }}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={12} display='flex' justifyContent='center'>
                                        <Link to={`https://reliefweb.int/node/${p.href.split('/').pop()}`}>{p.fields.title}</Link>
                                    </Grid>
                                    <Grid container item gap={1} xs={12}>
                                        {p.detail.fields.career_categories.map(cat =>
                                            <Grid item xs={'auto'} display='flex' justifyContent='center'>
                                                <Chip label={cat.name} />
                                            </Grid>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} display='flex' justifyContent='center'>
                                        <div dangerouslySetInnerHTML={{ __html: p.detail.fields["body-html"] }}></div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            }
        </Grid >
    )
}

export default Dashboard