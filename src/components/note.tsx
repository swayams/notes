import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface MatchParams{
     id: string 
}

export interface INoteProps extends RouteComponentProps<MatchParams> {
    
}
 
export interface INoteState {
    
}
 
class Note extends React.Component<INoteProps, INoteState> {
    constructor(props: INoteProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (
            <div>Note {this.props.match.params.id}</div>
          );
    }
}
 
export default Note;