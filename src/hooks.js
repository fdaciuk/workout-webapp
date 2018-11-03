import { useState, useEffect } from 'react'
import { get, set } from 'idb-keyval'
import { http, to } from './helpers'

export function useTraining () {
  const [training, setTraining] = useState(null)

  useEffect(async () => {
    console.log('Get training from cache')
    const training = await get('training')
    if (training) {
      console.log('Set training from cache to state')
      setTraining(training)
    }
  }, [])

  return { training, setTraining }
}

export function useOnlineOfflineChecker () {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    console.log('check online / offline connections')
    function handleConnection () {
      setIsOnline(navigator.onLine)
    }

    window.addEventListener('online', handleConnection, false)
    window.addEventListener('offline', handleConnection, false)

    return () => {
      window.removeEventListener('online', handleConnection)
      window.removeEventListener('offline', handleConnection)
    }
  }, [])

  return { isOnline }
}

export function useUpload ({ setTraining }) {
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState(false)

  const handleUpload = async (e) => {
    e.preventDefault()
    console.log('upload!')
    const file = e.target.files[0]
    let data = new FormData()
    data.append('file', file)

    setError(false)
    setFetching(true)
    const [err, training] = await to(
      http.upload(process.env.REACT_APP_BACKEND, data)
    )
    setFetching(false)

    if (err || !training || training.error) {
      console.log('ERR:', err, training)
      return setError(true)
    }

    setError(false)
    setTraining(training)
    set('training', training)
  }

  return { isFetching, error, handleUpload }
}

export function useTechnique () {
  const [advancedTechnique, setTechnique] = useState(null)

  const closeModal = () => {
    setTechnique(null)
  }

  const openAdvancedTechnique = (technique) => (e) => {
    setTechnique(technique)
  }

  return { advancedTechnique, openAdvancedTechnique, closeModal }
}
