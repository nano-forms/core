export type Datum = {
  createdAt: number;

  data: { [key: string]: string | { type: string } };

  partition: string;

  reference: string;

  updatedAt: number;
};
