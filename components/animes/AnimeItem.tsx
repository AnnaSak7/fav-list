import React from 'react'
import { useRouter } from 'next/router';
// import { Button, Card } from 'react-bootstrap';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AnimeItem: React.FC<{title:string, id:string, genre:string, image:string}> = (props) => {
    const router = useRouter();

    const showDetailsHandler = () => {
      router.push('/' + props.id);
    };
  
    return (
      // <Card style={{maxWidth: '300px'}}>
      //   <Card.Img variant='top' style={{maxWidth: '300px'}} src={props.image} alt={props.title} />
      //   <Card.Body>
      //     <Card.Title>{props.title}</Card.Title>
      //     <Card.Text>{props.genre}</Card.Text>
      //   </Card.Body>
      //   <Button variant='dark' onClick={showDetailsHandler}>Show Details</Button>
      // </Card>
     <Card sx={{ maxWidth: '345' }}>
      <CardMedia
        component="img"
        height="140"

        image={props.image}
        alt={props.title}
      />
        <CardContent>

      <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
  
        <Typography variant="body2" color="text.secondary">
          Genre : {props.genre}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={showDetailsHandler}>Show Details</Button>
      </CardActions>
    </Card>
      
    );
    }
export default AnimeItem;

//check Record