import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CreateProductUseCase } from "../../../../domain/products/create-products.use-case";
import { GetProductBySkuUseCase } from "../../../../domain/products/get-product.use-case";
import { ProductInputToModelMapper } from "../../mapper/products/product-input-to-model.mapper";
import { ProductToGraphQLMapper } from "../../mapper/products/product-to-graphql.mapper";
import { ProductInput } from "./product.graphql.input-type";
import { Product } from "./product.graphql.object-type";

@Resolver()
@Service()
export class ProductResolver {

  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getProductBySkuUseCase: GetProductBySkuUseCase,
    private productInputToModelMapper: ProductInputToModelMapper,
    private productToGraphQLMapper: ProductToGraphQLMapper,
  ) { }

  // @Mutation(returns => Product)
  // async createProduct(
  //   @Arg('product') productInput: ProductInput
  // ) {
  //   try {
  //     const productModel = this.productInputToModelMapper.map(productInput);
  //     const createdProduct = await this.createProductUseCase.execute(productModel);
  //     const product = this.productToGraphQLMapper.map(createdProduct);

  //     return product;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  @Query(returns => Product)
  async product(
    @Arg('skuSearchParams') skuSearchParams: ProductInput,
  ) {
    const productModel = await this.getProductBySkuUseCase.execute(skuSearchParams);
    const product = this.productToGraphQLMapper.map(productModel);

    return product;
  }
}