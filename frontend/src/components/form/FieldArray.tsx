import { Skeleton, Space } from 'antd'
import { getIn, useFormikContext } from 'formik'
import { FunctionComponent, memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import Button from '../Button'

type TFieldArray = {
  name: string
  editable?: boolean
  viewOnly?: boolean
  allowEmpty?: boolean
  children: FunctionComponent<
    {
      i: number
      setFieldValue: (field: string, value: unknown, shouldValidate?: boolean | undefined) => void
    } & TLineItem
  >
  defaultValues: string
  additionalValues: Record<string, unknown>
  delay?: number
  loaderCount?: number
  showAdd?: boolean
}

type TLineItem = {
  id: string
  new: boolean
}

function FieldArray({
  name,
  defaultValues,
  additionalValues,
  editable,
  viewOnly,
  allowEmpty,
  delay = 500,
  loaderCount = 3,
  showAdd,
  children: Comp
}: TFieldArray) {
  const { values, setFieldValue } = useFormikContext<{ [index: string]: [] }>()
  const { id } = useParams<{ id: string }>()
  const [mount, setMount] = useState(false)
  const sm = useMediaQuery('(max-width: 767px)')
  const md = useMediaQuery('(max-width: 991px)')

  const items = getIn(values, name) as []

  const addRow = () => {
    setFieldValue(name, [...items, defaultValues])
  }

  const removeRow = (index: number) => {
    setFieldValue(
      name,
      items.filter((_, i) => i !== index)
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setMount(true)
    }, delay)
  }, [])

  return mount ? (
    <div className="relative">
      {items?.map((item: TLineItem, i: number) => (
        <div className="list-field" key={i}>
          <div style={{ width: '100%' }}>
            <Comp
              {...{
                ...item,
                ...additionalValues,
                i,
                setFieldValue
              }}
            />
          </div>
          {(item.new || ((editable || !id) && (items.length > 1 || allowEmpty) && !viewOnly)) && (
            <div className="remove-column" style={{ position: 'absolute', right: -30 }}>
              <Button
                style={{ backgroundColor: 'darkred', color: '#fff' }}
                className="mt-3 !btn-glow !delete-field"
                onClick={() => removeRow(i)}>
                <i className="fas fa-minus mr-0" />
              </Button>
            </div>
          )}
        </div>
      ))}
      {(showAdd || ((editable || !id) && !viewOnly)) && (
        <Button
          style={{
            border: '1px solid',
            position: 'absolute',
            bottom: -15,
            right: 20,
            backgroundColor: 'darkgreen',
            color: '#fff',
            borderRadius: '5px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}
          onClick={addRow}>
          <i className="fas fa-plus" />
        </Button>
      )}
    </div>
  ) : (
    <Space size="middle" className="field-array">
      {[...Array(sm ? 2 : md ? 3 : loaderCount)].map((item, i) => (
        <Skeleton.Input key={i} active />
      ))}
    </Space>
  )
}

export default memo(FieldArray)
