import PropTypes from'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';


const StatisticsList = ({statistics,title='' }) => {
  return(
    <section className={s.container}>
       {title && <h2 className={s.title}>{title}</h2>}
       <ul className={s.list}>
         {statistics.map(({label, percentage, id})=> (
         <Statistics key = {id}
          label= {label}
          percentage= {percentage}/>
          ))}
       </ul>
    </section>
)
};

      Statistics.propTypes = {
          title: PropTypes.string
        }

  
export default StatisticsList;
