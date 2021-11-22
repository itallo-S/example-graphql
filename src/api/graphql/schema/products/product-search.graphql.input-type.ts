import { Field, InputType,  } from "type-graphql";

@InputType()
export class ProductSearchInput {

  @Field()
  logotype: string

  @Field()
  branchCode: string

   @Field()
  inputValue: string
}