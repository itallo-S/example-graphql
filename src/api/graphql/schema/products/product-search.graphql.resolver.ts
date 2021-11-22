import { Arg, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { GetProductSearchUseCase } from "../../../../domain/products/get-product-search.use-case";
import { ProductSearchToGraphQLMapper } from "../../mapper/products/product-search-to-graphql.mapper";
import { ProductSearchInput } from "./product-search.graphql.input-type";
import { Product } from "./product.graphql.object-type";

@Resolver()
@Service()
export class ProductSearchResolver {

  constructor(
    private getProductSearchUseCase: GetProductSearchUseCase,
    private productSearchToGraphQLMapper: ProductSearchToGraphQLMapper,
  ) { }
  
  @Query(returns => [Product]) 
  async searchProducts(
    @Arg('productSearchParams') productSearchParams: ProductSearchInput
  ) {
    const productSearchModel = await this.getProductSearchUseCase.execute(productSearchParams);
    const productSearch = this.productSearchToGraphQLMapper.map(productSearchModel);
    return productSearch;
  }
}