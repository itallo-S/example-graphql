import { Service } from "typedi";
import { UserModel } from "../../../models/user/search-user.model";
import { UserResponse } from "../../../dto/user/search-user.response";

@Service()
export class UserResponseToModelMapper {
    map = (userReponse:UserResponse):UserModel => {
        const user:UserModel = {
            id:userReponse.id,
            Operator:userReponse.nmOperator
        }
        
        return user
    }
}
