import { Service } from "typedi";
import { ProductSearchInput } from "../../api/graphql/schema/products/product-search.graphql.input-type";
import { ProductSearchRepository } from "../../data/repository/product/product-search.repository";
import { ProductModel } from "../../models/products/product.model";

@Service()
export class GetProductSearchUseCase {

  constructor(
    private productSearchRepository: ProductSearchRepository
  ) { }

  execute = async (productSearchParams: ProductSearchInput): Promise<ProductModel[]> => {
    const productSearchModel = await this.productSearchRepository.getProductSearch(productSearchParams);

    return productSearchModel;
  }
}