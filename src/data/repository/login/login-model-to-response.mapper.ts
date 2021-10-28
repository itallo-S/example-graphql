import { Service } from "typedi";
import { LoginModel } from "../../../models/login/login.model";
import { LoginResponse } from "../../../dto/login/login-response";

@Service()
export class LoginModelToCreateResponseMapper {
    map(login: LoginResponse): LoginModel {
        const loginRequest: LoginModel = {
            token: login.access_token,
            expires_in: login.expires_in,
            name: login.name
        }
        return loginRequest;
    }
}