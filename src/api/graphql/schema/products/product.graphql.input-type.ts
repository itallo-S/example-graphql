import { Field, InputType,  } from "type-graphql";


@InputType()
export class ProductInput {

  @Field()
  logotype: string

  @Field()
  branchCode: string

  @Field(type => [String])
  codes: string[];
}