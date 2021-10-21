import { Service } from "typedi";
import { UserApiClientBuilder } from "./user-api-client-builder";
import { UserResponse } from "../../../dto/user/search-user.response";

@Service()
export class UserApiClient {
    
    constructor( 
        private userApiClient:UserApiClientBuilder
    ){}
    
     getUser = async ( id:string ) => {
         try{
            const user = await this.userApiClient.get<UserResponse>(`/api/v1/operators/operators/registration/${id}`)
            return user
         }
         catch(erro){
             return {} as UserResponse
         }
    }
}
