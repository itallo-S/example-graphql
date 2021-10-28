import { Service } from "typedi";
import { LoginModel } from "../../../models/login/login.model";
import { LoginApiClient } from "../../http/login/login-api-client";
import { LoginModelToCreateResponseMapper } from "./login-model-to-response.mapper";
import { LoginResponseToModelMapper } from "./login-response-to-model.mapper"; 
// import { ILoginRepository } from "./login.interface.repository";
import { LoginInput } from "../../../api/graphql/schema/login/login.graphql.input-type";

@Service()
export class LoginRepository {

    constructor(
        private loginApiClient: LoginApiClient,
        private loginModelToCreateResponseMapper: LoginModelToCreateResponseMapper,
        private loginResponseToModelMapper: LoginResponseToModelMapper
    ){ }
    
    getAccessToken = async (loginInput : LoginInput): Promise<LoginModel> => {
        const loginResponse = await this.loginApiClient.getAccessToken(loginInput);
        const loginMap = this.loginModelToCreateResponseMapper.map(loginResponse);

        return loginMap;
    }
}