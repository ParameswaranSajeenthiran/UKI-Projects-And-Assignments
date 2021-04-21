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
          <img style={{width:"100px",height:"100px"}} src="/home/pc/Desktop/github/javaScript/DigitalOSA/src/assets/img/logo" alt="logo"/>
        </div>

        <h1>DE-COM-TECH</h1>
        <h2><strong>DE</strong>volope <strong>COM</strong>munities through <strong>TECH
</strong>nology<span class="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps"></span></h2>
        <div class="actions">
          <a href="#exploreCom" class="btn-get-started">join community </a>
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
  
