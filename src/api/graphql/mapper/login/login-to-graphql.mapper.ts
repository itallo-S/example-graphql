import { Service } from "typedi";
import { Login } from "../../schema/login/login.graphql.object-type";
import { LoginModel } from "../../../../models/login/login.model";

@Service()
export class LoginToGraphQLMapper {

    map(login: LoginModel): Login {
        const loginGraphQL: Login = {
            name: login.name,
            token: login.token
        }
        return loginGraphQL
    }
}