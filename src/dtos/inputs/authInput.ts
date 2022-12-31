import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInput {
  @Field()
  password: String;

  @Field({ nullable: false })
  email: String;
}
