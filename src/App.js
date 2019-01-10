import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './App.css';

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor(props) {
    super(props)
    this.elem = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.elem)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.elem)
  }

  render() {
    return ReactDom.createPortal(
      this.props.children,
      this.elem,
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal : false};
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal)
  }

  onShowModal = () => {
    this.setState({ showModal : true })
  }

  onCloseModal = () => {
    this.setState({ showModal : false})
  }


  render() {
    return (
      <div className="App">

          <section>
            <div id="sectionContent">
                <p onClick={this.onShowModal}> In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon. 
                </p>
              </div>
            {this.state.showModal ? (
               <div onClick={this.onCloseModal} id="dialogPlaceholder" role="dialog">
               <div>
               <dialog>
                   <Modal
                        onRequestClose={this.onCloseModal} >
                      <Child />
                   </Modal>        
                 </dialog>
              </div>
              </div>

            ) : null }
  
          </section>

      </div>
    );
  }
}

function Child() {
  return (
    <div className="modal">
      <p> Hi! I am your modal </p> 
    </div>
  )
}

export default App;
