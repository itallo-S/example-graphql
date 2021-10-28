import { Service } from "typedi";
import { LoginRepository } from "../../data/repository/login/login.repository";
import { LoginModel } from "../../models/login/login.model";
import { LoginInput } from "../../api/graphql/schema/login/login.graphql.input-type";

@Service()
export class CreateLoginUseCase{
    constructor(
        private loginRepository: LoginRepository,
    ){ }

    execute = async (loginInput : LoginInput): Promise<LoginModel> =>{
        const loginResponse = await this.loginRepository.getAccessToken(loginInput);

        return loginResponse;
    }
}