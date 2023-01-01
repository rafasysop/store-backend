import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  profile: string;

  @Field()
  active: boolean;
}
