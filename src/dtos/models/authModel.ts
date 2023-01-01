import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AuthModel {
  @Field()
  msg: string;

  @Field({ nullable: true })
  token?: string;
}
