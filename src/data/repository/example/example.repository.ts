import { Service } from "typedi";
import { ExampleModel } from "../../../models/example/example.model";
import { ExampleApiClient } from "../../http/example/example-api-client";
import { ExampleModelToCreateRequestMapper } from "./example-model-to-request.mapper";
import { ExampleResponseToModelMapper } from "./example-response-to-model.mapper";
import { IExampleRepository } from "./example.interface.repository";

@Service()
export class ExampleRepository implements IExampleRepository {

  constructor(
    private exampleApiClient: ExampleApiClient,
    private exampleModelToCreateRequestMapper: ExampleModelToCreateRequestMapper,
    private exampleResponseToModelMapper: ExampleResponseToModelMapper,
  ) { }

  create = async (example: ExampleModel): Promise<ExampleModel> => {
    const exampleRequest = this.exampleModelToCreateRequestMapper.map(example);
    const exampleResponse = await this.exampleApiClient.createExample(exampleRequest);
    const exampleModel = this.exampleResponseToModelMapper.map(exampleResponse);

    return exampleModel;
  }

  getById = async (id: string): Promise<ExampleModel> => {
    const exampleResponse = await this.exampleApiClient.getById(id);
    const exampleModel = this.exampleResponseToModelMapper.map(exampleResponse);

    return exampleModel;
  }
}