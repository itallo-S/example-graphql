import { Service } from "typedi";
import { ExampleRepository } from "../../data/repository/example/example.repository";
import { ExampleModel } from "../../models/example/example.model";

@Service()
export class CreateExampleUseCase {

  constructor(
    private exampleRepository: ExampleRepository,
  ) { }

  execute = async (example: ExampleModel): Promise<ExampleModel> => {
    const exampleResponse = await this.exampleRepository.create(example);

    return exampleResponse;
  }
}