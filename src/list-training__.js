import React, { Fragment } from 'react'
import {
  Typography,
  Button,
  withStyles
} from '@material-ui/core'

import { Table, THead, TBody, Th, Tr, Td } from './table'

const ListTraining = ({ training, openAdvancedTechnique, getVideo, classes }) => (
  <Fragment>
    {training.treino.map((t) => (
      <article key={t.treino} className={classes.training}>
        <Typography variant='h5' component='h3' className={classes.subtitle}>
          <strong>{t.treino} ({t.weekDay})</strong> - {' '}
          <span style={{ display: 'inline-block'}}>{t.musculos}</span>
        </Typography>

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
      </article>
    ))}
  </Fragment>
)

const styles = {
  subtitle: {
    margin: '5px 0'
  },

  root: {
    overflowX: 'auto'
  },

  training: {
    padding: '0 0 50px'
  }
}

export default withStyles(styles)(ListTraining)
