import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class UserApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.USER_ACCESS_TOKEM)
    private accessToken: string,
    @Inject(Envs.USER_BASE_URL)
    private baseUrl: string
  ) {
    super({ accessToken, baseUrl });
  }
}
