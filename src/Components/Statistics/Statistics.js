import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, statistics }) => (
  <section className={styles.statisticsWrapper}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={styles.list}>
      {statistics.map(statistic => (
        <li className={styles.item} key={statistic.id}>
          <span className="label">{statistic.label}</span>
          <span className="percentage">{statistic.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statistics;
