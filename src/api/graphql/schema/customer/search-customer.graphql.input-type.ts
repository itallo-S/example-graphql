import { InputType,Field } from "type-graphql";

@InputType()
export class CustomerInputType {

    @Field()
    branch: string

    @Field()
    cpf:string
}

