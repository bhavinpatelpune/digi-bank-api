export class AccountStatementDTO {
  readonly srno: number;
  readonly Accountnumber: string;
  readonly StatementYear: string;
  readonly txn_date: string;
  readonly value_date: string;
  readonly REFERENCE: string;
  readonly PDESC: string;
  readonly DEBIT: string;
  readonly CREDIT: string;
  readonly BALANCE: string;
  readonly open_bal: Number;
  readonly close_bal: Number;
}
