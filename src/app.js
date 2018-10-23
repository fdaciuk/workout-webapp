import React, { Component, Fragment } from 'react'
import { http, to } from './helpers'
import ListTraining from './list-training'
import ModalAdvancedTechnique from './modal-advanced-technique'

class App extends Component {
  state = {
    training: null,
    advancedTechnique: null
  }

  getTraining = (user) => async (e) => {
    e.preventDefault()
    const [err, training] = await to(http.get(`http://localhost:4000/?user=${user}`))
    if (err) {
      this.setState({ training: null })
      console.log('ERR:', err)
    }
    this.setState({ training })
  }

  openAdvancedTechnique = (technique) => (e) => {
    this.setState({ advancedTechnique: technique })
  }

  closeModal = () => {
    this.setState({ advancedTechnique: null })
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
          />
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
