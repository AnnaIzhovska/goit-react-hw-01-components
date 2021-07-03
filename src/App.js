import './index.css'

import Profile from './components/Profile/Profile';
import profile from './data/profile.json';

import StatisticsList from './components/Statistics/StatisticsList';
import statistics from './data/statical-data.json';

import FriendList from './components/Friends/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './data/transactions.json'

const App = () => {
  return(
  <>
    <Profile
    name= {profile.name}
    tag= {profile.tag} 
    location= {profile.location} 
    avatar= {profile.avatar}
    stats= {profile.stats}/>

    <StatisticsList
      title="Upload stats"
      statistics={statistics} />
      
     <FriendList friends={friends} />
        
    <TransactionHistory items= {transactions}/>
</>
  )}

export default App;