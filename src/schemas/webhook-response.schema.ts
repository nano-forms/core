import * as yup from 'yup';

export const WEBHOOK_RESPONSE_SCHEMA = yup.object().shape({
  errorMessages: yup.array().of(yup.string()).defined(),
  location: yup.string().defined().nullable(),
  status: yup.string().defined().oneOf(['error', 'ok']),
});
