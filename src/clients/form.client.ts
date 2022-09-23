import axios from 'axios';
import { BASE_URL } from '../constants';
import { FormRequestHelper, ObjectHelper } from '../helpers';
import { FormRequest } from '../request-types';
import { Datum, Form } from '../types';

export class FormClient {
  constructor(protected key: string, protected secret: string) {}

  public async create(formRequest: FormRequest): Promise<Form> {
    const response = await axios.post<Form>(
      `${BASE_URL}/api/v1/forms`,
      formRequest,
      {
        auth: {
          password: this.secret,
          username: this.key,
        },
      }
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
      data
    );

    return response.data;
  }

  public async find(reference: string): Promise<Form> {
    const response = await axios.get<Form>(
      `${BASE_URL}/api/v1/forms/${reference}`
    );

    return response.data;
  }
}
