import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInput {
  @Field()
  password: string;

  @Field({ nullable: false })
  email: string;
}
