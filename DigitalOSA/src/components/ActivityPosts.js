import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import MediumZoom from 'medium-zoom';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});
const styles={
image:{width:"300px",
height:"150px"}}




export default function ActivityPost(props) {
const [view,setView]=React.useState(true);
  const classes = useStyles();
  const [image,setImage]=React.useState([]);
  const { post } = props;
  
  const handleView=()=>{
if(view){

setView(false)
}else{

setView(true)
}
  
 } 
MediumZoom('.gallery',{margin:50})
 if(view){ return (
    <Grid item xs={12} >
      <CardActionArea component="a" >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
             See {post.title}
              </Typography>
              {post.image.length?post.image.map((image)=>(<div class="gallery">

    <img onClick={handleView}src={image} alt="Cinque Terre" width="100" height="400"/>
  

</div>)):null}
            </CardContent>
          </div>
        
        </Card>
      </CardActionArea>
    </Grid>
  );}else{
  return (
   <Grid item xs={12} >
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
             See {post.title}
              </Typography>
              {post.image.length?post.image.map((image)=>(<div class="gallery1">

    <img onClick={handleView} src={image} alt="Cinque Terre" width="100" height="400"/>
  

</div>)):null}
            </CardContent>
          </div>
        
        </Card>
      </CardActionArea>
    </Grid>
  )}
}

ActivityPost.propTypes = {
  post: PropTypes.object,
};
