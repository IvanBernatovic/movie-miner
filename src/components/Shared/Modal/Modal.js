import React from "react"
import "./Modal.css"

class Modal extends React.Component {
  handleOnClose = (e) => {
    const { onClose } = this.props

    if (this.modal) {
      if (!this.modal.contains(e.target)) {
        onClose()
      }
    }
  }

  render() {
    return (
      this.props.show && (
        <div className="modal-overlay p-8" onClick={this.handleOnClose}>
          <div className="modal-body" ref={(node) => (this.modal = node)}>
            <div className="modal-header">
              <h2 className="text-lg">{this.props.modalTitle}</h2>
              <span className="close-modal" onClick={this.props.onClose}>
                X
              </span>
            </div>
            <div className="modal-content py-6">{this.props.children}</div>
          </div>
        </div>
      )
    )
  }
}

export default Modal
