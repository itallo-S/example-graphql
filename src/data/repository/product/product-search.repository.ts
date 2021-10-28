import { Service } from "typedi";
import { ProductSearchInput } from "../../../api/graphql/schema/products/product-search.graphql.input-type";
import { ProductModel } from "../../../models/products/product.model";
import { ProductSearchApiClient } from "../../http/products/product-search-api-client";
import { ProductSearchResponseToModelMapper } from "./product-search-response-to-model.mapper";
import { IProductSearchRepository } from "./product-search.interface.repository";

@Service()
export class ProductSearchRepository implements IProductSearchRepository {

  constructor(
    private productSearchApiClient: ProductSearchApiClient,
    private productSearchResponseToModelMapper: ProductSearchResponseToModelMapper,
  ) { }

  getProductSearch = async (productSearchParams: ProductSearchInput): Promise<ProductModel[]> => {
    const productSearchResponse = await this.productSearchApiClient.getProductSearch(productSearchParams);
    const productSearchModel = this.productSearchResponseToModelMapper.map(productSearchResponse);
    return productSearchModel;
  }
}