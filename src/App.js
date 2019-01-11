import React, { Component } from 'react'
import Modal from './Modal'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal : false};
    // this.dialogElement = React.createRef();
  }

  onShowModal = () => {
    this.setState({ showModal : true });
  }

  onCloseModal = () => {
    this.setState({ showModal : false})
  }


  render() {
    return (
      <div className="App">

          <section>
            <div id="sectionContent" aria-hidden={ this.state.showModal? 'true':'false' }>
                <p onClick={this.onShowModal}> In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon. 
                </p>
              </div>
            {this.state.showModal ? (
               <div aria-label="Close" onClick={this.onCloseModal} id="dialogPlaceholder" role="dialog">
               <div>
               <dialog >
                   <Modal method="dialog"
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
    <div className="modal" >
    {/* Here goes the modal content */}
      <p> Hi! I am your modal </p> 
      <button> Accept </button>
    </div>
  )
}

export default App;
