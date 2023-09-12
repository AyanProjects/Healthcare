import { DatePicker } from 'antd'
import { Moment } from 'moment'
import momentGenerateConfig from 'rc-picker/lib/generate/moment'

const GenericDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig)

export default GenericDatePicker
