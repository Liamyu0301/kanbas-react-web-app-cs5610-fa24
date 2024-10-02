import { Link } from "react-router-dom";
import "./styles.css"; 
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/*  course 1*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home"
              >
                <img src="images/reactjs.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer for Master Student
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 2*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5002/Home"
              >
                <img src="/images/AI.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5002 AI
                  </h5>
                  <p className="card-text">
                    Learn machine learning and artificial intelligence
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 3*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5003/Home"
              >
                <img src="/images/Python.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5003 Python
                  </h5>
                  <p className="card-text">
                    Python Programming for Software Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 4*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home"
              >
                <img src="/images/Data Science.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Data Science
                  </h5>
                  <p className="card-text">
                    Data Science for Software Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 5*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5005/Home"
              >
                <img src="/images/Java.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5005 Java
                  </h5>
                  <p className="card-text">
                    Java Programming for Software Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 6*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5006/Home"
              >
                <img src="/images/Database.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5006 Database
                  </h5>
                  <p className="card-text">
                    Database Management for Software Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          {/*  course 7*/}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5007/Home"
              >
                <img src="/images/Algorithm.jpg" className="card-img-top" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5007 Algorithms
                  </h5>
                  <p className="card-text">
                    Algorithm to cultivate students logical thinking
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
