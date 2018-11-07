import React, { useState, useEffect } from 'react'

import {
  CssBaseline,
  TextField,
  withStyles
} from '@material-ui/core'

import {
  useTraining,
  useOnlineOfflineChecker,
  useUpload,
  useTechnique
} from './hooks'

import { getVideo } from './helpers'
import OfflineMessage from './offline-message'
import FetchingMessage from './fetching-message'
import ErrorMessage from './error-message'
import Title from './title'
import Tabs from './tabs'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'
import Space from './space'

const App = ({ classes }) => {
  const { training, setTraining } = useTraining()
  const { isOnline } = useOnlineOfflineChecker()
  const { isFetching, error, handleUpload } = useUpload({ setTraining })
  const { advancedTechnique, openAdvancedTechnique, closeModal } = useTechnique()

  const [tab, setTab] = useState(0)
  const [weekDay, setWeekDay] = useState(0)

  useEffect(() => {
    const date = new Date()
    setWeekDay(date.getDay())
  }, [])

  return (
    <main className={`${!isOnline ? classes.mainOffline : ''}`}>
      <CssBaseline />

      {isOnline && (
        <Space className={classes.paper} horizontal vertical>
          <TextField
            fullWidth
            type='file'
            variant='outlined'
            onChange={handleUpload}
            label='Selecione seu treino (arquivo .xlsx):'
            InputLabelProps={{ shrink: true }}
          />
        </Space>
      )}

      {!isOnline && <OfflineMessage />}
      {isFetching && <FetchingMessage />}
      {error && <ErrorMessage />}

      {training && <Space horizontal><Title>{training.foco}</Title></Space>}

      {training && <Tabs training={training} tab={tab} setTab={setTab} />}

      {training && tab === 0 && (
        <ListTraining
          training={training}
          openAdvancedTechnique={openAdvancedTechnique}
          getVideo={getVideo}
          weekDay={weekDay}
          setWeekDay={setWeekDay}
        />
      )}

      {training && training.aerobic && tab === 1 && (
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
  mainOffline: {
    paddingTop: 40
  }
}

export default withStyles(styles)(App)
