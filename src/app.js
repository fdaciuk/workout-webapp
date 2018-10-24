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

  getTraining = (user) => async (e) => {
    e.preventDefault()
    const [err, training] = await to(http.get(`http://localhost:4000/?user=${user}`))
    if (err) {
      console.log('ERR:', err)
      this.setState({ training: null })
      return
    }
    this.setState({ training })
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

  render () {
    return (
      <Fragment>
        <h1>Treino</h1>
        <ul>
          <li><button onClick={this.getTraining('ale')}>Treino Ale</button></li>
          <li><button onClick={this.getTraining('fer')}>Treino Fer</button></li>
        </ul>

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
