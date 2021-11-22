import { ObjectType,Field } from "type-graphql";

@ObjectType()
export class User {

    @Field()
    idApi:number

    @Field()
    idRd:string

    @Field()
    name:string

}