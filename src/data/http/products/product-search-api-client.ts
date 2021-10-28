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

    const searchProductsBySku = async () => {
      const productSearchResponse = await this.productSearchApiClientBuilder.post<ProductSearchRequest, ProductSearchtResponse>(`/multichannel/branch/${productSearchParams.branchCode}`, {
        logotype: productSearchParams.logotype,
        codes: [productSearchParams.inputValue]
    });
      return productSearchResponse;
    }

    const searchProductsByName = async () => {

      const searchProdcutsByNameResult = await this.productSearchApiClientBuilder.post<ProductSearchRequest, ProductSearchtResponse>(`/branch/${productSearchParams.branchCode}`, {
        logotype: productSearchParams.logotype,
        description: productSearchParams.inputValue
      })

      const codesArray = searchProdcutsByNameResult.content.map((content) => content.product.code)

      const productSearchResponse = await this.productSearchApiClientBuilder.post<ProductSearchRequest, ProductSearchtResponse>(`/multichannel/branch/${productSearchParams.branchCode}`, {
        logotype: productSearchParams.logotype,
        codes: codesArray
      });
      return productSearchResponse;
    }

    try {
      return Number(productSearchParams.inputValue) ? searchProductsBySku() : searchProductsByName() 
    } catch (error) {
      return {} as ProductSearchtResponse;
    }
  }
}