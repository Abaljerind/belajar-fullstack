import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}