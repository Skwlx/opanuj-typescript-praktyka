import type { Order, Product, User } from './table-models.ts';
import type { Table } from './task.ts';

declare const userTable: Table<User>;
declare const productTable: Table<Product>;
declare const orderTable: Table<Order>;

const u1: User = userTable.getUser(1);
const p1: Product = productTable.deleteProduct(12);
const o1: Order = orderTable.updateOrder(4, { quantity: 10 });
