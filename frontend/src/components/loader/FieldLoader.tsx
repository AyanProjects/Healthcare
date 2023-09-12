import loadable, { DefaultComponent } from '@loadable/component'
import { Form, Skeleton } from 'antd'

export default function FieldLoader<P>(loadFn: (props: P) => Promise<DefaultComponent<P>>) {
  return loadable(loadFn, {
    fallback: (
      <Form.Item label={<Skeleton.Input active className="!h-[22px] !w-20 !min-w-min rounded" />}>
        <Skeleton.Input active className="!h-[35px] !w-full !min-w-0 rounded-md" />
      </Form.Item>
    )
  })
}
