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

export interface IService {
    create: Function
    update: Function
    remove: Function
    read: Function
}

export const NotesService = (user: User, context: LocaleContext) => {


    const create = ( note: Note ) => {
        user.notes.push(note)
        context.execute()
    }
    const update = ( index: number, note: Note) => {
        user.notes[index] = note;
        context.execute()
    }

    const remove = ( index: number ) => {
        user.notes.splice( index, 1)
        context.execute()
    }

    const read = ( index: number ) => {
        return user.notes[index]
    }


    let svc: IService =  {
        create: create,
        update: update,
        remove: remove,
        read: read
    }

    return svc
}