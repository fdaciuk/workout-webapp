import React, { Fragment } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import Title from './title'
import './list-training.css'

const ListTraining = ({ training, openAdvancedTechnique, getVideo, classes }) => (
  <Fragment>
    <Title>{training.foco}</Title>
    {training.treino.map((t) => (
      <article key={t.treino} className='training'>
        <Typography variant='h5' component='h3' className={classes.subtitle}>
          {t.treino} ({t.weekDay}) - {t.musculos}
        </Typography>
        <Typography>{t.intervalo}</Typography>

        <table className='list-training-table'>
          <thead>
            <tr>
              <th>Exercício</th>
              <th>SxR</th>
              <th>Técnica Avançada</th>
            </tr>
          </thead>
          <tbody>
            {t.exercicios.map((ex) => (
              <tr key={ex.exercicio}>
                <td>
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
                </td>
                <td>{ex.SxR}</td>
                <td>
                  {ex.tecnicaAvancada && (
                    ex.tecnicaAvancada.includes('Descanso') ? ex.tecnicaAvancada : (
                      <button onClick={openAdvancedTechnique(ex.tecnicaAvancada)}>
                        {ex.tecnicaAvancada}
                      </button>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    ))}
  </Fragment>
)

const styles = {
  subtitle: {
    margin: '5px 0'
  }
}

export default withStyles(styles)(ListTraining)
