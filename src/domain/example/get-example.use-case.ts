import { Service } from "typedi";
import { IExampleRepository } from "../../data/repository/example/example.interface.repository";
import { ExampleRepository } from "../../data/repository/example/example.repository";
import { ExampleModel } from "../../models/example/example.model";

@Service()
export class GetExampleByIdUseCase {

  constructor(
    private exampleRepository: ExampleRepository
  ) { }

  execute = async (id: string): Promise<ExampleModel> => {
    const exampleModel = await this.exampleRepository.getById(id);

    return exampleModel;
  }
}