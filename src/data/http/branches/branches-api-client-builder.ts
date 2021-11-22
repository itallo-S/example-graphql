import { Inject, Service } from "typedi";
import ApiClient from "../core/api-client";
import { Envs } from '../../../config.env';

@Service()
export class BranchesApiClientBuilder extends ApiClient {

  constructor (
    @Inject(Envs.TCR_BASE_URL)
    private baseUrl: string
  ) {
    super({ baseUrl });
  }
}