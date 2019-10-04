import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  GridListTile
} from "@material-ui/core";

import { withRouter, RouteComponentProps } from "react-router";
import './Note.scss'
import { IService } from '../../entities/Notes';


const classes = {
  card: 'card',
  btnGroup: 'action-group'
}
interface INoteProps extends RouteComponentProps{
  id: number
  title: string;
  description: string;
  service: IService
}

const Note: React.FC<INoteProps> = (props: INoteProps) => {
 
    const onUpdate = () => {
         props.history.push('/note/'+props.id)
    }

    const onDelete = () => {

        props.service.remove(props.id)
        props.history.push('/notes')
    }

  return (
    <GridListTile>
      <Card raised={true} className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.btnGroup}>
          <Button size="small" color="primary" onClick={onUpdate}>
            update
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            delete
          </Button>
        </CardActions>
      </Card>
    </GridListTile>
  );
};

export default withRouter(Note);
