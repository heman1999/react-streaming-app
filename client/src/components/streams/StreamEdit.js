import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ fetchStream, match, updateStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const onSubmit = (formValues) => {
    updateStream(match.params.id, formValues);
    console.log(formValues);
  };

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        initialValues={{ title: stream.title, description: stream.description }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit
);
