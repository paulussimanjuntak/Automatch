import { useEffect } from "react";
import { isAuth } from "../../hoc/withAuth";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import BarVer from "./BarVer";
import BarHor from "./BarHor";

const Dashboard = () => {
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.auth.access_token);
  const refresh_token = useSelector((state) => state.auth.refresh_token);
  const user = useSelector((state) => state.auth.user);
  const dashboard = useSelector((state) => state.auth.dashboard);
  const { total_applicant, published_job, qualify_applicant } = dashboard;
  const { disqualify_applicant, job_summary, length_of_work } = dashboard;

  const onGetUser = (access_token) => dispatch(actions.getUser(access_token));
  const onCheckState = () => dispatch(actions.authCheckState());

  useEffect(() => {
    if (access_token === null || refresh_token === null || user === null) {
      onGetUser(isAuth());
      onCheckState();
    }
  }, [onGetUser, onCheckState, access_token, refresh_token, user]);

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col xl={3}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} className="align-self-center">
                  <div className="text-center text-warning">
                    <i className="fas fa-users fa-3x"></i>
                  </div>
                </Col>
                <Col md={9} className="pl-4">
                  <div className="numbers pl-2">
                    <div>
                      <p className="card-category text-muted mb-1">
                        Total Applicants
                      </p>
                      <h4 className="card-title mb-0">{total_applicant}</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} className="align-self-center">
                  <div className="text-center text-warning">
                    <i className="fas fa-upload fa-3x"></i>
                  </div>
                </Col>
                <Col md={9} className="pl-4">
                  <div className="numbers pl-2">
                    <div>
                      <p className="card-category text-muted mb-1">
                        Published Jobs
                      </p>
                      <h4 className="card-title mb-0">{published_job}</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} className="align-self-center">
                  <div className="text-center text-warning">
                    <i className="fas fa-user-check fa-3x"></i>
                  </div>
                </Col>
                <Col md={9} className="pl-4">
                  <div className="numbers pl-2">
                    <div>
                      <p className="card-category text-muted mb-1">
                        Qualify Applicants
                      </p>
                      <h4 className="card-title mb-0">{qualify_applicant}</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} className="align-self-center">
                  <div className="text-center text-warning">
                    <i className="fas fa-user-times fa-3x"></i>
                  </div>
                </Col>
                <Col md={9} className="pl-4">
                  <div className="numbers pl-2">
                    <div>
                      <p className="card-category text-muted mb-1">
                        Disqualify Applicants
                      </p>
                      <h4 className="card-title mb-0">
                        {disqualify_applicant}
                      </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-white">
              <Card.Title>
                <h4 className="mb-0">Jobs Summary</h4>
              </Card.Title>
              <Card.Subtitle className="mb-0 text-muted">
                Last 1 month of the year
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <BarVer jobSummary={job_summary} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className="bg-white">
              <Card.Title>
                <h4>Length of Work</h4>
              </Card.Title>
              <Card.Subtitle className="mb-0 text-muted">
                Last 1 month of the year
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <BarHor lengthOfWork={length_of_work} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Header className="bg-white border-0 pb-0 pt-4">
              <form>
                <div className="form-row">
                  <div className="col-9">
                    <h4 className="card-title">All Jobs</h4>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search job"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                        >
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Card.Header>
            <Card.Body className="pb-1">
              <Table borderless>
                <tbody>
                  <tr className="border-bottom">
                    <td>Software Engineering</td>
                    <td className="text-muted">17 March 2020 ~ 19.20</td>
                    <td className="text-muted">Total candidate: 23</td>
                    <td className="text-muted">Qualified applicant: 15</td>
                    <td>
                      <button className="btn btn-outline-info btn-sm">
                        See Details
                      </button>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>Software Engineering</td>
                    <td className="text-muted">17 March 2020 ~ 19.20</td>
                    <td className="text-muted">Total candidate: 23</td>
                    <td className="text-muted">Qualified applicant: 15</td>
                    <td>
                      <button className="btn btn-outline-info btn-sm">
                        See Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination>
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
