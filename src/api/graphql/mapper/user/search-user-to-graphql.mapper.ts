import { Service } from "typedi";
import { UserModel } from "../../../../models/user/search-user.model";
import { User } from "../../schema/user/search-user.graphql.object-type";

@Service()
export class SearchUserToGraphQlMapper {
    map = (userModel:UserModel,id_rd:string) => {
        const userGraphQl:User = {
            id_api:userModel.id as number,
            id_rd,
            name:userModel.Operator || ''
        }
        
        return userGraphQl
    }
}

