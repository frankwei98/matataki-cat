import axios, { AxiosInstance } from "axios";

export class MatatakiApi {
  private client: AxiosInstance;
  constructor(accessToken: string) {
    this.client = axios.create({
      baseURL: "https://api.mttk.net",
      headers: {
        "x-access-token": accessToken,
      },
    });
  }

  catByHash(hash: string) {
    return this.client.get<{
      code: number;
      message: string;
      data: string;
    }>(`/post/ipfs/${hash}`);
  }
}
