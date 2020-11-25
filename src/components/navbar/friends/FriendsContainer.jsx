import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

// const mapDispatchToProps = (dispatch) => {};

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;
