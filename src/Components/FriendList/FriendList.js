import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friendList }) => (
  <ul className="friend-list">
    {friendList.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span className={friend.isOnline ? styles.online : styles.ofline}>
          {friend.isOnline}
        </span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avtar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};
export default FriendList;
