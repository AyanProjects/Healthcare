import type { ValueType } from '@rc-component/mini-decimal'
import type {
  CheckboxProps,
  FormItemProps,
  InputNumberProps,
  InputProps,
  InputRef,
  RadioGroupProps,
  SelectProps,
  UploadProps
} from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker'
import type {
  DatePickRef,
  PickerComponentClass,
  RangePickerRef
} from 'antd/es/date-picker/generatePicker/interface'
import type { DefaultOptionType } from 'antd/es/select'
import type { Moment } from 'moment'
import type { RangeValue } from 'rc-picker/lib/interface'
import type { BaseSelectRef } from 'rc-select'
import type { PropsWithoutRef, Ref } from 'react'
import GenericDatePicker from './GenericDatePicker'

type BaseFormTypes = {
  name: string
  label?: string
  error?: string
  required?: boolean
  hideLabel?: boolean
  formItemProps?: FormItemProps
}

export type TInput = {
  innerRef?: Ref<InputRef>
  value: string
  onChange: (name: string, value: string) => void
} & BaseFormTypes &
  Omit<InputProps, 'onChange'>

export type TInputNumber = {
  innerRef?: Ref<HTMLInputElement>
  onChange: (name: string, value?: ValueType | null) => void
} & BaseFormTypes &
  Omit<InputNumberProps, 'onChange'>

export type TRadio = {
  onChange: (name: string, value: string) => void
  options: DefaultOptionType[]
} & BaseFormTypes &
  Omit<RadioGroupProps, 'onChange'>

export type TSelect<T = string | string[]> = {
  innerRef?: Ref<BaseSelectRef>
  onChange: (name: string, value: T) => void
} & BaseFormTypes &
  Omit<SelectProps<T>, 'onChange'>

export type TRangePicker = {
  innerRef?: RangePickerRef<Moment>
  onChange: (name: string, value: RangeValue<Moment>) => void
} & BaseFormTypes &
  Omit<
    PickerComponentClass<
      RangePickerProps<Moment> & {
        dropdownClassName?: string | undefined
        popupClassName?: string | undefined
      },
      unknown
    >,
    'onChange' | 'name'
  >

export type TDatePicker = {
  innerRef?: DatePickRef<Moment>
  value: Moment | string | null
  placeholder?: string
  onChange: (name: string, value: Moment | null) => void
} & BaseFormTypes &
  Omit<PropsWithoutRef<typeof GenericDatePicker>, 'onChange' | 'name'>

export type TFile = {
  data: string
} & Pick<File, 'name' | 'type'>

export type TUpload = {
  value: TFile[]
  onChange: (name: string, value: TFile[]) => void
} & BaseFormTypes &
  Omit<UploadProps, 'onChange'>

export type TCheckbox = {
  innerRef?: Ref<HTMLInputElement>
  value: boolean
  onChange?: (name: string, value: boolean) => void
} & BaseFormTypes &
  Omit<CheckboxProps, 'onChange'>
