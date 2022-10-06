import * as yup from 'yup';

export const FORM_REQUEST_SCHEMA = yup.object().shape({
  actions: yup
    .object({
      previous: yup
        .object({ uri: yup.string().defined().required() })
        .defined()
        .nullable(),
    })
    .defined(),
  brand: yup
    .object({
      color: yup.string().defined().required(),
      logo: yup.string().defined().required(),
    })
    .defined(),
  buttons: yup
    .object({
      submit: yup.string().defined().required(),
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
      })
    ),
  metadata: yup.object().defined(),
  status: yup.string().defined().oneOf(['disabled', 'enabled']),
  subtitle: yup.string().defined().nullable(),
  thankYouPage: yup
    .object({
      subtitle: yup.string().defined().nullable(),
      title: yup.string().defined().required(),
    })
    .defined()
    .nullable(),
  title: yup.string().defined().required(),
  webhook: yup.string().defined().url().nullable(),
});
