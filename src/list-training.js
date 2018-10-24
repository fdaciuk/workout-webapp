import React, { Fragment } from 'react'
import './list-training.css'

const ListTraining = ({ training, openAdvancedTechnique, getVideo }) => (
  <Fragment>
    <h2>{training.foco}</h2>
    {training.treino.map((t) => (
      <article key={t.treino} className='training'>
        <h2>{t.treino} ({t.weekDay})</h2>
        <p><strong>{t.musculos}</strong></p>
        <p><strong>{t.intervalo}</strong></p>

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

export default ListTraining
