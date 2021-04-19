import { Typography ,Grid} from "@material-ui/core";
import React, { Component } from "react";

class Hero extends Component{
    constructor(props){
        super(props);
    
        }

        render(){
            return (
              <div>
                <section id="hero">
    <div class="hero-container">
      <div class="wow fadeIn">
        <div class="hero-logo">
          <img style={{width:"100px",height:"100px"}} src="https://previews.123rf.com/images/lumut/lumut1511/lumut151100256/47789223-community-care-logo-vector-concept-engagement-togetherness.jpg" alt="Imperial"/>
        </div>

        <h1>DeTechCom</h1>
        <h2>We create strong bonding among communities<span class="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span></h2>
        <div class="actions">
          <a href="#services" class="btn-get-started">join community </a>
          <a href="/createCommunity" class="btn-services">create comunity</a>
        </div>
      </div>
    </div>
  </section>
  </div>
                              
            )
        }
    }
    export default Hero
  
