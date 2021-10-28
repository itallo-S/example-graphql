import { Service } from "typedi";
import { LoginInput } from "../../../api/graphql/schema/login/login.graphql.input-type";
import { CreateLoginRequest } from "../../../dto/login/create-login-request";
import { LoginResponse } from "../../../dto/login/login-response";
import { LoginApiClientBuilder } from "./login-api-client-builder";


@Service()
export class LoginApiClient {

    constructor(
        private loginApiClientBuilder : LoginApiClientBuilder
    ){ }
      
    getAccessToken = async (loginInput: LoginInput): Promise<LoginResponse> => {
        const payloadUrlEnconded = new URLSearchParams({
            username: loginInput.username,
            password: loginInput.password,
            scope: 'read',
            grant_type: 'password',
          })
          console.log(payloadUrlEnconded)
        try {
            const login = await this.loginApiClientBuilder.post<CreateLoginRequest, LoginResponse>(`/tcr/oauth/token`, payloadUrlEnconded as any,
            {
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            return login;
        }catch (error) {
            return {} as LoginResponse
        }
    }
}