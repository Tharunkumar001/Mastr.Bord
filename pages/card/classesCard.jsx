import { Card, CardContent, CardHeader, Grid } from "@material-ui/core"

function ClassCard({ Component, pageProps }) {
    return(
        <div>
            <Grid xs={12} md={4} sm={4}>
                <Card>
                    <CardHeader title="done" subheader='tharu'/>
                </Card>
            </Grid>
        </div>
    )
}

export default ClassCard
