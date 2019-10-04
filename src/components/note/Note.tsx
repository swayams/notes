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
import { Paths } from '../../static/routes';


const classes = {
  card: 'card',
  btnGroup: 'action-group',
  title: 'title'
}
interface INoteProps extends RouteComponentProps{
  id: number
  title: string;
  description: string;
  service: IService
}

const Note: React.FC<INoteProps> = (props: INoteProps) => {
 
    const onUpdate = () => {
         props.history.push(`${Paths.NOTE}/${props.id}`)
    }

    const onDelete = () => {

        props.service.remove(props.id)
        props.history.push(Paths.NOTES)
    }

  return (
    <GridListTile>
      <Card raised={true} className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
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
