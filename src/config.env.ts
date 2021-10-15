import Container from "typedi";

export enum Envs {
  EXAMPLE_ACCESS_TOKEN = "EXAMPLE_ACCESS_TOKEN",
  EXAMPLE_BASE_URL = "EXAMPLE_BASE_URL",
}

export function configEnvs() {
  Container.set(Envs.EXAMPLE_ACCESS_TOKEN, process.env.EXAMPLE_ACCESS_TOKEN);
  Container.set(Envs.EXAMPLE_BASE_URL, process.env.EXAMPLE_BASE_URL);
}