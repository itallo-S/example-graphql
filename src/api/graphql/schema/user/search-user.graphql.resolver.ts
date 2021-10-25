import { Resolver,Arg,Query } from 'type-graphql'
import { Service } from "typedi";
import { User } from './search-user.graphql.object-type'
import { GetUserUseCase } from '../../../../domain/user/get-search-user.use-case';
import { SearchUserToGraphQlMapper } from '../../mapper/user/search-user-to-graphql.mapper';

@Resolver()
@Service()
export class UserSearchResolver {

    constructor(
        private getUserUseCase:GetUserUseCase,
        private searchUserToGraphQlMapper:SearchUserToGraphQlMapper
    ){}

    @Query(returns => User)
    async user (
        @Arg('id') id:string
    ) {   
        const userModel = await this.getUserUseCase.execute(id)
        const user = this.searchUserToGraphQlMapper.map(userModel,id)
        return user
    }

}
