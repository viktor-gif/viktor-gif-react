import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const putEditMode = () => {
    setEditMode(true);
  };

  const deleteEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status,
  //     });
  //   }
  // }

  return (
    <div>
      {!editMode ? (
        <div onDoubleClick={putEditMode}>
          <span>{props.status || "-----"}</span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deleteEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
