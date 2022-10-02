import axios from 'axios';
import { BASE_URL } from '../constants';
import { Datum } from '../types';

export class DataClient {
  constructor(
    protected token: string | null,
    protected key: string | null = null,
    protected secret: string | null = null
  ) {}

  protected config() {
    if (this.token) {
      return {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
    }

    if (this.key && this.secret) {
      return {
        auth: {
          password: this.secret,
          username: this.key,
        },
      };
    }

    return {};
  }

  public async delete(reference: string): Promise<Datum> {
    const response = await axios.delete<Datum>(
      `${BASE_URL}/api/v1/data/${reference}`,
      this.config()
    );

    return response.data;
  }

  public async find(reference: string): Promise<Datum> {
    const response = await axios.get<Datum>(
      `${BASE_URL}/api/v1/data/${reference}`,
      this.config()
    );

    return response.data;
  }
}
