import React, { Component } from 'react'
import ReactDom from 'react-dom'

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

export default Modal;