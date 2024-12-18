import conf from "../conf/conf.js";
import {Client, Account, ID} from "appwrite";

export class AuthService{

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account =  new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique, email, name);
            if (userAccount){
                //call another method
                return this.login({email,password});
            }else {
                return userAccount;
            }
            
        } catch (error) {
            throw new Error(" ghf"+ error);
            
        }

    }
    
    async login ({email, password}){
        try {
            return await this.createEmailSession(email, password);
            
        } catch (error) {
            throw new Error("dgfs"+ error);
            
            
        }
    
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);

            
        }
        return null;
    }
    async logout () {

        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);

        }
        
    }


}


const authService = new AuthService();

export default authService