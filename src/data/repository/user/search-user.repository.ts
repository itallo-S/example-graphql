import { Service  } from "typedi";
import { UserApiClient } from "../../http/user/user-api-client";
import { UserModel } from "../../../models/user/search-user.model";
import { UserResponseToModelMapper } from './search-user-response-to-model.mapper'

@Service()
export class UserRepository {

    constructor(
        private userApiClient:UserApiClient,
        private userResponseToModelMapper: UserResponseToModelMapper
    ){}
    
    getUser = async (id:string ):Promise<UserModel> => {
        const userResponse = await this.userApiClient.getUser(id);
        const userModel = this.userResponseToModelMapper.map(userResponse)

        return userModel
    }
}