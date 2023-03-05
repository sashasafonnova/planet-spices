import styles from './styles.module.scss';

import { useSelector } from 'react-redux';

function CatalogTrack() {


   const activeMenuItem = useSelector(state => state.filterSlice.activeMenuItem);


   return (
      <div className={styles.track}>{activeMenuItem}</div>
   );
}

export default CatalogTrack;


