import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateUserModel {
  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  profile: string;

  @Field()
  active: boolean;
}
