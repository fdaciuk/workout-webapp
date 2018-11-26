import React, { useState } from 'react'
import styled from 'styled-components'

import {
  CssBaseline,
  TextField
} from '@material-ui/core'

import {
  useTraining,
  useOnlineOfflineChecker,
  useUpload,
  useTechnique,
  useWeekDay
} from './hooks'

import { getVideo } from '@helpers'
import OfflineMessage from './offline-message'
import FetchingMessage from './fetching-message'
import ErrorMessage from './error-message'
import MainTitle from './main-title'
import Tabs from './tabs'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'
import Space from './space'

const App = () => {
  const { training, setTraining } = useTraining()
  const { isOnline } = useOnlineOfflineChecker()
  const { isFetching, error, handleUpload } = useUpload({ setTraining })
  const { advancedTechnique, openAdvancedTechnique, closeModal } = useTechnique()
  const { weekDay, handleSetWeekDay } = useWeekDay()

  const [tab, setTab] = useState(0)

  return (
    <Main isOnline={isOnline}>
      <CssBaseline />

      {isOnline && (
        <Space horizontal vertical>
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

      {training && <Space horizontal><MainTitle>{training.foco}</MainTitle></Space>}

      {training && <Tabs training={training} tab={tab} setTab={setTab} />}

      {training && tab === 0 && (
        <ListTraining
          training={training}
          openAdvancedTechnique={openAdvancedTechnique}
          getVideo={getVideo}
          weekDay={weekDay}
          setWeekDay={handleSetWeekDay}
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
    </Main>
  )
}

const Main = styled.main`
  padding-top: ${({ isOnline }) => !isOnline ? '40px' : null}
`

export default App
