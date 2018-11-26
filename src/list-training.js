import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails as MaterialExpansionPanelDetails,
  Button,
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
  weekDay,
  setWeekDay,
}) => (
  <Fragment>
    {training.treino.map((t) => (
      <ExpansionPanel
        key={t.treino}
        expanded={weekDay === lower(t.weekDay)}
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
                    {ex.exercicio.split(/(\s\+\s)/).map((exerc) => {
                      if (exerc === ' + ') {
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

const ExpansionPanelDetails = styled(MaterialExpansionPanelDetails)`
  && {
    display: block;
  }
`

const Span = styled.span`
  display: inline-block;
`

export default ListTraining
