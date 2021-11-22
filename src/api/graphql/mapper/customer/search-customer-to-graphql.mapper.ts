import { values } from "lodash";
import { Service } from "typedi";
import { CustomerModel } from "../../../../models/customer/customer.model";
import { Customer } from "../../schema/customer/search-customer.graphql.object-type";

@Service()
export class SearchCustomerToGraphqlMapper {
   map = (response:CustomerModel []): Customer  => {
        const costumer:Customer [] = response.map(value=>{
            return {
                id:value.id,
                name:value.name,
                cpf:value.cpf,
                branch:value.branch
            }
        })

        return costumer[0]
   }
}