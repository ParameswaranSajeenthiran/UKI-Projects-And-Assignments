import { Typography ,Grid} from "@material-ui/core";
import React, { Component } from "react";

class Blog extends Component{
    constructor(props){
        super(props);
    
        }

        render(){
            return (
              
                <Grid container>
                <Grid item  xs={6}>
                <Typography variant="h3">
                    Blog
                </Typography>
                              </Grid>

                              </Grid>
            )
        }
    }
    export default Blog
  
