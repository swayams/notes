import { LocaleContext } from './Context';
import { Note } from './Notes';

export class User {
    userName: string
    displayName: string
    password: string
    notes: Note[]
    constructor ( display: string, user: string, pass: string) {
        this.userName = user
        this.password = pass
        this.displayName = display
        this.notes = []
    }
}


export const UserService = ( ctx: LocaleContext) => {
    const addUser = ( user: User): boolean => {

        if(ctx.Users.filter((u: User) => u.userName === user.userName ).length < 1) {
            ctx.Users.push(user)
            ctx.execute()
            return true;
        } else {
            return false;
        }

    }

    const validateUser = ( user: User): boolean => {
        let thisUser = ctx.Users.filter( (u: User) => u.userName === user.userName && u.password === user.password )
        if( thisUser.length > 0) 
            return true
        else 
            return false;
    }

    return {
        validate: validateUser,
        add: addUser
    }
}