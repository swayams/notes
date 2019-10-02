import * as React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

import { withRouter, RouteComponentProps } from "react-router";

interface INoteProps extends RouteComponentProps{
  index: number
  title: string;
  description: string;
}

const Note: React.FC<INoteProps> = (props: INoteProps) => {
 
    const onUpdate = () => {
         props.history.push('/note/')
    }

    const onDelete = () => {
        
    }

  return (
    <Grid item xs={12}>
      <Card raised={true}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onUpdate}>
            update
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withRouter(Note);
