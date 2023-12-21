export type TSystemDocumentsData = {
  // SenderEmail?: string,
  // ArkworksDocument?: string,
  // BiographyDocument?: string,
  // ConsignmentsDocument?: string,
  // CurrentConsignmentDocument?: string,
  // SalesDocument?: string,
  // AvailableItems?: string,
  Files: TDocument[] | null,
}

export type TDocument = {
  id: number,
  docType: string,
  title: string,
  type: string,
  fileKey: string,
}
