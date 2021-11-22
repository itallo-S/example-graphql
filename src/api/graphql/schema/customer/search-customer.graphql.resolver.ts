import { Resolver,Arg,Query } from "type-graphql";
import { Service } from "typedi";
import { Customer } from "./search-customer.graphql.object-type";
import { CustomerInputType } from "./search-customer.graphql.input-type";
import { CustomerApiClient } from "../../../../data/http/customer/customer-api-client";
import { SearchCustomerInputToModelMapper } from '../../mapper/customer/search-customer-input-to-model.mapper'
import { GetCustomerUseCase } from "../../../../domain/customer/get-customer.use-case";
import { SearchCustomerToGraphqlMapper } from "../../mapper/customer/search-customer-to-graphql.mapper";

@Resolver()
@Service()
export class SearchCustomerResolver {
    constructor(
         private searchCustomerToGraphqlMapper:SearchCustomerToGraphqlMapper,
         private searchCustomerInputToModelMapper:SearchCustomerInputToModelMapper,
         private getCostumerUseCase: GetCustomerUseCase
    ){}

    @Query(returns => Customer)
    async customer( @Arg('data') data : CustomerInputType ){

        const modelMapperInputCostumer = this.searchCustomerInputToModelMapper.map(data)
        const customerResponse = await this.getCostumerUseCase.execute(modelMapperInputCostumer)
        const customer = this.searchCustomerToGraphqlMapper.map(customerResponse)

        return customer
    }
}