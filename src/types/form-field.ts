export type FormField = {
  disabled: boolean;

  fieldType: string | null;

  hint: string | null;

  id: string;

  label: string;

  options: {
    items: Array<{ label: string }> | null;

    uri: string | null;
  } | null;

  placeholder: string | null;

  type: 'date' | 'dropdown' | 'file_upload' | 'short_text' | 'yes_no';

  validationMessages: {
    emailAddress: string | null;

    patterns: Array<string> | null;

    required: string | null;
  };

  validations: {
    patterns: Array<string> | null;

    required: boolean;
  };

  value: string | Array<string> | { type: string } | null;
};
