import Container from "typedi";

export enum Envs {
  EXAMPLE_ACCESS_TOKEN = "EXAMPLE_ACCESS_TOKEN",
  EXAMPLE_BASE_URL = "EXAMPLE_BASE_URL",
  PRODUCT_ACCESS_TOKEN = "PRODUCT_ACCESS_TOKEN",
  PRODUCT_BASE_URL = "PRODUCT_BASE_URL",
}

export function configEnvs() {
  Container.set(Envs.EXAMPLE_ACCESS_TOKEN, process.env.EXAMPLE_ACCESS_TOKEN);
  Container.set(Envs.EXAMPLE_BASE_URL, process.env.EXAMPLE_BASE_URL);
  Container.set(Envs.PRODUCT_ACCESS_TOKEN, process.env.PRODUCT_ACCESS_TOKEN);
  Container.set(Envs.PRODUCT_BASE_URL, process.env.PRODUCT_BASE_URL);
}