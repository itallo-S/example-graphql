import { Service } from "typedi";
import { BranchesApiClientBuilder } from "./branches-api-client-builder";
import { BranchesResponse } from "../../../dto/branches/branches-response";

@Service()
export class BranchesApiClient {
    constructor(
        private branchesApiBuilder: BranchesApiClientBuilder
    ) {}

    getBranches = async (branch : string): Promise<BranchesResponse[]>  => {
        try {
            const branchResponse = await this.branchesApiBuilder.get<BranchesResponse[]>(`/api/v1/branches/branches/logo/${branch}`)
            return branchResponse 
        } catch (erro) {
            return [{}] as BranchesResponse[]
        }
    }
}