import * as yup from 'yup';

export const FORM_REQUEST_SCHEMA = yup.object().shape({
  actions: yup
    .object({
      next: yup
        .object({
          color: yup.string().defined().required(),
          text: yup.string().defined().required(),
          uri: yup.string().defined().required(),
        })
        .defined(),
      previous: yup
        .object({
          color: yup.string().defined().required(),
          text: yup.string().defined().required(),
          uri: yup.string().defined().required(),
        })
        .defined()
        .nullable(),
    })
    .defined(),
  analytics: yup
    .object({
      mixpanel: yup.string().defined().nullable(),
    })
    .defined(),
  dataReference: yup.string().defined().nullable(),
  fields: yup
    .array()
    .defined()
    .of(
      yup.object({
        disabled: yup.bool().defined(),
        fieldType: yup
          .string()
          .defined()
          .oneOf([
            'auto_complete',
            'auto_complete_address',
            'email_address',
            'password',
            'phone_number',
            'url',
            null,
          ])
          .nullable(),
        hint: yup.string().defined().nullable(),
        id: yup.string().defined().required(),
        label: yup.string().defined().required(),
        options: yup
          .object({
            items: yup
              .array()
              .defined()
              .of(
                yup
                  .object({
                    label: yup.string().defined().required(),
                  })
                  .defined()
              )
              .nullable(),
            uri: yup.string().defined().nullable(),
          })
          .defined()
          .nullable(),
        placeholder: yup.string().defined().nullable(),
        type: yup
          .string()
          .defined()
          .oneOf([
            'date',
            'dropdown',
            'file_upload',
            'multiple_choice',
            'short_text',
            'yes_no',
          ]),
        validationMessages: yup.object({
          emailAddress: yup.string().defined().nullable(),
          patterns: yup.array().defined().of(yup.string()).nullable(),
          required: yup.string().defined().nullable(),
        }),
        validations: yup.object({
          patterns: yup.array().defined().of(yup.string()).nullable(),
          required: yup.bool().defined(),
        }),
        value: yup.mixed().defined().nullable(),
      })
    ),
  logo: yup.string().defined().required(),
  metadata: yup.object().defined(),
  status: yup.string().defined().oneOf(['disabled', 'enabled']),
  subtitle: yup.string().defined().nullable(),
  title: yup.string().defined().required(),
  webhook: yup.string().defined().url().nullable(),
});
