import { Service } from "typedi";
import { Example } from "../../schema/example/example.graphql.object-type";
import { ExampleModel } from "../../../../models/example/example.model";

@Service()
export class ExampleToGraphQLMapper {

  map(example: ExampleModel): Example {
    const exampleGraphQL: Example = {
      name: example.name || '',
      description: example.description || '',
      id: example.id || '',
      createdAt: example.createdAt?.toString() || '',
    }

    return exampleGraphQL;
  }
}