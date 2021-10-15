import { Service } from "typedi";
import { ExampleResponse } from '../../../dto/example/example-response';
import { ExampleModel } from "../../../models/example/example.model";

@Service()
export class ExampleResponseToModelMapper {
  map = (exampleResponse: ExampleResponse) => {
    const example: ExampleModel = {
      id: exampleResponse.id,
      name: exampleResponse.title,
      description: exampleResponse.description,
      createdAt: exampleResponse.createdDate,
      updatedAt: exampleResponse.updatedDate,
    }

    return example;
  }
}