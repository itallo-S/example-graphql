import { Service } from "typedi";
import { CustomerModel } from "../../../models/customer/customer.model";
import { CustomerResponse } from "../../../dto/customer/customer.response";

@Service()
export class SearchCustomerResponseToModelMapper {

    map = (response:CustomerResponse [] ): CustomerModel [] => {
        const customerModel:CustomerModel [] = response.map(value => {
            return {
                id:value.id,
                name:value.name,    
                cpf:value.cpf,
                branch:value.logo,
                dateOfBirth:value.dateOfBirth
                
            }
        })

        return customerModel
    }

}