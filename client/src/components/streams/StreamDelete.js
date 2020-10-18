import React, { useEffect } from "react";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  const { fetchStream, match } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const actions = (
    <>
      <button
        onClick={() => props.deleteStream(id)}
        className="ui negative button"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete stream with title: ${
          props.stream ? props.stream.title : ""
        } ?`}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
