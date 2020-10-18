import React from "react";
import { Field, reduxForm } from "redux-form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  return (
    <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
      <label>{label}</label>
      <input type="text" {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You must enter a title";
  }
  if (!formValues.description) {
    error.description = "You must enter description";
  }
  return error;
};

export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);
