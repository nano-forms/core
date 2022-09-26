export type FormField = {
  disabled: boolean;

  fieldType: string | null;

  hint: string | null;

  id: string;

  label: string;

  options: Array<{ label: string }> | null;

  placeholder: string | null;

  type: 'date' | 'dropdown' | 'file_upload' | 'short_text' | 'yes_no';

  validationMessages: {
    patterns: Array<string> | null;

    required: string | null;
  };

  validations: {
    patterns: Array<string> | null;

    required: boolean;
  };

  value: string | { type: string } | null;
};
