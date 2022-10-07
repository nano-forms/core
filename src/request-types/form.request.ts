import { FormField } from '../types';

export type FormRequest = {
  actions: {
    next: {
      color: string;

      text: string;

      uri: string;
    };

    previous: {
      color: string;

      text: string;

      uri: string;
    } | null;
  };

  dataReference: string | null;

  fields: Array<FormField>;

  logo: string;

  metadata: { [key: string]: string };

  status: 'disabled' | 'enabled';

  subtitle: string | null;

  title: string;

  webhook: string | null;
};
