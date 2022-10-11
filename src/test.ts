import { FormRequest } from './request-types';
import { FORM_REQUEST_SCHEMA } from './schemas';

const formRequest: FormRequest | any = {
  actions: {
    next: {
      color: '#000000',
      text: 'Apply Now',
      uri: 'https://trynovel.com',
    },
    previous: {
      color: '#000000',
      text: 'Back',
      uri: 'https://trynovel.com',
    },
  },
  createdAt: 1665132924450,
  dataReference: null,
  fields: [
    {
      disabled: false,
      fieldType: 'email_address',
      hint: 'Please use a work email address if available',
      id: 'emailAddress',
      label: 'Email Address',
      options: null,
      placeholder: null,
      type: 'short_text',
      validationMessages: {
        emailAddress: 'Please enter a valid email address',
        patterns: null,
        required: 'Please enter your email address',
      },
      validations: {
        patterns: null,
        required: true,
      },
      value: null,
    },
  ],
  logo: 'https://assets.website-files.com/60425402fee4250aed708db0/60f9d46f08c918299f20bddc_Combination%20mark%20color%20logo%20black%20text.svg',
  metadata: {
    reference: '00shm5',
  },
  reference: '12r42z',
  status: 'enabled',
  subtitle:
    'Novel is all your business financial apps in one place: banking, payouts, invoicing, cards & more',
  tenantId: 'google-oauth2|102857191578298947818',
  title: 'Simplify your business finances',
  updatedAt: 1665403917495,
  webhook: 'https://api-nanoforms-io.azurewebsites.net/api/v1/webhooks/12r42z',
};

try {
  FORM_REQUEST_SCHEMA.validateSync(formRequest);
} catch (error) {
  console.log((error as any).errors);
}
