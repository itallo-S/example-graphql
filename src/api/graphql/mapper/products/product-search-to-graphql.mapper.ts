import { Service } from "typedi";
import { Product } from "../../schema/products/product.graphql.object-type";
import { ProductModel } from "../../../../models/products/product.model";

@Service()
export class ProductSearchToGraphQLMapper {
  map(productList: ProductModel[]): Product[] {
    const productListGraphQL: Product[] = productList.map((product) => {
      return {
        sku: product.code || "",
        name: product.name || "",
        brand: product.brand || "",
        price: product.price || [],
        thumbnail: product.thumbnail || []
      }
    })
    return productListGraphQL;
  }
}