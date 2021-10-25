import { Service } from "typedi";
import { ProductModel } from "../../../../models/products/product.model";
import { ProductInput } from "../../schema/products/product.graphql.input-type";

@Service()
export class ProductInputToModelMapper {

  map = (productInput: ProductInput): ProductModel => {
    const productModel: ProductModel = {
      logotype: productInput.logotype,
      codes: productInput.codes,
    }

    return productModel;
  }
}