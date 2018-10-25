import React, { PureComponent, Fragment } from 'react'
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
    if (err || !training) {
      console.log('ERR:', err, training)
      this.setState({ error: true })
      return
    }

    this.setState({ training, error: false })
    localStorage.setItem('training', JSON.stringify(training))
  }

  componentDidMount () {
    const training = localStorage.getItem('training')
    if (training && training !== 'undefined') {
      this.setState({ training: JSON.parse(training) })
    }
  }

  render () {
    return (
      <Fragment>
        <h1>Treino</h1>

        <div className='select-training'>
          <label>Selecione seu treino (arquivo .xlsx):</label>
          <input type='file' onChange={this.handleUpload} />
        </div>

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
