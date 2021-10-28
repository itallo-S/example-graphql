import { Service } from "typedi";
import { ExampleModel } from "../../../../models/example/example.model";
import { ExampleInput } from "../../schema/example/example.graphql.input-type";

@Service()
export class ExampleInputToModelMapper {

  map = (exampleInput: ExampleInput): ExampleModel => {
    const exampleModel: ExampleModel = {
      name: exampleInput.name,
      description: exampleInput.description
    }

    return exampleModel;
  }
}