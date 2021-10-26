import { Resolver, Query, Arg } from "type-graphql";
import { Service } from "typedi";
import { Branches } from "./branches.graphql.object-type";
import { BranchesToGraphQLMapper } from "../../mapper/branches/branches-to-graphql.mapper";
import { GetBranchesUseCase } from "../../../../domain/branches/get-branches.use.case";

@Resolver()
@Service()
export class BranchesResolver {

    constructor(
        private branchesToGraphQLMapper : BranchesToGraphQLMapper,
        private getBranchesUseCase : GetBranchesUseCase
    ) {}

    @Query(returns => [Branches])
    async branches(
        @Arg ('branch') branch : string
    ) {
        const branchesModel = await this.getBranchesUseCase.execute(branch)
        const branches = this.branchesToGraphQLMapper.map(branchesModel)
        console.log(branches)
        return branches
        
    }
}