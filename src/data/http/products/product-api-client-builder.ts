import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class ProductApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.SEARCH_SKU_PRODUCT_ACCESS_TOKEN)
    private accessToken: string,
    @Inject(Envs.SEARCH_SKU_PRODUCT_BASE_URL)
    private baseUrl: string
  ) {
    super({ accessToken, baseUrl });
  }
}
