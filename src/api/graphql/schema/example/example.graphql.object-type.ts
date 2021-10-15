import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Example {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: string;
}