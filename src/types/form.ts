import { FormField } from './form-field';

export type Form = {
  actions: {
    previous: {
      uri: string;
    } | null;
  };

  createdAt: number;

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

  reference: string;

  status: 'disabled' | 'enabled';

  subtitle: string | null;

  tenantId: string | null;

  thankYouPage: {
    subtitle: string | null;

    title: string;
  } | null;

  title: string;

  updatedAt: number;

  webhook: string | null;
};
