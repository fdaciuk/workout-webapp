import { useState, useEffect } from 'react'
import { get, set } from 'idb-keyval'
import { lower } from '@helpers'
import getTraining from './read-xlsx/get-training'

const xlsx = async () => import('xlsx').then(x => x.default)

export function useTraining () {
  const [training, setTraining] = useState(null)

  useEffect(() => {
    ;(async () => {
      console.log('Get training from cache')
      const training = await get('training')
      if (training) {
        console.log('Set training from cache to state')
        setTraining(training)
      }
    })()
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

  async function handleUpload (e) {
    e.preventDefault()
    console.log('upload!')

    const file = e.target.files[0]
    const reader = new FileReader()

    setError(false)
    setFetching(true)

    reader.onload = handleReaderOnload
    reader.readAsBinaryString(file)
  }

  async function handleReaderOnload (e) {
    const data = e.target.result
    const x = await xlsx()
    const workbook = x.read(data, { type: 'binary' })

    setFetching(false)
    const training = getTraining(workbook)
    if (!training || training.error) {
      console.log('ERR:', training)
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

export function useWeekDay () {
  const weekDays = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado'
  ]
  const [weekDay, setWeekDay] = useState(null)
  const [today, setToday] = useState(null)

  const isTheSame = (a, b) => a === b

  const handleSetWeekDay = (day) => {
    const lowerDay = lower(day)
    setWeekDay(
      !isTheSame(lowerDay, weekDay) && weekDays.includes(lowerDay)
        ? lowerDay
        : null
    )
  }

  useEffect(() => {
    const date = new Date()
    const today = weekDays[date.getDay()]
    setWeekDay(today)
    setToday(today)
  }, [])

  return { today , weekDay, handleSetWeekDay }
}
