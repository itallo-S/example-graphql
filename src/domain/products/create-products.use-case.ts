import { Service } from "typedi";
import { ProductRepository } from "../../data/repository/product/product.repository";
import { ProductModel } from "../../models/products/product.model";

@Service()
export class CreateProductUseCase {

  constructor(
    private productRepository: ProductRepository,
  ) { }

  execute = async (product: ProductModel): Promise<ProductModel> => {
    const productResponse = await this.productRepository.create(product);

    return productResponse;
  }
}

