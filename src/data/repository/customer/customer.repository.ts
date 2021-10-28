import { Service } from "typedi";
import { CustomerModel } from "../../../models/customer/customer.model";
import { CustomerInputType } from "../../../api/graphql/schema/customer/search-customer.graphql.input-type";
import { CustomerApiClient } from "../../http/customer/customer-api-client";
import { SearchCustomerResponseToModelMapper } from "./search-customer-to-response-mapper";

@Service()
export class CustomerRepository {

    constructor(
        private customerApiClient:CustomerApiClient,
         private searchCustomerResponseToModelMapper:SearchCustomerResponseToModelMapper
    ){}

    getClient = async (data:CustomerInputType):Promise<CustomerModel []> => {
        const customerResponse = await this.customerApiClient.getClient(data)
        const customerModel = this.searchCustomerResponseToModelMapper.map(customerResponse)
        return customerModel
    }
    
}