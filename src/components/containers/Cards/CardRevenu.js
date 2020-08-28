import React from 'react';
import Sales from "./Sales";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function CardRevenu(){
    return(
        <Container>
            <Grid item>
                    <Container>
                        <div>
                            <Typography>Income</Typography>
                        </div>
                        {/*<div className="jr-dealclose-header-right">*/}
                        {/*    <p className="mb-2"><span style={{backgroundColor: "#3BB4A3"}}*/}
                        {/*                              className="size-8 rounded-circle d-inline-block mr-1"/>Expanse</p>*/}
                        {/*    <p className="ml-2 mb-2"><span style={{backgroundColor: '#FF9800'}}*/}
                        {/*                                   className="size-8 rounded-circle d-inline-block mr-1"/>Income</p>*/}
                        {/*</div>*/}
                    </Container>
                    <Sales/>
            </Grid>
        </Container>
    );
}

export default CardRevenu;