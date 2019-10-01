import { User } from "./User";
import { LocaleContext } from './Context';

export class Note {
 
    title: string
    description: string

    constructor( title: string, description: string) {

        this.title =  title
        this.description = description
    }
    
}

const NotesService = (user: User, context: LocaleContext) => {


    const createNote = ( note: Note ) => {
        user.notes.push(note)
        context.execute()
    }
    const updateNote = ( index: number, note: Note) => {
        user.notes[index] = note;
        context.execute()
    }

    const deleteNote = ( index: number ) => {
        user.notes.splice( index, 1)
        context.execute()
    }

    const getNote = ( index: number ) => {
        return user.notes[index]
    }


    return {
        create: createNote,
        update: updateNote,
        delete: deleteNote,
        read: getNote
    }
}