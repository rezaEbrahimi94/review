export type TImageUploader = {
  multiple?: boolean,
  onChange?: (file: File) => void,
  onMultipleChange?: (files: File[]) => void,
  uploadProgress?: number,
}

export type TUploadItem = {
  name: string,
  status: 'uploading' | 'completed' | 'failed',
  size: number,
  progress?: number,
}
