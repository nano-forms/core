import * as yup from 'yup';

export const FORM_REQUEST_SCHEMA = yup.object().shape({
  actions: yup.object().shape({
    previous: yup
      .object()
      .shape({ uri: yup.string().required().url() })
      .nullable(),
  }),
  brand: yup.object().shape({
    color: yup.string(),
    logo: yup.string(),
  }),
  buttons: yup.object().shape({
    submit: yup.string(),
  }),
  dataReference: yup.string().nullable(),
  fields: yup.array().of(
    yup.object().shape({
      disabled: yup.bool(),
      fieldType: yup
        .string()
        .oneOf([
          'auto_complete',
          'auto_complete_address',
          'email_address',
          'password',
          'phone_number',
          'url',
        ])
        .nullable(),
      hint: yup.string().nullable(),
      id: yup.string().required(),
      label: yup.string().required(),
      options: yup
        .object()
        .shape({
          items: yup
            .array()
            .of(
              yup.object().shape({
                label: yup.string().required(),
              })
            )
            .nullable(),
          uri: yup.string().nullable(),
        })
        .nullable(),
    })
  ),
  metadata: yup.object(),
  status: yup.string().oneOf(['disabled', 'enabled']),
  subtitle: yup.string().nullable(),
  thankYouPage: yup
    .object()
    .shape({
      subtitle: yup.string().nullable(),
      title: yup.string().required(),
    })
    .nullable(),
  title: yup.string().required(),
  webhook: yup.string().url().nullable(),
});
