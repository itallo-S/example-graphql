import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Product {

  @Field()
  sku: string

  @Field()
  name: string

  @Field()
  brand: string

  @Field(type => [String])
  price: string[]

  @Field(type => [String])
  thumbnail: string[]
}

