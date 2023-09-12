import { Table as AntTable, TableProps } from 'antd'
import clsx from 'clsx'
import { ComponentType, memo } from 'react'
import './Table.scss'

function Table<P extends Record<string, unknown>>({
  columns,
  dataSource,
  className,
  ...props
}: TableProps<P>) {
  return (
    <div className={clsx('custom-background', className)}>
      <div className="custom-table">
        <AntTable
          columns={columns}
          scroll={{ x: '100%' }}
          dataSource={dataSource?.map((x, i) => ({
            key: i,
            ...x
          }))}
          {...props}
        />
      </div>
    </div>
  )
}

export default memo<ComponentType<Record<string, unknown>>>(Table)
