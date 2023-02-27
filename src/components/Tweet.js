import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamps from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <User name={props.tweet.user.name} handle={props.tweet.user.handle}>
          <Timestamps tweet={props.tweet} />
        </User>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
