import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateUserModel {
  @Field()
  name: String;

  @Field()
  lastName: String;

  @Field()
  email: String;

  @Field()
  profile: String;

  @Field()
  active: Boolean;
}
