import { Service } from "typedi";
import { CustomerRepository } from "../../data/repository/customer/customer.repository";
import { CustomerInputType } from "../../api/graphql/schema/customer/search-customer.graphql.input-type";  
import { CustomerModel } from "../../models/customer/customer.model";

@Service()
export class GetCustomerUseCase {
    constructor(
        private customerRepository:CustomerRepository,
    ){}

    execute = async (data:CustomerInputType):Promise<CustomerModel []> => {
        const customerModel = await this.customerRepository.getClient(data)
        return customerModel
    }

}

