import { Service } from "typedi";
import { ProductInput } from "../../../api/graphql/schema/products/product.graphql.input-type";
import { Envs } from "../../../config.env";
import { CreateProductRequest } from "../../../dto/products/create-product-request";
import { ProductResponse } from "../../../dto/products/product-response";
import { ProductApiClientBuilder } from "./product-api-client-builder";

@Service()
export class ProductApiClient {
  constructor(
    private productApiBuilder: ProductApiClientBuilder
  ) { }

  createProduct = async (createProductRequest: CreateProductRequest): Promise<ProductResponse> => {
    try {
      const product = await this.productApiBuilder.post<CreateProductRequest, ProductResponse>('/examples', createProductRequest);

      return product;
    } catch (error) {
      return {} as ProductResponse;
    }
  }

  getBySku = async (skuSearchParams: ProductInput): Promise<ProductResponse> => {
    try {
      const product = await this.productApiBuilder.post<CreateProductRequest, ProductResponse>(`/multichannel/branch/${skuSearchParams.branchCode}`, {
        logotype: skuSearchParams.logotype,
        codes: skuSearchParams.codes
    });
      console.log('productPost', product.content)
      return product;
    } catch (error) {
      return {} as ProductResponse;
    }
  }
}