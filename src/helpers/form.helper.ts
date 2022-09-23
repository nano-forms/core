import * as yup from 'yup';
import { Form, FormField } from '../types';

export class FormHelper {
  public static buildValidationSchema(form: Form) {
    return yup.object().shape(
      form.fields.reduce(
        (
          dict: { [key: string]: yup.ObjectSchema<any> | yup.StringSchema },
          field: FormField
        ) => {
          if (field.type === 'file_upload') {
            dict[field.id] = yup
              .object()
              .shape({
                data: yup.object().nullable(),
                type: yup.string(),
              })
              .nullable();

            return dict;
          }

          let yupStringSchema: yup.StringSchema = yup.string();

          if (field.fieldType === 'email_address') {
            yupStringSchema = yupStringSchema.email();
          }

          if (field.validations.required) {
            yupStringSchema = yupStringSchema.required();
          } else {
            dict[field.id] = yupStringSchema.optional();
          }

          dict[field.id] = yupStringSchema;

          return dict;
        },
        {}
      )
    );
  }
}
