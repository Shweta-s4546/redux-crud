import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readUser } from '../Action/UserAction'

function Homes() {
  const dispatch  = useDispatch()

  const initData = useCallback(() => {
    dispatch(readUser())
  },[])

  useEffect(() => {
    initData()
  },[])

  return (
    <div>
      homes
    </div>
  )
}

export default Homes
