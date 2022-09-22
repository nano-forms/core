import axios from 'axios';
import { BASE_URL } from '../constants';
import { FormRequestHelper, ObjectHelper } from '../helpers';
import { FormRequest } from '../request-types';
import { Form } from '../types';

export class FormClient {
  public async create(formRequest: FormRequest): Promise<Form> {
    const response = await axios.post<Form>(
      `${BASE_URL}/api/v1/forms`,
      formRequest
    );

    return response.data;
  }

  public async createFromTemplate(
    formRequestTemplate: FormRequest,
    fn: (formRequest: FormRequest) => FormRequest,
    data: { [key: string]: string | { type: string } }
  ): Promise<Form> {
    const formRequest: FormRequest = FormRequestHelper.populate(
      fn(ObjectHelper.clone(formRequestTemplate)),
      data
    );

    return await this.create(formRequest);
  }
}
