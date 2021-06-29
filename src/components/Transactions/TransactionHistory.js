import PropTypes from 'prop-types';
import s from './Transactions.module.css';

const Transactions= ({ items }) => (
  <table className={s.container}>
    <thead className={s.header}>
      <tr className={s.lists}>
        <th className={s.titles}>Type</th>
        <th className={s.titles}>Amount</th>
        <th className={s.titles}>Currency</th>
      </tr>
    </thead>

    <tbody className={s.tbody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={s.list}>
          <td className={s.item}>{type}</td>
          <td className={s.item}>{amount}</td>
          <td className={s.item}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
}

export default Transactions