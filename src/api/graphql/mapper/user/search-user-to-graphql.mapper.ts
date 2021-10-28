import { Service } from "typedi";
import { UserModel } from "../../../../models/user/search-user.model";
import { User } from "../../schema/user/search-user.graphql.object-type";

@Service()
export class SearchUserToGraphQlMapper {
    map = (userModel:UserModel,idRd:string) => {
        const userGraphQl:User = {
            idApi:userModel.id as number,
            idRd,
            name:userModel.Operator || ''
        }
        
        return userGraphQl
    }
}

