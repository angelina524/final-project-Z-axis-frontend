import React from 'react'
import { useParams } from 'react-router-dom'
import QRcode from 'qrcode.react'
import styled from '@emotion/styled'

import SectionWrapper from './components/SectionWrapper'

const QRcodeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  canvas {
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h2`
  font-size: 1.2rem;
  align-self: flex-start;
`

const QRcodeImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.secondary_300};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const URLWrapper = styled.div`
  overflow-x: scroll;
  width: clamp(25ch, 80%, 60ch);
  height: 2.6rem;
  border-radius: 1.3rem;
  border: 1px solid ${({ theme }) => theme.secondary_300};
  padding: 0.3rem 1rem;
`

const CopyWrapper = styled.div`
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  border-radius: 0.6rem;
  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.2),
    1px 1px 5px rgba(0, 0, 0, 0.1), inset 1px 1px 1px rgba(0, 0, 0, 0.1),
    inset -1px -1px 1px rgba(0, 0, 0, 0.2);
`

const QRcodeSection = () => {
  const { url: issueUrl } = useParams()
  const QRcodeImage = `http://localhost:3000/#/backstage/issues/${issueUrl}`
  const URL = `http://localhost:3000/#/backstage/issues/${issueUrl}`

  const copyToBoard = (massage) => {
    navigator.clipboard.writeText(massage).then(
      () => alert('複製成功！'),
      () => alert('複製失敗 QQ')
    )
  }
  const handleCopyQRcode = () => {
    copyToBoard(QRcodeImage)
  }

  const handleCopyURL = () => {
    copyToBoard(URL)
  }

  return (
    <SectionWrapper>
      <QRcodeWrapper>
        <Title>前台連結</Title>
        <QRcodeImageWrapper>
          <QRcode value={URL} size="150" />
        </QRcodeImageWrapper>
        <CopyWrapper onClick={handleCopyQRcode}>按此複製 QR code</CopyWrapper>
        <URLWrapper>{URL}</URLWrapper>
        <CopyWrapper onClick={handleCopyURL}>按此複製網址</CopyWrapper>
      </QRcodeWrapper>
    </SectionWrapper>
  )
}

export default QRcodeSection
