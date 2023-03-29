import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import { Button } from '../styles'

function StartForm({ onSubmit }) {
  const [form] = Form.useForm()

  const handleFinish = (values) => {
    onSubmit(values)
    form.resetFields()
  }

  return (
    <Form
      name='startForm'
      form={form}
      layout='vertical'
      onFinish={handleFinish}
      autoComplete='off'
      initialValues={{
        homeTeamName: '',
        awayTeamName: '',
      }}
    >
      <Form.Item
        label='Home Team'
        name='homeTeamName'
        validateTrigger={['onChange', 'onBlur']}
        rules={[
          {
            required: true,
            message: 'Please insert Home Team Name',
            min: 3,
          },
        ]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        label='Away Team'
        name='awayTeamName'
        validateTrigger={['onChange', 'onBlur']}
        rules={[
          {
            required: true,
            message: 'Please insert Away Team Name',
            min: 3,
          },
        ]}
      >
        <Input size='large' />
      </Form.Item>
      <Form.Item
        shouldUpdate
        wrapperCol={{
          offset: 0,
        }}
      >
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Start Game
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

StartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default StartForm
