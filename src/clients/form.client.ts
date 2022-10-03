import axios from 'axios';
import { BASE_URL } from '../constants';
import { FormRequestHelper, ObjectHelper } from '../helpers';
import { FormRequest } from '../request-types';
import { Datum, DatumData, Form } from '../types';

export class FormClient {
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

  public async create(formRequest: FormRequest): Promise<Form> {
    const response = await axios.post<Form>(
      `${BASE_URL}/api/v1/forms`,
      formRequest,
      this.config()
    );

    return response.data;
  }

  public async createFromTemplate(
    formRequestTemplate: FormRequest,
    fn: (formRequest: FormRequest) => FormRequest,
    data: DatumData
  ): Promise<Form> {
    const formRequest: FormRequest = FormRequestHelper.populate(
      fn(ObjectHelper.clone(formRequestTemplate)),
      data
    );

    return await this.create(formRequest);
  }

  public async createSubmission(
    form: Form,
    data: DatumData
  ): Promise<Datum | { location: string }> {
    const response = await axios.post<Datum | { location: string }>(
      `${BASE_URL}/api/v1/forms/${form.reference}/submissions`,
      data,
      this.config()
    );

    return response.data;
  }

  public async delete(reference: string): Promise<Form> {
    const response = await axios.delete<Form>(
      `${BASE_URL}/api/v1/forms/${reference}`,
      this.config()
    );

    return response.data;
  }

  public async find(reference: string): Promise<Form> {
    const response = await axios.get<Form>(
      `${BASE_URL}/api/v1/forms/${reference}`,
      this.config()
    );

    return response.data;
  }

  public async findAll(
    page: number,
    pageSize: number
  ): Promise<{
    count: number;
    items: Array<Form>;
    page: number;
    pageSize: number;
  }> {
    const response = await axios.get<{
      count: number;
      items: Array<Form>;
      page: number;
      pageSize: number;
    }>(`${BASE_URL}/api/v1/forms`, {
      ...this.config(),
      params: {
        page,
        pageSize,
      },
    });

    return response.data;
  }
}
