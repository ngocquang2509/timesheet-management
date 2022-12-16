export interface ITimesheet {
  readonly id: string;
  hour: number;
  comment: string;
  record: string;
  readonly createdAt: string;
}
