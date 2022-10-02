export type Datum = {
  createdAt: number;

  data: { [key: string]: string | Array<string> | { type: string } };

  partition: string;

  reference: string;

  updatedAt: number;
};
