import React from "react";
import { Modal, Icon } from "semantic-ui-react";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

import "./BasicModal.scss";

export default function BasicModal(props) {
  const { show, setShow, title, children } = props;

  /**
   * Function that close the modal
   */
  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal open={show} onClose={onClose} className="basic-modal" size="tiny">
      <Modal.Header>
        <h3>{title}</h3>
        <Icon name="close" onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  );
}
