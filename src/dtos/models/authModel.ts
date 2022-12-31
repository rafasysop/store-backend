import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AuthModel {
  @Field()
  msg: String;

  @Field({ nullable: true })
  token?: String;
}
