import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class ProductSearchApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.PRODUCT_SEARCH_ACCESS_TOKEN)
    private accessToken: string,
    @Inject(Envs.PRODUCT_SEARCH_BASE_URL)
    private baseUrl: string
  ) {
    super({ accessToken, baseUrl });
  }
}
