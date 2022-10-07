import { FormField } from './form-field';

export type Form = {
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

  createdAt: number;

  dataReference: string | null;

  fields: Array<FormField>;

  logo: string;

  metadata: { [key: string]: string };

  reference: string;

  status: 'disabled' | 'enabled';

  subtitle: string | null;

  tenantId: string | null;

  title: string;

  updatedAt: number;

  webhook: string | null;
};
