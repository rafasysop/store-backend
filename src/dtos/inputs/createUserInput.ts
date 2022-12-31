import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  name: String;

  @Field()
  lastName: String;

  @Field()
  password: String;

  @Field()
  email: String;

  @Field()
  profile: String;

  @Field()
  active: Boolean;
}
