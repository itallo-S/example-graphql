import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Branches {
    @Field()
    id: string

    @Field()
    name: string
}