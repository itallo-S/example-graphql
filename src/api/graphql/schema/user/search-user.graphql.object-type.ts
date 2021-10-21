import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class User {

    @Field()
    name:string

}