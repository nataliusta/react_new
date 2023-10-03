import styles from './Modal.module.css';

const Modal = () => {
    retrun (
        <>
            <div className={styles.backdrop} />
            <dialog className={styles.modal} ></dialog>
        </>
    );
}

export default Modal;