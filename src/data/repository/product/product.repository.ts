import { Service } from "typedi";
import { ProductInput } from "../../../api/graphql/schema/products/product.graphql.input-type";
import { ProductModel } from "../../../models/products/product.model";
import { ProductApiClient } from "../../http/products/product-api-client";
import { ProductModelToCreateRequestMapper } from "./product-model-to-request.mapper";
import { ProductResponseToModelMapper } from "./product-response-to-model.mapper";
import { IProductRepository } from "./product.interface.repository";

@Service()
export class ProductRepository implements IProductRepository {

  constructor(
    private productApiClient: ProductApiClient,
    private productModelToCreateRequestMapper: ProductModelToCreateRequestMapper,
    private productResponseToModelMapper: ProductResponseToModelMapper,
  ) { }

  create = async (product: ProductModel): Promise<ProductModel> => {
    const productRequest = this.productModelToCreateRequestMapper.map(product);
    const productResponse = await this.productApiClient.createProduct(productRequest);
    const productModel = this.productResponseToModelMapper.map(productResponse);

    return productModel;
  }

  getBySku = async (skuSearchParams: ProductInput): Promise<ProductModel> => {
    const productResponse = await this.productApiClient.getBySku(skuSearchParams);
    const productModel = this.productResponseToModelMapper.map(productResponse);

    console.log("product response > ",productModel)
    return productModel;
  }
}