import React, { Fragment } from 'react'

const ListTraining = ({ training, openAdvancedTechnique }) => (
  <Fragment>
    {training.map((t) => (
      <article key={t.treino}>
        <h2>{t.treino}</h2>
        <p><strong>{t.musculos}</strong></p>
        <p><strong>{t.intervalo}</strong></p>

        <table>
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
                <td><a href={ex.video}>{ex.exercicio}</a></td>
                <td>{ex.SxR}</td>
                <td>
                  {ex.tecnicaAvancada}
                  {ex.tecnicaAvancada &&
                    <button onClick={openAdvancedTechnique(ex.tecnicaAvancada)}>(?)</button>
                  }
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
