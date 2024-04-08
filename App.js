import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://assets.glamour.de/photos/643cfcc8b9c35fca5958967d/16:9/w_2560%2Cc_limit/emma-watson-GettyImages-1235938653.jpg"
          alt="Emma Watson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Emma Watson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Senior Software Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Allianz Technology SE
          </Typography>
          <Typography variant="body2" color="text.secondary">
            London, United Kingdom
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Connect
        </Button>
      </CardActions>
    </Card>
      </header>
    </div>
  );
}

export default App;
