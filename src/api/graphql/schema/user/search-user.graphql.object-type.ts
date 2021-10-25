import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class User {

    @Field()
    id_api:number

    @Field()
    id_rd:string

    @Field()
    name:string

}