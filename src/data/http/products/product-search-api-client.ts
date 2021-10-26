import { Service } from "typedi";
import { ProductSearchInput } from "../../../api/graphql/schema/products/product-search.graphql.input-type";
import { ProductSearchRequest } from "../../../dto/products/product-search-request";
import { ProductSearchtResponse } from "../../../dto/products/product-search-response";
import { ProductSearchApiClientBuilder } from "./product-search-api-client-builder";

@Service()
export class ProductSearchApiClient {
  constructor(
    private productSearchApiClientBuilder: ProductSearchApiClientBuilder
  ) { }

  getProductSearch = async (productSearchParams: ProductSearchInput): Promise<ProductSearchtResponse> => {
    try {
      const productSearchResponse = await this.productSearchApiClientBuilder.post<ProductSearchRequest, ProductSearchtResponse>(`/multichannel/branch/${productSearchParams.branchCode}`, {
        logotype: productSearchParams.logotype,
        codes: productSearchParams.codes
    });
      return productSearchResponse;
    } catch (error) {
      return {} as ProductSearchtResponse;
    }
  }
}