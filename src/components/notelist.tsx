import * as React from 'react';

export interface INoteListProps {
    
}
 
export interface INoteListState {
    
}
 
class NoteList extends React.Component<INoteListProps, INoteListState> {
    constructor(props: INoteListProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <div>
                NoteList
            </div>
         );
    }
}
 
export default NoteList;