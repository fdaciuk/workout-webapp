import React, { Fragment } from 'react'
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
  withStyles
} from '@material-ui/core'
import {
  // OndemandVideo,
  ExpandMore
} from '@material-ui/icons'
import Subtitle from './subtitle'
import { Table, THead, TBody, Th, Tr, Td } from './table'

const ListTraining = ({
  training,
  openAdvancedTechnique,
  getVideo,
  weekDay,
  setWeekDay,
  classes
}) => (
  <Fragment>
    {training.treino.map((t, index) => (
      <ExpansionPanel
        key={t.treino}
        expanded={weekDay === index + 1}
        onClick={() => setWeekDay(index + 1)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography variant='button'>{t.treino} ({t.weekDay})</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <Subtitle>
            <span style={{ display: 'inline-block'}}>{t.musculos}</span>
          </Subtitle>
          <Typography variant='subtitle2' gutterBottom>
            Intervalo: {t.intervalo.replace(/^.+: (.+)$/, '$1')}
          </Typography>

          <Table>
            <THead>
              <Tr>
                {['Exercício', 'SxR', 'Técnica Avançada'].map((title) => (
                  <Th key={title}>{title}</Th>
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

                  <Td numeric>{ex.SxR}</Td>

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

const styles = {
  root: {
    overflowX: 'auto'
  },

  training: {
    padding: '0 0 50px'
  },

  details: {
    display: 'block'
  }
}

export default withStyles(styles)(ListTraining)
