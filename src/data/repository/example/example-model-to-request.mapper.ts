import { Service } from "typedi";
import { ExampleModel } from "../../../models/example/example.model";
import { CreateExampleRequest } from "../../../dto/example/create-example-request";

@Service()
export class ExampleModelToCreateRequestMapper {
  map(example: ExampleModel): CreateExampleRequest {
    const exampleRequest: CreateExampleRequest = {
      description: example.description || '',
      title: example.name || ''
    }
    return exampleRequest;
  }
}