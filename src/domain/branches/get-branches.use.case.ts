import { Service } from "typedi";
import { BranchesRepository } from "../../data/repository/branches/branches.repository";
import { BranchesModel } from "../../models/branches/branches.model";

@Service()
export class GetBranchesUseCase {

    constructor(
        private branchesRepository: BranchesRepository
    ) {}

    execute = async (branch: string) : Promise<BranchesModel[]> => {
        const branchesModel = await this.branchesRepository.getBranches(branch);
        return branchesModel
    }
}