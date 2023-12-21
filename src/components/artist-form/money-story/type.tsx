export type TMoneyStory = {
  Level?: string,
  BankAccountName?: string,
  BankBSB?: string,
  BankAccount?: string,
  HasABN?: boolean,
  ABN?: string,
  RegisteredForGST?: boolean,
  ContractDocuments?: File | null,
}

export type TForm = {
  onChange: (key: string, value: string | boolean | File | null) => void,
  errorsEndpoint?: TFormErrors,
  uploadProgress?: number,
}

export type TFormErrors = {
  ABN?: string,
}
