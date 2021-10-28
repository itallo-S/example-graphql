import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class ExampleApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.EXAMPLE_ACCESS_TOKEN)
    private accessToken: string,
    @Inject(Envs.EXAMPLE_BASE_URL)
    private baseUrl: string
  ) {
    super({ accessToken, baseUrl });
  }
}