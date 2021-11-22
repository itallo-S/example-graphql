import { Service } from "typedi";
import { CustomerApiClientBuilder } from "./cutomer-api-client-builder";
import { CustomerResponse } from '../../../dto/customer/customer.response' 
import { CustomerInputType } from "../../../api/graphql/schema/customer/search-customer.graphql.input-type";

@Service()
export class CustomerApiClient {
    constructor(
        private customerApiClientBuilder:CustomerApiClientBuilder
    ){}

    getClient = async (data:CustomerInputType):Promise<CustomerResponse []>=> {

        try{
            const { branch,cpf } = data
            const response = await this.customerApiClientBuilder.get<CustomerResponse []>(`/api/v1/customers/customers/cpf/${cpf}/logo/${branch}`)
            return response
        }
        catch(error) {
            return [] as CustomerResponse []
        }
          
    }
}