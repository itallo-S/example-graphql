import { LoginModel } from "../../../models/login/login.model";

export interface ILoginRepository {
    getAccess_token(data: LoginModel): Promise<LoginModel>
}