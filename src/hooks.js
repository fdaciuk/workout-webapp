import { useState, useEffect } from 'react'
import { get } from 'idb-keyval'

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
