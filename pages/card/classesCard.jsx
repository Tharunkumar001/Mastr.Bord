import { Card, CardContent, CardHeader, Grid } from "@material-ui/core"
import React from "react";

function ClassCard({ Component, pageProps }) {
    return(
        
        <Grid container spacing={2}>
            {[1,2,3,4,5].map((e,i) => {
                return(
                    <Grid item xs={12} sm={4} md={4} key={i} >
                        <Card >
                            <CardHeader title="done" />
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ClassCard
