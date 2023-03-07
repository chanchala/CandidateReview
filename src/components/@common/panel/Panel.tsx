import React from 'react';
import styles from './Panel.module.scss';

interface PanelProperties {
  children: React.ReactElement | React.ReactElement[];
}

const Panel: React.FC<PanelProperties> = (props: PanelProperties) => {
  const { children } = props;
  return <div className={styles.panel}>{children}</div>;
};

export default Panel;
