import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { CreateUserInput } from "../dtos/inputs/createUserInput";
import { CreateUserModel } from "../dtos/models/createUserModel";
import UserSchema from "../db/UserSchema";
import { AuthInput } from "../dtos/inputs/authInput";
import { AuthModel } from "../dtos/models/authModel";

@Resolver()
export class UsersResolver {
  @Query(() => [CreateUserModel])
  async users() {
    const users = await UserSchema.find();
    return users;
  }

  @Query(() => AuthModel)
  async auth(@Arg("auth") { email, password }: AuthInput) {
    const user = await UserSchema.findOne({ email });
    if (
      !!user?.password &&
      (await compare(password as string, user?.password as string))
    ) {
      if (!user?.active) {
        return { msg: "Usuário Inativo" };
      }

      const token = await jwt.sign(
        {
          name: user?.name,
          lastName: user?.lastName,
          email: user?.email,
          profile: user?.profile,
          active: user?.active,
        },
        process.env.SECRET_JWT || "xTz",
        { expiresIn: 3600 }
      );

      return { msg: "ok", token };
    }

    return { msg: "Usuário ou Senha Incorretos" };
  }

  @Mutation(() => CreateUserModel)
  async createUser(
    @Arg("user")
    { name, lastName, password, email, active, profile }: CreateUserInput
  ) {
    const passwordCrypt = await hash(password as string, 10);

    const user = {
      name,
      lastName,
      password: passwordCrypt,
      email,
      active,
      profile,
    };

    await UserSchema.create(user);

    return user;
  }
}
