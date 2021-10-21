import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CreateExampleUseCase } from "../../../../domain/example/create-example.use-case";
import { GetExampleByIdUseCase } from "../../../../domain/example/get-example.use-case";
import { ExampleInputToModelMapper } from "../../mapper/example/example-input-to-model.mapper";
import { ExampleToGraphQLMapper } from "../../mapper/example/example-to-graphql.mapper";
import { ExampleInput } from "./example.graphql.input-type";
import { Example } from "./example.graphql.object-type";

@Resolver()
@Service()
export class ExampleResolver {

  constructor(
    private createExampleUseCase: CreateExampleUseCase,
    private getExampleByIdUseCase: GetExampleByIdUseCase,
    private exampleInputToModelMapper: ExampleInputToModelMapper,
    private exampleToGraphQLMapper: ExampleToGraphQLMapper,
  ) { }

  @Mutation(returns => Example)
  async createExample(
    @Arg('example') exampleInput: ExampleInput
  ) {
    try {
      const exampleModel = this.exampleInputToModelMapper.map(exampleInput);
      const createdExample = await this.createExampleUseCase.execute(exampleModel);
      const example = this.exampleToGraphQLMapper.map(createdExample);

      return example;
    } catch (error) {
      throw error;
    }
  }

  @Query(returns => Example )
  async example(
    @Arg('id') id: string
  ) {
    const exampleModel = await this.getExampleByIdUseCase.execute(id);
    const example = this.exampleToGraphQLMapper.map(exampleModel);
    return example;
  }
}