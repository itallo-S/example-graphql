import { Field, InputType } from "type-graphql";

@InputType()
export class ExampleInput {

  @Field()
  name: string

  @Field()
  description: string;

}