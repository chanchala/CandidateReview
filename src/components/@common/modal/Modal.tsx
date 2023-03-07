import React from 'react';
import styles from './Modal.module.scss';
import { RiCloseLine } from 'react-icons/ri';
import Button from '../button/Button';

interface ModalProps {
  action: (...args: any[]) => void;
  setIsOpen: (isOpen: boolean) => void;
  title: React.ReactElement | string;
  body: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { title, body, setIsOpen, action } = props;
  return (
    <>
      <div
        data-testid='darkBGOverlay'
        className={styles.darkBG}
        onClick={() => setIsOpen(false)}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <button
            data-testid='closeBtn'
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>{body}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button onClick={action} type={'primary'}>
                Undo
              </Button>
              <Button onClick={() => setIsOpen(false)} type={'secondary'}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
