import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ICandidate } from '../../@types/candidate';
import CandidateContext from '../../context/candidateContext';
import Modal from '../@common/modal/Modal';
import Panel from '../@common/panel/Panel';
import styles from './CandidateList.module.scss';

const CandidateList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<ICandidate>();
  const { candidates, removeCandidate } = useContext(CandidateContext);

  return (
    <Panel>
      {!candidates.length ? (
        <div style={{ textAlign: 'center', width: '100%' }}>
          <h1>No Data Is Available</h1>
          <p>Please Aprove or Reject Candidates Above First</p>
        </div>
      ) : (
        <div className={styles.candidates}>
          {candidates.map((candidate: ICandidate) => {
            const { name, email, dob, phone, cell, id, picture } = candidate;
            const { large } = picture;
            const { title, first, last } = name;

            const candidateCardStyle = classNames(styles.candidateCard, {
              [styles.approved]: candidate.approved,
              [styles.rejected]: !candidate.approved,
            });

            return (
              <div
                key={id.value}
                className={candidateCardStyle}
                onClick={() => {
                  setSelectedCandidate(candidate);
                  setIsOpen(true);
                }}
              >
                <div className={styles.candidateImage}>
                  <img src={large} />
                </div>
                <div className={styles.candidateInfo}>
                  <div>
                    <b>{`${title}. ${first} ${last} - ${dob.age} y`}</b>
                  </div>
                  <div>{`${email}`}</div>
                  <div>{`${phone}`}</div>
                  <div>{`${cell}`}</div>
                </div>
              </div>
            );
          })}
          {isOpen && (
            <Modal
              action={() => {
                if (selectedCandidate) {
                  removeCandidate(selectedCandidate.id.value);
                  setIsOpen(false);
                }
              }}
              setIsOpen={setIsOpen}
              title={
                <b>{`${selectedCandidate?.name.title}. ${selectedCandidate?.name.first} ${selectedCandidate?.name.last} `}</b>
              }
              body={<div>{selectedCandidate?.comment}</div>}
            />
          )}
        </div>
      )}
    </Panel>
  );
};

export default CandidateList;
