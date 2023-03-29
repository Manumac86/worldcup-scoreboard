import { InputNumber as InputNumberAnt } from 'antd'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const InputNumber = styled(InputNumberAnt)`
  padding: 0;
  margin: 0 1em;
  .ant-input-number {
    input {
      text-align: center;
    }
  }
`
