import { Service } from "typedi";
import { BranchesResponse } from "../../../dto/branches/branches-response";
import { BranchesModel } from "../../../models/branches/branches.model";

@Service()
export class BranchesResponseToModelMapper {
    map = (branchesResponse: BranchesResponse[]) : BranchesModel[] => {

        const branch: BranchesModel[] = branchesResponse.map(value => {
            return {id: value.id, 
                name: value.description}
        })
        return branch
    }
}