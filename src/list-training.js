import React, { Fragment } from 'react'
import {
  Typography,
  Button,
  withStyles
} from '@material-ui/core'
import Title from './title'
import './list-training.css'

import { Table, THead, TBody, Th, Tr, Td } from './table'

const ListTraining = ({ training, openAdvancedTechnique, getVideo, classes }) => (
  <Fragment>
    <Title>{training.foco}</Title>

    {training.treino.map((t) => (
      <article key={t.treino} className='training'>
        <Typography variant='h5' component='h3' className={classes.subtitle}>
          {t.treino} ({t.weekDay}) - {t.musculos}
        </Typography>
        <Typography>{t.intervalo}</Typography>

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
                <Td>
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

                <Td>{ex.SxR}</Td>

                <Td>
                  {ex.tecnicaAvancada && (
                    ex.tecnicaAvancada.includes('Descanso') ? ex.tecnicaAvancada : (
                      <Button variant='contained' color='primary' onClick={openAdvancedTechnique(ex.tecnicaAvancada)}>
                        {ex.tecnicaAvancada}
                      </Button>
                    )
                  )}
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>

        <Table
          titles={['Exercício', 'SxR', 'Técnica Avançada']}
          content={t.exercicios.map((ex) => [
            ex.exercicio.split(/(\s\+\s)/).map((exerc) => {
              if (exerc === ' + ') {
                return <span key={exerc}>{exerc}</span>
              }
              return (
                <a key={exerc} href={getVideo(exerc)} rel='noopener noreferrer' target='_blank'>
                  {exerc}
                </a>
              )
            }),

            ex.SxR,

            ex.tecnicaAvancada && (
              ex.tecnicaAvancada.includes('Descanso') ? ex.tecnicaAvancada : (
                <button onClick={openAdvancedTechnique(ex.tecnicaAvancada)}>
                  {ex.tecnicaAvancada}
                </button>
              )
            )
          ])}
        />
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
  }
}

export default withStyles(styles)(ListTraining)
