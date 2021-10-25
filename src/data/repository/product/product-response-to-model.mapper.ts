import { Service } from "typedi";
import { ProductResponse } from "../../../dto/products/product-response";
import { ProductModel } from "../../../models/products/product.model";

@Service()
export class ProductResponseToModelMapper {
  map = (productResponse: ProductResponse) => {
    const product: ProductModel = {
      logotype: productResponse.logotype,
      codes: productResponse.codes,
     
    }
    return product;
  }
}