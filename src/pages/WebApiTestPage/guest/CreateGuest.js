import React, { useContext } from 'react'
import { createGuest } from '../../../webapi/guestApi'
import { Button } from '../Button'
import { setTopGuestTokenContext } from '../WebApiTestPage'

const CreateGuest = () => {
  const setTopGuestToken = useContext(setTopGuestTokenContext)
  const onClick = async () => {
    let guest = null
    try {
      guest = await createGuest()
    } catch (error) {
      console.log(error)
      alert('guest 產生失敗')
      return
    }
    console.log({ guest })
    setTopGuestToken(guest.guestToken)
    window.localStorage.setItem('guestToken', guest.guestToken)
    alert('guest 產生成功，請到 console 查看')
  }

  return <Button onClick={onClick}>產生 guestToken</Button>
}

export default CreateGuest
