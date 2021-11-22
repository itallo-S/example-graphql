import { ProductSearchInput } from "../../../api/graphql/schema/products/product-search.graphql.input-type";
import { ProductModel } from "../../../models/products/product.model";

export interface IProductSearchRepository {
  getProductSearch(productSearchParams: ProductSearchInput): Promise<ProductModel[]>;
}