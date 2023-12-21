export type TDropdownProps = {
  id: string,
  label?: string,
  value?: string,
  fullWidth?: boolean, 
  initialOptions: TDropdownItemProps[],
  editable?: boolean,
  required?: boolean,
  disabled?: boolean,
  error?: boolean,
  errorMessage?: string,
  success?: boolean,
  isLoading?: boolean,
  handleDropdownChange?: () => void,
  handleAddBtn?: () => void,
  icon?: React.ReactNode,
  helpText?: string,
  tooltip?: string,
  width?: string,
  onChange?: (value: string | number ) => void,
  onLabelChange?: (value: string | number ) => void,
  onChangeWithLabel?: (value: string | number, label: string | number) => void,
  onLabelChangeWithLabel?: (value: string | number, label: string | number) => void,
  onSearch?: (value: string) => void,
  setFormError?: (e: string) => void
}

export type TDropdownItemProps = {
  Id: string | number,
  Description: string | number,
}

type ArtistImage = {
  ImageS3Key: string,
}

export type TDropdownArtistItemProps = {
  Id?: number,
  images?: ArtistImage[] | null,
  Firstname?: string,
  Surname: string,
  Bushname?: string | null,
  ArtistSubSectionSkin: {
    SubSectionSkinId: number,
    SubSectionSkin: {
        Description: string
    }
  } | null,
  OtherName?: string | null,
  ArtistCommunity: {
    CommunityId: number,
    Community: {
        Description: string
    }
  } | null,
  Deceased?: boolean,
}

export type TDropdownArtistProps = {
  id: string,
  label?: string,
  value?: string,
  fullWidth?: boolean, 
  initialOptions: TDropdownArtistItemProps[],
  editable?: boolean,
  required?: boolean,
  disabled?: boolean,
  error?: boolean,
  errorMessage?: string,
  success?: boolean,
  isLoading?: boolean,
  handleDropdownChange?: () => void,
  handleAddBtn?: () => void,
  icon?: React.ReactNode,
  helpText?: string,
  tooltip?: string,
  width?: string,
  onChange?: (value: string | number ) => void,
  onLabelChange?: (value: string | number ) => void,
  onChangeWithLabel?: (value: string | number, label: string | number) => void,
  onLabelChangeWithLabel?: (value: string | number, label: string | number) => void,
  onSearch?: (value: string) => void,
  setFormError?: (e: string) => void
}
