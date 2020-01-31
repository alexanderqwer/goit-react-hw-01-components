import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/User.json';
import Statistics from './Statistics/Statistics';
import statistics from './Statistics/Statistics.json';
import FrinedList from './FriendList/FriendList';
import friendList from './FriendList/FriendList.json';
import TransactionHistory from './Transition/Transition';
import transitions from './Transition/Transition.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics statistics={statistics} title="File upload" />
    <FrinedList friendList={friendList} />
    <TransactionHistory items={transitions} />
  </>
);

export default App;
