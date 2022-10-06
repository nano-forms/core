import { FormRequest } from './request-types';
import { FORM_REQUEST_SCHEMA } from './schemas';

const formRequest: FormRequest = {
  actions: {
    previous: null,
  },
  brand: {
    color: '#000000',
    logo: 'https://assets.website-files.com/60425402fee4250aed708db0/60f9d46f08c918299f20bddc_Combination%20mark%20color%20logo%20black%20text.svg',
  },
  buttons: {
    submit: 'Apply Now',
  },
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
  metadata: {},
  status: 'enabled',
  subtitle:
    'Novel is all your business financial apps in one place: banking, payouts, invoicing, cards & more',
  thankYouPage: null,
  title: 'Simplify your business finances',
  webhook: 'https://novel-project.azurewebsites.net/api/v1/webhooks/sign-up',
};

try {
  FORM_REQUEST_SCHEMA.validateSync(formRequest);
} catch (error) {
  console.log((error as any).errors);
}
