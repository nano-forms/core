import { FormRequest } from '../request-types';

export class FormRequestHelper {
  public static populate(
    formRequest: FormRequest,
    data: { [key: string]: string | { type: string } }
  ): FormRequest {
    for (const field of formRequest.fields) {
      field.value = data[field.id] || null;
    }

    return formRequest;
  }
}
