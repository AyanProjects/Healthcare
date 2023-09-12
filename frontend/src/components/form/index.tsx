import FieldLoader from '../loader/FieldLoader'
import Form from './Form'

const Field = FieldLoader(() => import(/* webpackPrefetch: true */ './Field'))

export { Field, Form }
