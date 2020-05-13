import { useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { isAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";

const Profile = ({ image, imageHandler }) => {
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const refresh_token = useSelector((state) => state.auth.refresh_token);
  const user = useSelector((state) => state.auth.user);

  const onGetUser = (access_token) => dispatch(actions.getUser(access_token));
  const onCheckState = () => dispatch(actions.authCheckState());

  useEffect(() => {
    if (access_token === null || refresh_token === null || user === null) {
      onGetUser(isAuth());
      onCheckState();
    }
  }, []);

  let avatar = "";
  if (image && image.includes("blob:")) {
    avatar = image;
  } else if (image) {
    avatar = `http://localhost:5000/static/avatars/${image}`;
  }
  return (
    <Container fluid>
      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Card.Title>
            <h4>Profile Setting</h4>
          </Card.Title>
          <Card className="pt-4">
            <Card.Body className="pt-0">
              <img
                src={avatar}
                className="img-thumbnail rounded mx-auto d-block"
                alt="profile"
                width="130"
                height="130"
              />
              <div className="text-center">
                <button className="btn btn-primary btnrel rounded-pill">
                  <span>Change picture</span>
                  <input
                    className="upload"
                    type="file"
                    onChange={imageHandler}
                    accept=".jpg,.png,.jpeg"
                  />
                </button>
                <h5 className="title mt-2">{user.username}</h5>
                <p className="text-muted">{user.email}</p>
              </div>

              <Container className="pl-5 pr-5">
                <Row className="row-cols-2 mt-4">
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCompany">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPosition">
                    <Form.Label>Position at Company</Form.Label>
                    <Form.Control type="text" placeholder="Talent Manager" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSite">
                    <Form.Label>Company Site</Form.Label>
                    <Form.Control type="text" placeholder="Company Site" />
                  </Form.Group>
                </Row>
                <Button variant="success" className="float-right mt-2 mb-0">
                  Save changes
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center mb-4">
        <Col md={8}>
          <Card.Title>
            <h4>Update Password</h4>
          </Card.Title>
          <Card className="pt-4">
            <Card.Body className="pt-0">
              <Container className="pl-5 pr-5">
                <Form.Group controlId="formGridCurrent">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Type your current password"
                  />
                </Form.Group>
                <Row className="row-cols-2 mt-4">
                  <Form.Group as={Col} controlId="formGridNew">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Type your new password"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridConfirm">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-type your new password"
                    />
                  </Form.Group>
                </Row>
                <Button variant="success" className="float-right mt-2 mb-0">
                  Save changes
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style jsx>{`
        .btnrel {
          position: relative;
          cursor: pointer;
        }
        .upload {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0;
          margin: 0;
          cursor: pointer;
          opacity: 0;
        }
      `}</style>
    </Container>
  );
};

export default Profile;
