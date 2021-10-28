import { Service } from "typedi";
import { LoginResponse } from "../../../dto/login/login-response";
import { LoginModel } from "../../../models/login/login.model";

@Service()
export class LoginResponseToModelMapper {
    map = ( loginResponse: LoginResponse) => {
        const login: LoginModel = {

            token: loginResponse.access_token,
            expires_in: loginResponse.expires_in,
            name: loginResponse.name

        }
        return login;
    }
}