import { Typography ,Grid ,TextField} from "@material-ui/core";
import React, { Component } from "react";

class SearchCommunity extends Component{
    constructor(props){
        super(props);
    
        }

        render(){
            return (
              
               <div>


    <section id="subscribe">
      <div class="container  fadeInUp">
        <div class="row">
          <div class="col-md-8">
            <h3 class="subscribe-title">search for communities</h3>
            <p class="subscribe-text">Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
          </div>
        
          <div class="col-md-4 subscribe-btn-container">
          <TextField label ="search" variant="filled"></TextField>
            <a class="subscribe-btn" href="#">search</a>
          </div>
        </div>
      </div>
    </section>
               </div>
            )
        }
    }
    export default SearchCommunity
  
