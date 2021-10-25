import { ProductInput } from "../../../api/graphql/schema/products/product.graphql.input-type";
import { ProductModel } from "../../../models/products/product.model";

export interface IProductRepository {
  getBySku(skuSearchParams: ProductInput): Promise<ProductModel>;
}