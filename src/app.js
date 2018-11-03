import React, { useState, useEffect } from 'react'
import {
  CssBaseline,
  TextField,
  withStyles
} from '@material-ui/core'
import { get, set } from 'idb-keyval'
import { http, to, getVideo } from './helpers'
import OfflineMessage from './offline-message'
import FetchingMessage from './fetching-message'
import ErrorMessage from './error-message'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'

const App = ({ classes }) => {
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const [advancedTechnique, setTechnique] = useState(null)

  const [training, setTraining] = useState(null)
  useEffect(async () => {
    console.log('Get training from cache')
    const training = await get('training')
    if (training) {
      console.log('Set training from cache to state')
      setTraining(training)
    }
  }, [])

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

  const handleUpload = async (e) => {
    e.preventDefault()
    console.log('upload!')
    const file = e.target.files[0]
    let data = new FormData()
    data.append('file', file)

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

  const closeModal = () => {
    setTechnique(null)
  }

  const openAdvancedTechnique = (technique) => (e) => {
    setTechnique(technique)
  }

  return (
    <main className={`${!isOnline ? classes.mainOffline : ''} ${classes.main}`}>
      <CssBaseline />

      {isOnline && (
        <TextField
          fullWidth
          type='file'
          variant='outlined'
          onChange={handleUpload}
          label='Selecione seu treino (arquivo .xlsx):'
          InputLabelProps={{ shrink: true }}
        />
      )}

      {!isOnline && <OfflineMessage />}
      {isFetching && <FetchingMessage />}
      {error && <ErrorMessage />}

      {training && (
        <ListTraining
          training={training}
          openAdvancedTechnique={openAdvancedTechnique}
          getVideo={getVideo}
        />
      )}

      {training && training.aerobic && (
        <Aerobic days={training.aerobic} />
      )}

      {advancedTechnique && (
        <ModalAdvancedTechnique
          technique={advancedTechnique}
          closeModal={closeModal}
        />
      )}
    </main>
  )
}

const styles = {
  main: {
    padding: 20,
  },

  mainOffline: {
    paddingTop: 40
  }
}

export default withStyles(styles)(App)
