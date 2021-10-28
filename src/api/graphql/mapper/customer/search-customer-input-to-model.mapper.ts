import { Service } from "typedi";
import { CustomerInputType } from "../../schema/customer/search-customer.graphql.input-type";

@Service()
export class SearchCustomerInputToModelMapper {

  map = (searchCostumerInput: CustomerInputType): CustomerInputType => {
    const searchCostumerInputModel: CustomerInputType = {
        branch:searchCostumerInput.branch.toUpperCase(),
        cpf:searchCostumerInput.cpf
    }

    return searchCostumerInputModel;
  }
}