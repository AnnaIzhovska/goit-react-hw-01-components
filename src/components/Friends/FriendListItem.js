import s from './Friends.module.css'
import avatarImg from '../avatar.webp';
import PropTypes from'prop-types';

const FriendListItem = ({ avatar = avatarImg, name, isOnline, id }) => (
<>
   <li className={s.item} key={id}>
       <span className={s.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</span>
       <img className={s.avatar} src={avatar} alt="" width="48" />
       <p className={s.name}>{name}</p>
    </li>
</>
);   

    FriendListItem.propTypes = {
      friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }),
      ),
    };


export default FriendListItem;