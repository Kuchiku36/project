import { db } from "../firebase";

class DbClass{
dbFire ;
    constructor(){
this.dbFire = db ;
    }
    // enregistrement des message en base 
    sendMessage = async (message : string) => {
        console.log("message :",message)
    }
}

export default DbClass