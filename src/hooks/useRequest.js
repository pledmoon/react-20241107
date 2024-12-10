import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRequestStatusById } from '../redux/ui/request/request-slice.js'

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState(null)
  const dispatch = useDispatch()

  const requestStatus = useSelector((state) => selectRequestStatusById(state, request?.requestId))

  useEffect(() => {
    const request = dispatch(thunk(...params))
    setRequest(request)

    return () => {
      request.abort()
      setRequest(null)
    }
  }, [dispatch, thunk, ...params])

  return requestStatus
}
