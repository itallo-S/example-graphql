import { Service } from "typedi";
import { UserApiClientBuilder } from "./user-api-client-builder";
import { UserResponse } from "../../../dto/user/search-user.response";
import axios from "axios";

@Service()
export class UserApiClient {
    
    constructor( 
        private userApiClient:UserApiClientBuilder
    ){}
    
     getUser = async ( id:string ) => {
         try{
            const user = await this.userApiClient.get<UserResponse>(`/api/v1/operators/operators/registration/207717`)
            return user
         }
         catch(erro: any){
            return {} as UserResponse
         }
    }
}
