import { Service } from "typedi";
import { CreateExampleRequest } from "../../../dto/example/create-example-request";
import { ExampleResponse } from "../../../dto/example/example-response";
import { ExampleApiClientBuilder } from "./example-api-client-builder";

@Service()
export class ExampleApiClient {
  constructor(
    private exampleApiBuilder: ExampleApiClientBuilder
  ) { }

  createExample = async (createExampleRequest: CreateExampleRequest): Promise<ExampleResponse> => {
    try {
      const example = await this.exampleApiBuilder.post<CreateExampleRequest, ExampleResponse>('/examples', createExampleRequest);

      return example;
    } catch (error) {
      return {} as ExampleResponse;
    }
  }

  getById = async (id: string): Promise<ExampleResponse> => {
    try {
      const example = await this.exampleApiBuilder.get<ExampleResponse>(`/examples/${id}`);

      return example;
    } catch (error) {
      return {} as ExampleResponse;
    }
  }
}