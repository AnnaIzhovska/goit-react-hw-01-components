import PropTypes from'prop-types';
import s from './Statistics.module.css';


const Statistics = ({label, percentage}) => (
<>
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  </>
)

Statistics.propTypes = {
id: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}

export default Statistics;