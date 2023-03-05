import React from "react";
import ContentLoader from "react-content-loader";
import styles from './styles.module.scss';

const Skeleton = (props) => (
   
    <ContentLoader 
    className={styles.item}
    speed={2}
   //  width={220}
   //  height={450}
   //  viewBox="0 0 220 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
   
    
      <rect className={styles.img} rx="10" /> 
      
      
  </ContentLoader>
)

export default Skeleton

