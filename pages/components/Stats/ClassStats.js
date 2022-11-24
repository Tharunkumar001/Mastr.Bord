import { Divider, Grid } from "@material-ui/core"

const ClassStats = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h1>list of classes</h1>
            </Grid>
            <Grid item xs={8}>
                <h1>class stats</h1>
            </Grid>
        </Grid>
    )
}

export default ClassStats;