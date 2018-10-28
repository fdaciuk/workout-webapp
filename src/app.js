import React, { PureComponent, Fragment } from 'react'
import { CssBaseline, TextField } from '@material-ui/core'
import { get, set } from 'idb-keyval'
import { http, to, videos } from './helpers'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'

class App extends PureComponent {
  state = {
    training: null,
    advancedTechnique: null,
    isFetching: false,
    error: false
  }

  openAdvancedTechnique = (technique) => (e) => {
    this.setState({ advancedTechnique: technique })
  }

  closeModal = () => {
    this.setState({ advancedTechnique: null })
  }

  getVideo = (exercise) => {
    const ex = Object.keys(videos).find((v) => v.includes(exercise.trim()))
    return videos[ex]
  }

  handleUpload = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    let data = new FormData()
    data.append('file', file)

    this.setState({ isFetching: true })
    const [err, training] = await to(http.upload(process.env.REACT_APP_BACKEND, data))
    this.setState({ isFetching: false })
    if (err || !training || training.error) {
      console.log('ERR:', err, training)
      this.setState({ error: true })
      return
    }

    this.setState({ training, error: false })
    set('training', training)
  }

  async componentDidMount () {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true
    const training = await get('training')
    if (training) {
      this.setState({ training })
    }
  }

  render () {
    return (
      <Fragment>
        <CssBaseline />

        <TextField
          fullWidth
          type='file'
          variant='outlined'
          onChange={this.handleUpload}
          label='Selecione seu treino (arquivo .xlsx):'
          InputLabelProps={{ shrink: true }}
        />

        {this.state.isFetching && (
          <div className='loading-message'>
            Buscando informações do seu treino...
          </div>
        )}

        {this.state.error && (
          <div className='error-message'>
            <h2>Deu problema :(</h2>
            <p>Por favor, tente novamente mais tarde.</p>
          </div>
        )}

        {this.state.training && (
          <ListTraining
            training={this.state.training}
            openAdvancedTechnique={this.openAdvancedTechnique}
            getVideo={this.getVideo}
          />
        )}

        {this.state.training && this.state.training.aerobic && (
          <Aerobic days={this.state.training.aerobic} />
        )}

        {this.state.advancedTechnique && (
          <ModalAdvancedTechnique
            technique={this.state.advancedTechnique}
            closeModal={this.closeModal}
          />
        )}
      </Fragment>
    )
  }
}

export default App
