import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        width: 'fit-content',
        padding: '1rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    root: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

function StudentPage() {
    const styles = useStyles();
    return(
        <div className={styles.root}>
            <h2 style={{color:"white"}}>for logo</h2>

            <Card className={styles.card}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                
                </Card>
        </div>
    )
}

export default StudentPage
