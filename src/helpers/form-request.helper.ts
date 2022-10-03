import { FormRequest } from '../request-types';
import { DatumData } from '../types';

export class FormRequestHelper {
  public static populate(
    formRequest: FormRequest,
    data: DatumData
  ): FormRequest {
    if (!data) {
      return formRequest;
    }

    for (const field of formRequest.fields) {
      field.value = data[field.id] || null;
    }

    return formRequest;
  }
}
