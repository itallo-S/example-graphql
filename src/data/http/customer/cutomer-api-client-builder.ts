import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class CustomerApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.TCR_ACCESS_TOKEM)
    private accessToken: string,
    @Inject(Envs.TCR_BASE_URL)
    private baseUrl: string
  ) {
    super({ accessToken, baseUrl });
  }
}
