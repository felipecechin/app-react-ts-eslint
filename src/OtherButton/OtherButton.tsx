import { JSX } from 'react';

import styles from './OtherButton.module.scss';

export function OtherButton(): JSX.Element {
  return <button className={styles.otherButtonClass}>OtherButton</button>;
}
