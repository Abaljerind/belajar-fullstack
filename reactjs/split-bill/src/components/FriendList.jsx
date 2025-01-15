import Friend from "./Friend";

export default function FriendList({ friends, onSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} onSelectedFriend={onSelectedFriend} />;
      })}
    </ul>
  );
}
