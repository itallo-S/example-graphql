import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class LoginApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.LOGIN_BASE_URL)
    private baseUrl: string,
    @Inject(Envs.LOGIN_ACCESS_TOKEN)
    private accessToken: string
  ) {
    super({ baseUrl, accessToken });
  }
}