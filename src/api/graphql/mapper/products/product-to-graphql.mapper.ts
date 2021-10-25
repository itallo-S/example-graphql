import { Service } from "typedi";
import { Product } from "../../schema/products/product.graphql.object-type";
import { ProductModel } from "../../../../models/products/product.model";

@Service()
export class ProductToGraphQLMapper {

  map(product: ProductModel): Product {
    const productGraphQL: Product = {
      logotype: product.logotype || 'arthur',
      codes: product.codes || []
    }
    return productGraphQL;
  }
}