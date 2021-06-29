import PropTypes from'prop-types';
import s from './Statistics.module.css';


const Statistics = ({id, label, percentage}) => (
<>
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  </>
)

Statistics.propTypes = {
id: PropTypes.number.isRequired,
// stats: PropTypes.array,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}

export default Statistics;