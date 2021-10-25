import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Product {

  @Field()
  logotype: string;

  @Field(type => [String])
  codes: string[];

  // @Field()
  // content: string
  // @Field()
  // sku: string


}