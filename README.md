# @nano-forms/core

## Installing

Using npm:

```bash
$ npm install @nano-forms/core
```

## Swagger

[https://swagger.nanoforms.io](https://swagger.nanoforms.io)

## Examples

### Create Form

```typescript
import { FormClient, Form, FormRequest } from '@nano-forms/core';

const formClient: FormClient = new FormClient(null, '{key}', '{secret}');

const formRequest: FormRequest = {}; // omitted for documentation purposes

const form: Form = await formClient.create(formRequest);
```

### Retrieve Form

```typescript
import { FormClient, Form } from '@nano-forms/core';

const formClient: FormClient = new FormClient(null, '{key}', '{secret}');

const form: Form = await formClient.find('12r42z');
```

## License

[MIT](LICENSE)
