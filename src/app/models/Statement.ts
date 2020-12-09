import {Expense} from './Expense';
import { Sales } from './Sales';
export class Statement{
    id: number;
    monthlybalance: number;
    numberOfFiles: number;
    avgSales: number;
    avgExpenses: number;
    expenses: Expense[];
    sales: Sales[];
    accountId: number;
}