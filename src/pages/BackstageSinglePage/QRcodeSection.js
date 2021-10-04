import React from 'react'
import styled from '@emotion/styled'

import SectionWrapper from './components/SectionWrapper'

const QRcodeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
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
  const QRcodeImage =
    'https://truth.bahamut.com.tw/s01/202007/46fee139876b39a8d0bef29d8853860c.JPG'
  const URL =
    'https://google.com.https://google.com/.https://google.com/.https://google.com/'

  const handleCopyQRcode = () => {
    navigator.clipboard.writeText(QRcodeImage).then(
      () => {
        alert('複製成功！')
      },
      () => {
        alert('複製失敗 QQ')
      }
    )
  }

  const handleCopyURL = () => {
    navigator.clipboard.writeText(URL).then(
      () => {
        alert('複製成功！')
      },
      () => {
        alert('複製失敗 QQ')
      }
    )
  }

  return (
    <SectionWrapper>
      <QRcodeWrapper>
        <Title>前台連結</Title>
        <QRcodeImageWrapper>
          <img src={QRcodeImage} />
        </QRcodeImageWrapper>
        <CopyWrapper onClick={handleCopyQRcode}>按此複製 QR code</CopyWrapper>
        <URLWrapper>{URL}</URLWrapper>
        <CopyWrapper onClick={handleCopyURL}>按此複製網址</CopyWrapper>
      </QRcodeWrapper>
    </SectionWrapper>
  )
}

export default QRcodeSection
