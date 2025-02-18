import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { auth,db } from "../firebase";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

const googleProvider : GoogleAuthProvider = new GoogleAuthProvider() ;

class AuthClass{
    
    authFire ;
    dbFire ;

    constructor (){
        this.authFire = auth ;
        this.dbFire = db ;
        
    }
    connexionGoogle = async() => { 
        const result = await signInWithPopup(this.authFire, googleProvider) ;
        console.log("user",result) ;

        if (result != null) {//si l'utilisateur est connecté 
            //je controle si il est dans le store firestore
//lecture de la table 
//préparation de la requet
            const docRefUser = doc(this.dbFire, "users", result.user.uid) ;
            //invocation de la requet
            const snapUser = await getDoc(docRefUser) ;

            if (!snapUser.exists()) { //
                await setDoc(docRefUser,{
                    name: result.user.displayName,
                    
                })
            }

        }
     }
}

//exportation de AuthClass en default cet class gère les connexion 
export default AuthClass