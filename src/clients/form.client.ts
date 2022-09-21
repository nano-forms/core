import axios from 'axios';
import { BASE_URL } from '../constants';
import { FormRequestHelper, ObjectHelper } from '../helpers';
import { FormRequest } from '../request-types';
import { Form } from '../types';

export class FormClient {
  public async createFromTemplate(
    formRequestTemplate: FormRequest,
    dataReference: string,
    data: { [key: string]: string | { type: string } }
  ): Promise<Form> {
    const formRequest: FormRequest = FormRequestHelper.populate(
      ObjectHelper.clone(formRequestTemplate),
      data
    );

    formRequest.dataReference = dataReference;

    const response = await axios.post<Form>(
      `${BASE_URL}/api/v1/forms`,
      formRequest
    );

    return response.data;
  }
}
