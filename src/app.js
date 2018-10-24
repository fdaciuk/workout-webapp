import React, { PureComponent, Fragment } from 'react'
import { http, to, videos } from './helpers'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'
import Aerobic from './aerobic'

class App extends PureComponent {
  state = {
    training: null,
    advancedTechnique: null
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

    const [err, training] = await to(http.upload('http://localhost:4000', data))
    if (err) {
      console.log('ERR:', err)
      this.setState({ training: null })
      return
    }
    this.setState({ training })
  }

  render () {
    return (
      <Fragment>
        <h1>Treino</h1>

        <h2>Selecione seu treino (arquivo .xlsx):</h2>
        <input type='file' onChange={this.handleUpload} />

        {this.state.training &&
          <ListTraining
            training={this.state.training}
            openAdvancedTechnique={this.openAdvancedTechnique}
            getVideo={this.getVideo}
          />
        }

        {this.state.training && this.state.training.aerobic &&
          <Aerobic days={this.state.training.aerobic} />
        }

        {this.state.advancedTechnique &&
          <ModalAdvancedTechnique
            technique={this.state.advancedTechnique}
            closeModal={this.closeModal}
          />
        }
      </Fragment>
    )
  }
}

export default App
