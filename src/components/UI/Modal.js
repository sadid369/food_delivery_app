import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const protalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElement
      )}
    </>
  );
}

export default Modal;
