
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "./Container";
import { TextField,Button,FormControl } from "@material-ui/core";
import CreateSubCommunity from "./CreateSubCommunity";

import axios from 'axios'

import GoogleChart from "./GoogleCharts";
import SearchCommunity from "./SearchCommunity";
import { RadioButtonCheckedTwoTone, RecentActorsRounded } from "@material-ui/icons";
const style = {
    paper: {
      flexGrow: 1,
     backgroundColor:"inherit",
      color: 'black'
    },
    menuButton: {
      spacing: 2,
    },
    link: {
      underline: 'none'
    }
   
  }
  const communities1=[
    {
    name:"D.S.senanayake college",
    subCom:[
    {
      name:"Art club"
    },
    {
      name:"Art club"
    },
    {
      name:"Art club"
    },
    {
      name:"Art club"
    }
    ]
  },
  {
    name:"D.S.senanayake college",
    subCom:[
    {
      name:"Art club"
    },
    {
      name:"Art club"
    },
    {
      name:"Art club"
    },
    {
      name:"Art club"
    }
    ]
  }
  
  
  ]
  
  const subCommunity=[
    {name:"A/L 2020",
    id:1},
    {
      name:"chess club",
      id:2
    },
    {
      name:"Ahtletic club",
      id:3
    },
    {name:"O/l 2017 batch",
    id:4
  },
  {name:"Scouting",
  id:5
  }
  ]
class SubCommunity extends Component{
    constructor(props){
        super(props);
    this.state={
      communities:""
    }
        }
        // componentDidMount(){
        //   axios.get('http://localhost:8080/departments')
        //       .then(response=>{
        //       console.log(response.data)
        //       this.setState({
        //           communities:response.data
                  
        //       })
              
        //       }
        //       )
        // }

        render(){

          const{communities}=this.state
            return (

           <div>
              <SearchCommunity/>
                <div>
                
                  <GoogleChart/>
                  <div>
                   
<section id="services">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Explore Sub Communities</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
        </div>

        <div class="row">

{console.log(communities1)}
          {communities1.length?(communities1.map( community=>{
            community.subCom.map(sub=>{return (<h1>{sub}</h1>)
              
            }
           
            )
          }
          )):null}
        
        {communities1.length?(communities1.map( community=> { 
      console.log(community.name)
          return ( <div class="col-lg-4 col-md-6 service-item">
            <div class="service-icon"><i class="fa fa-desktop"></i></div>
            <h4 class="service-title"><a href="">{community.name}</a></h4>
            <p class="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <Button href="/community"  onClick={this.changeSubCommunity}name={community.name} variant="contained" color="primary">join subCommunity</Button>
          </div>
        
          
        )})):null}

</div>
       
      </div>
    </section>

     </div>
                  
             
               
              
             </div>
             </div>
         
                 );
        }
    }
    export default SubCommunity
  
