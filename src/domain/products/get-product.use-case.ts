import { Service } from "typedi";
import { ProductInput } from "../../api/graphql/schema/products/product.graphql.input-type";
import { IProductRepository } from "../../data/repository/product/product.interface.repository";
import { ProductRepository } from "../../data/repository/product/product.repository";
import { ProductModel } from "../../models/products/product.model";

@Service()
export class GetProductBySkuUseCase {

  constructor(
    private productRepository: ProductRepository
  ) { }

  execute = async (skuSearchParams: ProductInput): Promise<ProductModel> => {
    const productModel = await this.productRepository.getBySku(skuSearchParams);

    return productModel;
  }
}