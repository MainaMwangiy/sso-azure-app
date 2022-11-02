import React, { useState, useEffect } from 'react'
import {useMsal} from '@azure/msal-react';

export default function Profile() {
  const {instance} = useMsal();
  const [username, setUsername] = useState('')
  useEffect(()=>{
    const currentAccount = instance.getActiveAccount()
    if(currentAccount){
      setUsername(currentAccount.username)
    }
  },[instance])
  return (
    <div>
      <p>Welcome {username}</p>
      <p>This is your Account </p>
    </div>
  )
}
