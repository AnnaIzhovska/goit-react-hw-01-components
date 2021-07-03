import avatarImg from '../avatar.webp';
import s from './Friends.module.css'
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ isOnline, avatar = avatarImg, name, id }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          id={id}
        />
      ))}
    </ul>
  )
};
export default FriendList;