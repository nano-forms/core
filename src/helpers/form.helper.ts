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
            yupStringSchema = yupStringSchema.email(
              field.validationMessages.emailAddress || 'Invalid'
            );
          }

          if (field.validations.required) {
            yupStringSchema = yupStringSchema.required(
              field.validationMessages.required || 'Required'
            );
          } else {
            yupStringSchema = yupStringSchema.optional();
          }

          if (field.validations.patterns) {
            for (const [
              index,
              pattern,
            ] of field.validations.patterns.entries()) {
              yupStringSchema = yupStringSchema.matches(
                new RegExp(pattern),
                field.validationMessages.patterns
                  ? field.validationMessages.patterns[index]
                  : 'Invalid'
              );
            }
          }

          dict[field.id] = yupStringSchema;

          return dict;
        },
        {}
      )
    );
  }
}
