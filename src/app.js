import React, { useState, useEffect } from 'react'
import {
  CssBaseline,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core'
import { get, set } from 'idb-keyval'
import { http, to, videos } from './helpers'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'

const App = ({ classes }) => {
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const [training, setTraining] = useState(null)
  const [advancedTechnique, setTechnique] = useState(null)

  useEffect(async () => {
    const training = await get('training')
    if (training) {
      setTraining(training)
    }
  })

  const handleUpload = async (e) => {
    e.preventDefault()
    console.log('upload!')
    const file = e.target.files[0]
    let data = new FormData()
    data.append('file', file)

    setFetching(true)
    const [err, training] = await to(http.upload(process.env.REACT_APP_BACKEND, data))
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
    <main className={classes.main}>
      <CssBaseline />

      <TextField
        fullWidth
        type='file'
        variant='outlined'
        onChange={handleUpload}
        label='Selecione seu treino (arquivo .xlsx):'
        InputLabelProps={{ shrink: true }}
      />

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
