import { Service } from "typedi";
import { CustomerInputType } from "../../schema/customer/search-customer.graphql.input-type";

@Service()
export class SearchCustomerInputToModelMapper {

  map = (searchCostumerInput: CustomerInputType): CustomerInputType => {
    
    const branchUpperCase = searchCostumerInput.branch.toUpperCase().trim()
    const searchCostumerInputModel: CustomerInputType = {
      branch:branchUpperCase == "DROGARAIA" || branchUpperCase == "RAIA" ? "RAIA" : "DROGASIL",
      cpf:searchCostumerInput.cpf.split('.').join('').split('-').join('')
    }

    return searchCostumerInputModel;
  }

}