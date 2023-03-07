import React, { FC, useContext, useState } from 'react';
import {
  MdAlternateEmail,
  MdSettingsCell,
  MdPermPhoneMsg,
  MdLocationCity,
} from 'react-icons/md';
import { ICandidate } from '../../@types/candidate';
import CandidateContext from '../../context/candidateContext';
import Button from '../@common/button/Button';
import Panel from '../@common/panel/Panel';
import styles from './CandidateDetails.module.scss';

interface CandidateDetailsProperties {
  candidate: ICandidate;
  refetch?: () => void;
}
const CandidateDetails: React.FC<CandidateDetailsProperties> = (
  props: CandidateDetailsProperties
) => {
  const { candidate, refetch } = props;
  const { large } = candidate.picture;
  const { title, first, last } = candidate.name;
  const { email, dob, phone, cell } = candidate;
  const { street, city, state, postcode } = candidate.location;
  const [comment, setComment] = useState('');
  const { addCandidate, resetState } = useContext(CandidateContext);

  const commit = (person: ICandidate, status: boolean) => {
    person.approved = status;
    person.comment = comment;
    setComment('');
    addCandidate(person);
    refetch?.();
  };

  return (
    <Panel>
      <div className={styles.wrapper}>
        <div className={styles.candidateDetails}>
          <div className={styles.candidate}>
            <div className={styles.image}>
              <img src={large} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                {`${title}. ${first} ${last} - ${dob.age}`}
              </div>
              <div className={styles.infoItem}>
                <MdAlternateEmail />
                {email}
              </div>
              <div className={styles.infoItem}>
                <MdSettingsCell />
                {cell}
              </div>
              <div className={styles.infoItem}>
                <MdPermPhoneMsg />
                {phone}
              </div>
              <div className={styles.infoItem}>
                <MdLocationCity />
                {`${street.number} ${street.name}, ${city}, ${postcode}, ${state}`}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.comment}>
            <textarea
              data-testid='textAreaComment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Please provide comment explaining the reason for the decision.'
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => commit(candidate, true)} type={'primary'}>
              Approve
            </Button>
            <Button onClick={() => commit(candidate, false)} type={'secondary'}>
              Reject
            </Button>
            <Button onClick={() => resetState()} type={'info'}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default CandidateDetails;
