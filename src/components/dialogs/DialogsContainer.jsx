import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addMessage } from "../../redux/dialogs-reducer";
import WithAuthRedirect from "../common/hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessage(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
