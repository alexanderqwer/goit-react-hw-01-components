import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={user.avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{user.tag}</p>
      <p className={styles.loc}>{user.location}</p>
    </div>

    <ul className={styles.location}>
      <li className={styles.display}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{user.stats.followers}</span>
      </li>
      <li className={styles.display}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li className={styles.display}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};
export default Profile;
