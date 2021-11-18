import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CreateLoginUseCase } from "../../../../domain/login/post-login.use-case";
import { Login } from "./login.graphql.object-type";
import { LoginInput } from "./login.graphql.input-type";

import { LoginToGraphQLMapper } from "../../mapper/login/login-to-graphql.mapper";

@Resolver()
@Service()
export class LoginResolver {
  constructor(
    private createLoginUseCase: CreateLoginUseCase,
    private loginToGraphQLMapper: LoginToGraphQLMapper
  ) {}

  @Mutation((returns) => Login)
  async login(@Arg("login") loginInput: LoginInput) {

    const createdLogin = await this.createLoginUseCase.execute(loginInput);

    const login = this.loginToGraphQLMapper.map(createdLogin);

    return login;
  }
}
