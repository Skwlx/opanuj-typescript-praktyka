import { Order, Product, User } from './table-models.ts';

type EntityName<TModel> = TModel extends User
  ? 'user'
  : TModel extends Product
    ? 'product'
    : TModel extends Order
      ? 'order'
      : never;

type Get<Model> = {
  [Prop in `get${Capitalize<EntityName<Model>>}`]: (id: number) => Model;
};

type Update<Model> = {
  [Prop in `update${Capitalize<EntityName<Model>>}`]: (id: number, update: Partial<Model>) => Model;
};

type Delete<Model> = {
  [Prop in `delete${Capitalize<EntityName<Model>>}`]: (id: number) => Model;
};

export type Table<Model> = Get<Model> & Update<Model> & Delete<Model>;
