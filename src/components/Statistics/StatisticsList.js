import PropTypes from'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';


const StatisticsList = ({statistics,title=''}) => {
  return(
    <section className={s.container}>
       {title && <h2 className={s.title}>{title}</h2>}
          <ul className={s.list}>
    {statistics.map(({title, label, percentage})=> (
     <Statistics
    title={title}
     label= {label}
     percentage= {percentage}/>
 ))}
 </ul>
 </section>
)
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      })
    ).isRequired,
  };
  
export default StatisticsList;
