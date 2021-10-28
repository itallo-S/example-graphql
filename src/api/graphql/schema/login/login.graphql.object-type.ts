import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Login {

  @Field()
  token: string;

  @Field()
  name: string;

 
}