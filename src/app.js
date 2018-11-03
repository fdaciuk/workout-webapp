import React, { useState, useEffect } from 'react'
import {
  CssBaseline,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core'
import { WifiOff } from '@material-ui/icons'
import { get, set } from 'idb-keyval'
import { http, to, videos } from './helpers'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'

const App = ({ classes }) => {
  const [isFetching, setFetching] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [error, setError] = useState(false)
  const [training, setTraining] = useState(null)
  const [advancedTechnique, setTechnique] = useState(null)

  // Set training on cache
  useEffect(async () => {
    console.log('Set training on cache')
    const training = await get('training')
    if (training) {
      setTraining(training)
    }
  }, [])

  // set online / offline events
  useEffect(() => {
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

      {!isOnline && (
        <Typography className={classes.offline} variant='button'>
          <WifiOff />
          Você está offline
        </Typography>
      )}

      {isFetching && (
        <Typography className={`${classes.messageBox} ${classes.loading}`}>
          Buscando informações do seu treino...
        </Typography>
      )}

      {error && (
        <div className={`${classes.messageBox} ${classes.error}`}>
          <Typography variant='h6' component='h2'>Deu problema :(</Typography>
          <Typography>Por favor, tente novamente mais tarde.</Typography>
        </div>
      )}

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

function getVideo (exercise) {
  const ex = Object.keys(videos).find((v) => v.includes(exercise.trim()))
  return videos[ex]
}

const styles = {
  main: {
    padding: 20,
  },

  mainOffline: {
    paddingTop: 40
  },

  offline: {
    background: 'red',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg': {
      marginRight: 10
    }
  },

  messageBox: {
  margin: '10px 0',
  borderRadius: 5,
  border: '1px solid',
  padding: 20,
  },

  loading: {
    background: '#e5e0ff',
    borderColor: '#b2a3ff',
    color: '#4a0fd8',
  },

  error: {
    background: '#ffe0e0',
    borderColor: '#e8aeae',

    '& h2, & p': {
      margin: 0,
      color: '#c12525',
    },

    '& p': {
      marginTop: 10,
    }
  }
}

export default withStyles(styles)(App)
