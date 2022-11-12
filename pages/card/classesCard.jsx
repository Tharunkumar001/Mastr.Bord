import { Card, CardContent, CardHeader, Grid } from "@material-ui/core"
import React from "react";

function ClassCard({ Component, pageProps }) {
    return(
        <div >
            <Grid xs={12} >
                {[1,2,3].map((e,i) => {
                    return(
                        <Card key={i} >
                            <CardHeader title="done" />
                        </Card>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ClassCard
