import { ExampleModel } from "../../../models/example/example.model";

export interface IExampleRepository {
  create(data: ExampleModel): Promise<ExampleModel>;
  getById(id: string): Promise<ExampleModel>;
}