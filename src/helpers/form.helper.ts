import * as yup from 'yup';
import { Form, FormField } from '../types';

export class FormHelper {
  public static buildValidationSchema(form: Form) {
    return yup.object().shape(
      form.fields.reduce(
        (dict: { [key: string]: yup.StringSchema }, field: FormField) => {
          let yupStringSchema: yup.StringSchema = yup.string();

          if (field.validations.required) {
            yupStringSchema = yupStringSchema.required();
          } else {
            dict[field.id] = yup.string().optional();
          }

          if (field.fieldType === 'email_address') {
            yupStringSchema = yupStringSchema.email();
          }

          dict[field.id] = yupStringSchema;

          return dict;
        },
        {}
      )
    );
  }
}
