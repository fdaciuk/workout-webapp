import React, { useState, Suspense } from 'react'
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

import { getVideo, breakIntoORWordOrPlusSign } from '@helpers'

const OfflineMessage = React.lazy(() => import('./offline-message'))
const FetchingMessage = React.lazy(() => import('./fetching-message'))
const ErrorMessage = React.lazy(() => import('./error-message'))
const MainTitle = React.lazy(() => import('./main-title'))
const Tabs = React.lazy(() => import('./tabs'))
const ListTraining = React.lazy(() => import('./list-training'))
const ModalAdvancedTechnique = React.lazy(() => import('./modal-advanced-technique'))
const Aerobic = React.lazy(() => import('./aerobic'))
const Spaced = React.lazy(() => import('./spaced'))

const App = () => {
  const { training, setTraining } = useTraining()
  const { isOnline } = useOnlineOfflineChecker()
  const { isFetching, error, handleUpload } = useUpload({ setTraining })
  const { advancedTechnique, openAdvancedTechnique, closeModal } = useTechnique()
  const { today, weekDay, handleSetWeekDay } = useWeekDay()

  const [tab, setTab] = useState(0)

  return (
    <Main isOnline={isOnline}>
      <Suspense fallback=''>
        <CssBaseline />

        {isOnline && (
          <Spaced horizontal vertical>
            <TextField
              fullWidth
              type='file'
              variant='outlined'
              onChange={handleUpload}
              label='Selecione seu treino (arquivo .xlsx):'
              InputLabelProps={{ shrink: true }}
            />
          </Spaced>
        )}

        <Suspense fallback=''>
          {!isOnline && <OfflineMessage />}
          {isFetching && <FetchingMessage />}
          {error && <ErrorMessage />}

          {training && <Spaced horizontal><MainTitle>{training.foco}</MainTitle></Spaced>}

          {training && <Tabs training={training} tab={tab} setTab={setTab} />}

          {training && tab === 0 && (
            <ListTraining
              training={training}
              openAdvancedTechnique={openAdvancedTechnique}
              getVideo={getVideo}
              breakIntoORWordOrPlusSign={breakIntoORWordOrPlusSign}
              today={today}
              weekDay={weekDay}
              setWeekDay={handleSetWeekDay}
            />
          )}

          {training && training.aerobic && tab === 1 && (
            <Suspense fallback=''>
              <Aerobic days={training.aerobic} />
            </Suspense>
          )}

          {advancedTechnique && (
            <Suspense fallback=''>
              <ModalAdvancedTechnique
                technique={advancedTechnique}
                closeModal={closeModal}
              />
              </Suspense>
          )}
        </Suspense>
      </Suspense>
    </Main>
  )
}

const Main = styled.main`
  padding-top: ${({ isOnline }) => !isOnline ? '40px' : null}
`

export default App
