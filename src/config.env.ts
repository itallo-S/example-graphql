import Container from "typedi";

export enum Envs {
  EXAMPLE_ACCESS_TOKEN = "EXAMPLE_ACCESS_TOKEN",
  EXAMPLE_BASE_URL = "EXAMPLE_BASE_URL",
  TCR_BASE_URL = "TCR_BASE_URL",
  TCR_ACCESS_TOKEM = "TCR_ACCESS_TOKEM"
}

export function configEnvs() {
  Container.set(Envs.EXAMPLE_ACCESS_TOKEN, process.env.EXAMPLE_ACCESS_TOKEN);
  Container.set(Envs.EXAMPLE_BASE_URL, process.env.EXAMPLE_BASE_URL);
  Container.set(Envs.TCR_BASE_URL,process.env.TCR_BASE_URL)
  Container.set(Envs.TCR_ACCESS_TOKEM , process.env.TCR_ACCESS_TOKEM)
}
