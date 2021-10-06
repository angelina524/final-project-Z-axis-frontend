import React from 'react'
import { useParams } from 'react-router-dom'
import QRcode from 'qrcode.react'
import styled from '@emotion/styled'

import logo from '../../logo.svg'
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

const CopyWrapper = styled.a`
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  border-radius: 0.6rem;
  box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.2),
    1px 1px 5px rgba(0, 0, 0, 0.1), inset 1px 1px 1px rgba(0, 0, 0, 0.1),
    inset -1px -1px 1px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.secondary_100};
`

const QRcodeSection = () => {
  const { url: issueUrl } = useParams()
  const URL = `http://localhost:3000/#/backstage/issues/${issueUrl}`

  const copyURLtoBoard = (URL) => {
    navigator.clipboard.writeText(URL).then(
      () => alert('複製成功！'),
      () => alert('複製失敗 QQ')
    )
  }
  const downloadQRcode = ({ target }) => {
    const canvasImg = document.getElementById('qrId')
    const img = new Image()
    img.src = canvasImg.toDataURL('image/png')
    target.href = img.src
    target.download = 'QRcode'
  }

  return (
    <SectionWrapper>
      <QRcodeWrapper>
        <Title>前台連結</Title>
        <QRcodeImageWrapper>
          <QRcode
            id="qrId"
            value={URL}
            size={200}
            imageSettings={{
              src: logo,
              x: null,
              y: null,
              height: 36,
              width: 36,
              excavate: true
            }}
          />
        </QRcodeImageWrapper>
        <CopyWrapper id="down_link" onClick={downloadQRcode}>
          下載複製 QR code
        </CopyWrapper>
        <URLWrapper>{URL}</URLWrapper>
        <CopyWrapper onClick={copyURLtoBoard}>按此複製網址</CopyWrapper>
      </QRcodeWrapper>
    </SectionWrapper>
  )
}

export default QRcodeSection
