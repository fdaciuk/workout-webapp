export default (file) => (rowCol) => {
  const cel = file.Sheets['Tabela de rotina de treinamento'][rowCol.toUpperCase()]
  return cel ? cel.v.trim() : null
}
