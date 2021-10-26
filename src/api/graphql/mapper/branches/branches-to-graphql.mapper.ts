import { Service } from "typedi";
import { Branches } from "../../schema/branches/branches.graphql.object-type";
import { BranchesModel } from "../../../../models/branches/branches.model";

@Service()
export class BranchesToGraphQLMapper {

    map(branches : BranchesModel[] ) : Branches[] {
         
        const branchesGraphQL : Branches[] = branches.map(value => {
            const castingString : string = value.id as unknown as string
            return {
                id: castingString,
                name: value.name
            }
        })
        return branchesGraphQL
    }
}