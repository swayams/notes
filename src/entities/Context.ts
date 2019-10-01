import { User } from './User';
import Config from '../static/config';

interface IContext {
    store: Storage
    execute: Function
}

export class LocaleContext implements IContext {
    
    store: Storage
    Users: User[]
    key: string
    

    constructor( root: string ) {

        this.key = root
        this.store = window.localStorage
        this.Users = Config.users

        this.init()
      

    }

    init = () => {          
        let serUser = this.store.getItem(this.key)
        if( serUser ) {
            this.Users = JSON.parse(serUser)
        } else {            
            this.execute()
        }
    }

    
    execute = () => {
        if(this.store) {
            this.store.setItem(this.key, JSON.stringify(this.Users))
        }
    }

}