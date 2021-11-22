import { InputType, Field } from "type-graphql";

@InputType()
export class BranchesInput {
   @Field()
   branches: string
}