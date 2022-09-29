import axios from 'axios';
import { BASE_URL } from '../constants';
import { FormRequestHelper, ObjectHelper } from '../helpers';
import { FormRequest } from '../request-types';
import { Datum, Form } from '../types';

export class FormClient {
  constructor(
    protected token: string,
    protected key: string | null = null,
    protected secret: string | null = null
  ) {}

  protected config() {
    return this.key && this.secret
      ? {
          auth: {
            password: this.secret,
            username: this.key,
          },
        }
      : {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };
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
    data: { [key: string]: string | { type: string } } | null
  ): Promise<Form> {
    const formRequest: FormRequest = FormRequestHelper.populate(
      fn(ObjectHelper.clone(formRequestTemplate)),
      data
    );

    return await this.create(formRequest);
  }

  public async createSubmission(
    form: Form,
    data: { [key: string]: string | { type: string } }
  ): Promise<Datum | { location: string }> {
    const response = await axios.post<Datum | { location: string }>(
      `${BASE_URL}/api/v1/forms/${form.reference}/submissions`,
      data,
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
