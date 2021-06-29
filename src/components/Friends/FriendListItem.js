import FriendList from './FriendList';
import s from './Friends.module.css'
import PropTypes from'prop-types';

const FriendListItem = ({ friends, id }) => (

  <ul  className={s.list}>
   {friends.map(({isOnline, avatar, name }) => (
     <li className={s.item} key={id}>
  <FriendList
  avatar={avatar}
  name={name}
  isOnline={isOnline}
  />
  </li>
    ))}
</ul>
    );

    FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default FriendListItem