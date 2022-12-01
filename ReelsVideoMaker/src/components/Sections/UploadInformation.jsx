import { useState } from "react";
// import other component
import FormInput from "../Elements/FormInput";
import Titles from "../Elements/Titles";
// import other pkg
import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UploadInformation = (props) => {
  const [submit, setSubmit] = useState(false);

  const onChangeInfo = (props) => {
    console.log('====================================');
    console.log(JSON.stringify(props));
    console.log('====================================');
  }

  return (
    <>
      <Titles
        title="Welcome to the Information"
        text="check or change your information as you want"
      />

      <Form noValidate onSubmit={onChangeInfo}>
        <Row className="mt-5 px-3">
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0"
            name="username"
            controlId="user-name-input"
            text="User Name"
            placeholder="Enter User Name"
            size="sm"
          />
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0 ms-lg-5 mt-3 mt-lg-0"
            name="lastName"
            controlId="last-name-input"
            text="Last Name"
            placeholder="Karimi"
            size="sm"
          />
        </Row>

        <Row className="mt-3 mt-lg-4 px-3">
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0"
            name="email"
            controlId="email-input"
            text="Email"
            placeholder="Enter your Email"
            size="sm"
          />
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0 ms-lg-5 mt-3 mt-lg-0"
            name="birthday"
            controlId="birthday-input"
            text="birthday"
            size="sm"
            placeholder="Enter your birthday"
            type="date"
          />
        </Row>
        <Button
          onClick={() => setSubmit(true)}
          variant="primary"
          className="mt-5 py-2 px-4"
          type="submit"
        >
          Update
        </Button>
      </Form>
    </>
  );
};

// validate the component
UploadInformation.propTypes = {
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default UploadInformation;
