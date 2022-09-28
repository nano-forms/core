import { FormField } from '../types';

export type FormRequest = {
  actions: {
    previous: {
      uri: string;
    } | null;
  };

  brand: {
    color: string;

    logo: string;
  };

  buttons: {
    submit: string;
  };

  dataReference: string | null;

  fields: Array<FormField>;

  metadata: { [key: string]: string };

  status: 'disabled' | 'enabled';

  subtitle: string | null;

  thankYouPage: {
    subtitle: string | null;

    title: string;
  } | null;

  title: string;

  webhook: string | null;
};
