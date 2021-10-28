import Container from "typedi";

export enum Envs {
  EXAMPLE_ACCESS_TOKEN = "EXAMPLE_ACCESS_TOKEN",
  EXAMPLE_BASE_URL = "EXAMPLE_BASE_URL",
  LOGIN_BASE_URL = "LOGIN_BASE_URL",
  LOGIN_ACCESS_TOKEN = "LOGIN_ACCESS_TOKEN"
}

export function configEnvs() {
  Container.set(Envs.EXAMPLE_ACCESS_TOKEN, process.env.EXAMPLE_ACCESS_TOKEN);
  Container.set(Envs.EXAMPLE_BASE_URL, process.env.EXAMPLE_BASE_URL);
  Container.set(Envs.LOGIN_BASE_URL, process.env.LOGIN_BASE_URL);
  Container.set(Envs.LOGIN_ACCESS_TOKEN,process.env.LOGIN_ACCESS_TOKEN);
}