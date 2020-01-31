import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transition.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.menu}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={styles.transitionListData}>
      {items.map(item => (
        <tr className={styles.transitionListItem} key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
