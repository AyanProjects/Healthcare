import * as yup from 'yup'

yup.addMethod<yup.StringSchema>(yup.string, 'password', function (message) {
  return this.test(
    'password',
    message ||
      'Password must be min 10 characters, and contain at least one or more Special Character, Uppercase, Number and Lowercase',
    (value) =>
      value
        ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`!~[\]@#$%^&*()\-_=+{};:,<.>])(?=.{10,})/.test(value)
        : true
  )
})

yup.addMethod<yup.NumberSchema>(yup.number, 'number', function (message) {
  return this.test('number', message || 'Value must be number', (value) =>
    value ? /^[0-9]*$/.test(value.toString()) : true
  )
})

declare module 'yup' {
  class StringSchema<
    TType extends yup.Maybe<string> = string | undefined,
    TContext = yup.AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = ''
  > extends yup.Schema<TType, TContext, TDefault, TFlags> {
    password(): StringSchema<TType, TContext, TDefault, TFlags>
  }

  class NumberSchema<
    TType extends yup.Maybe<number> = number | undefined,
    TContext = yup.AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = ''
  > extends yup.Schema<TType, TContext, TDefault, TFlags> {
    number(): NumberSchema<TType, TContext, TDefault, TFlags>
  }
}

export default yup
