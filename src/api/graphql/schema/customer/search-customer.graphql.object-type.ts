import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Customer {

    @Field()
    id:string
    
    @Field()
    cpf:string

    @Field()
    name:string

    @Field()
    branch:string

}
