import React, { Fragment } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Typography,
  ExpansionPanel as MaterialExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails as MaterialExpansionPanelDetails,
  Button
} from '@material-ui/core'
import {
  // OndemandVideo,
  ExpandMore
} from '@material-ui/icons'
import Subtitle from './subtitle'
import { Table, THead, TBody, Th, Tr, Td } from './table'
import { lower } from './helpers'

const ListTraining = ({
  training,
  openAdvancedTechnique,
  getVideo,
  breakIntoORWordOrPlusSign,
  today,
  weekDay,
  setWeekDay
}) => (
  <Fragment>
    {training.treino.map((t) => (
      <ExpansionPanel
        key={t.treino}
        expanded={weekDay === lower(t.weekDay)}
        data-today={today}
        data-day={lower(t.weekDay)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          onClick={() => setWeekDay(t.weekDay)}
        >
          <Typography variant='button'>{t.treino} ({t.weekDay})</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Subtitle>
            <Span>{t.musculos}</Span>
          </Subtitle>
          <Typography variant='subtitle2' gutterBottom>
            Intervalo: {t.intervalo.replace(/^.+: (.+)$/, '$1')}
          </Typography>

          <Table>
            <THead>
              <Tr>
                {['Exercício', 'SxR', 'Técnica Avançada'].map((title) => (
                  <Th key={title} center={title === 'SxR'}>{title}</Th>
                ))}
              </Tr>
            </THead>

            <TBody>
              {t.exercicios.map((ex) => (
                <Tr key={ex.exercicio}>
                  <Td padding='dense'>
                    {!!getVideo(ex.exercicio.replace(/\s\s/g, ' ')) && (
                      <a href={getVideo(ex.exercicio.replace(/\s\s/g, ' '))} rel='noopener noreferrer' target='_blank'>
                        {ex.exercicio.replace(/\s\s/g, ' ')}
                      </a>
                    )}

                    {!getVideo(ex.exercicio.replace(/\s\s/g, ' ')) && breakIntoORWordOrPlusSign(ex.exercicio).map((exerc) => {
                      if (exerc === ' + ' || exerc === ' ou ') {
                        return <span key={exerc}>{exerc}</span>
                      }

                      return (
                        <a key={exerc} href={getVideo(exerc)} rel='noopener noreferrer' target='_blank'>
                          {exerc}
                        </a>
                      )
                    })}
                  </Td>

                  <Td center>{ex.SxR}</Td>

                  <Td padding='default'>
                    {ex.tecnicaAvancada && (
                      ex.tecnicaAvancada.includes('Descanso') ? ex.tecnicaAvancada : (
                        <Button size='small' variant='contained' color='primary' onClick={openAdvancedTechnique(ex.tecnicaAvancada)}>
                          {ex.tecnicaAvancada}
                        </Button>
                      )
                    )}
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
  </Fragment>
)

ListTraining.propTypes = {
  training: t.object.isRequired,
  openAdvancedTechnique: t.func.isRequired,
  getVideo: t.func.isRequired,
  breakIntoORWordOrPlusSign: t.func.isRequired,
  today: t.string.isRequired,
  weekDay: t.string,
  setWeekDay: t.func.isRequired
}

const ExpansionPanel = styled(MaterialExpansionPanel)`
  && {
    background: ${(props) => props['data-today'] === props['data-day'] ? '#ffebb2' : null};
  }
`

const ExpansionPanelDetails = styled(MaterialExpansionPanelDetails)`
  && {
    display: block;
  }
`

const Span = styled.span`
  display: inline-block;
`

export default ListTraining
