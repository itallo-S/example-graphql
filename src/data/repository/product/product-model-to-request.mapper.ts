import { Service } from "typedi";
import { ProductModel } from "../../../models/products/product.model";
import { CreateProductRequest } from "../../../dto/products/create-product-request";

@Service()
export class ProductModelToCreateRequestMapper {
  map(product: ProductModel): CreateProductRequest {
    const productRequest: CreateProductRequest = {
      logotype: product.logotype || '',
      codes: product.codes || []
    }
    return productRequest;
  }
}