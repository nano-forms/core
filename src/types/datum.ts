import { DatumData } from "./datum-data";

export type Datum = {
  createdAt: number;

  data: DatumData;

  partition: string;

  reference: string;

  updatedAt: number;
};
