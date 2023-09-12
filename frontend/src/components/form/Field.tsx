/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field as FormikField, FormikState, FormikValues, getIn, useFormikContext } from 'formik'
import { memo } from 'react'
import FieldLoader from '../loader/FieldLoader'
import type {
  TCheckbox,
  TDatePicker,
  TInput,
  TInputNumber,
  TRadio,
  TRangePicker,
  TSelect,
  TUpload
} from './types'

const Input = FieldLoader(() => import(/* webpackPrefetch: true */ './Input'))
const InputNumber = FieldLoader(() => import(/* webpackPrefetch: true */ './InputNumber'))
const Radio = FieldLoader(() => import(/* webpackPrefetch: true */ './Radio'))
const Select = FieldLoader(() => import(/* webpackPrefetch: true */ './Select'))
const RangePicker = FieldLoader(() => import(/* webpackPrefetch: true */ './RangePicker'))
const Upload = FieldLoader(() => import(/* webpackPrefetch: true */ './Upload'))
const Checkbox = FieldLoader(() => import(/* webpackPrefetch: true */ './Checkbox'))
const DatePicker = FieldLoader(() => import(/* webpackPrefetch: true */ './DatePicker'))

type TFieldAs =
  | ({
      as: 'radio'
    } & Partial<TRadio>)
  | ({
      as: 'select'
    } & Partial<TSelect>)
  | ({
      as: 'range-picker'
    } & Partial<TRangePicker>)
  | ({
      as: 'number'
    } & Partial<TInputNumber>)
  | ({
      as: 'checkbox'
    } & Partial<TCheckbox>)
  | ({
      as: 'date'
    } & Partial<TDatePicker>)
  | ({
      as: 'upload'
    } & Partial<TUpload>)
  | ({
      as?: 'input'
    } & Partial<TInput>)

type TField = {
  name: string
} & TFieldAs

function Field({ name, as = 'input', ...props }: TField) {
  const { values, errors, touched, setFieldValue } = useFormikContext<FormikState<FormikValues>>()

  return (
    <FormikField
      as={(() => {
        switch (as) {
          case 'radio':
            return Radio
          case 'select':
            return Select
          case 'range-picker':
            return RangePicker
          case 'number':
            return InputNumber
          case 'checkbox':
            return Checkbox
          case 'date':
            return DatePicker
          case 'upload':
            return Upload
          default:
            return Input
        }
      })()}
      name={name}
      error={getIn(touched, name) && getIn(errors, name)}
      value={getIn(values, name)}
      onChange={setFieldValue}
      required={Boolean(getIn(errors, name))}
      {...props}
    />
  )
}

export default memo(Field)
