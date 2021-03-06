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

export default compose(
  connect(mapStateToProps, { addMessage }),
  WithAuthRedirect
)(Dialogs);
