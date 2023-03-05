import styles from './styles.module.scss';

function CardLabel({category}) {

   let labelStyle;

   switch (category){
      case 'Скидка': 
         labelStyle = styles.sales;
         break;
      case 'Хит':
         labelStyle = styles.hits;
         break;  
      case 'New':
         labelStyle = styles.new;
         break;      
      default:
         labelStyle = '';
   }


   return (
      <div className={styles.label}>
         <p>{category}</p>
         <svg className={labelStyle} width='42' height='29' viewBox='0 0 42 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M42 0H0V24L21 29L42 24V0Z'/>
         </svg>
      </div>
   );
}

export default CardLabel;