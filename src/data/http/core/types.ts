export type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

export interface ApiConfiguration {
  accessToken?: string;
  baseUrl: string;
}