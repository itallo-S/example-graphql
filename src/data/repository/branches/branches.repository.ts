import { Service } from "typedi";
import { BranchesApiClient } from "../../http/branches/branches-api-client";
import { BranchesResponseToModelMapper } from "./branches-response-to-model.mapper";
import { BranchesModel } from "../../../models/branches/branches.model";

@Service()
export class BranchesRepository {

    constructor(
        private branchesApiClient: BranchesApiClient,
        private branchesResponseToModelMapper: BranchesResponseToModelMapper,
    ) {}

    getBranches = async (branch : string) : Promise<BranchesModel[]> => {
        const branchesResponse = await this.branchesApiClient.getBranches(branch)
        const branchesModel = this.branchesResponseToModelMapper.map(branchesResponse)
        return branchesModel
    }
} 