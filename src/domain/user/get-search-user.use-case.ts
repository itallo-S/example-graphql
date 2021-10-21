import { Service } from "typedi";
import { UserRepository } from "../../data/repository/user/search-user.repository";
import { UserModel } from "../../models/user/search-user.model";

@Service()
export class GetUserUseCase {
    constructor(
        private UserRepository:UserRepository
    ) {}

    execute = async (id:string):Promise<UserModel> => {
        const userModel = await this.UserRepository.getUser(id);
        return userModel
    }
}