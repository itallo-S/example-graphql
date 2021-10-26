import { Service } from "typedi";
import { ProductSearchtResponse } from "../../../dto/products/product-search-response";
import { ProductModel } from "../../../models/products/product.model";

@Service()
export class ProductSearchResponseToModelMapper {
  map = (productSearchResponseList: ProductSearchtResponse) => {
    const productList: ProductModel[]  = productSearchResponseList.content.map((content) => {
      return {
        code: content.product.code,
        name: content.product.name,
        brand: content.product.brand.name,
        price: content.prices.map((content) => content.bestPrice.totalPrice),
        thumbnail: content.product.images.map((content) => content.url)
      }
    })
    return productList ;
  }
}

