import { User } from "../entities/User";
import { LocaleContext } from "../entities/Context";
import { Note } from "../entities/Notes";

export const blankNotesService =  {
    create: () => {
      return false;
    },
    update: () => {
      return false;
    },
    remove: () => {
      return false;
    },
    read: () => {
      return false;
    }
  };


export const blankUser = new User("", "", "")
export const blankContext = new LocaleContext("")
export const blankNote = new Note("", "");

export const initialLoginState =  { name: "swayam.siddha", password: "testNote123", error: '' }
export const blankLoginState = { name: '', password: '', error:''}
