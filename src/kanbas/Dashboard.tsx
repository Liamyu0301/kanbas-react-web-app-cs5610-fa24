import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import * as db from "./Database";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useState } from "react";
import { enrollInCourse, unenrollFromCourse } from "./enrollment/reducer";
export default function Dashboard({
  courses,
  setCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  setCourses: (courses: any[]) => void;
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isEnrolled = (courseId: any) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };
  const handleGoToCourse = (courseId: any) => {
    if (isEnrolled(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    } else {
      alert("You must be enrolled in this course to access it.");
    }
  };
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <ProtectedRoute role="FACULTY">
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      </ProtectedRoute>
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <div
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={() => handleGoToCourse(course._id)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`/images/${course._id}.jpg`}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGoToCourse(course._id);
                      }}
                    >
                      Go
                    </button>
                    <ProtectedRoute role="FACULTY">
                      <>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Delete
                        </button>
                      </>
                    </ProtectedRoute>
                    {currentUser.role === "STUDENT" && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                unenrollFromCourse({
                                  userId: currentUser._id,
                                  courseId: course._id,
                                })
                              );
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                enrollInCourse({
                                  userId: currentUser._id,
                                  courseId: course._id,
                                })
                              );
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
