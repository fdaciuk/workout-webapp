import trainingMap from './training-map'
import getValueConstructor from './get-value'

const week = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

export default (file) => {
  const getValue = getValueConstructor(file)

  const workoutDays = week.reduce((acc, day, index) => ({
    ...acc,
    [day]: getValue(`o${index + 3}`)
  }), {})

  const treino = {
    foco: getValue('n1'),

    aerobic: week.reduce((acc, day, index) => ({
      ...acc,
      [day]: getValue(`o${index + 12}`)
    }), {}),

    treino: Object.entries(trainingMap).map(([key, { meta, exercicios }]) => {
      const weekDay = (Object.entries(workoutDays).find(([day, training]) => training === key) || [])[0]

      if (!weekDay) {
        return null
      }

      return {
        weekDay,
        treino: getValue(meta.treino),
        musculos: getValue(meta.musculos),
        intervalo: getValue(meta.intervalo),
        exercicios: Array.from(
          { length: exercicios.linhas[1] - exercicios.linhas[0] + 1 },
          (_, i) => i + exercicios.linhas[0]
        ).map((line) => {
          const exercicio = getValue(`${exercicios.colunaExercicios}${line}`)
          return exercicio && {
            exercicio,
            SxR: getValue(`${exercicios.colunaSxR}${line}`),
            tecnicaAvancada: getValue(`${exercicios.colunaTecnicaAvancada}${line}`)
          }
        }).filter(Boolean)
      }
    }).filter(Boolean)
  }

  return treino
}
