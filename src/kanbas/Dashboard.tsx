import { useNavigate } from "react-router-dom";
import "./styles.css";
// import * as db from "./Database";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import { useState, useEffect } from "react";
import {
  enrollInCourse,
  unenrollFromCourse,
  setEnrollments,
} from "./enrollment/reducer";
import * as enrollmentClient from "./enrollment/client";
import * as courseClient from "./Courses/client";

export default function Dashboard({
  courses,
  setCourses,
  // course,
  setCourse,
  // addNewCourse,
  deleteCourse,
  updateCourse,
  fetchCourses,
}: {
  courses: any[];
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
  fetchCourses: () => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  // useEffect(() => {
  //   const fetchEnrollments = async () => {
  //     if (currentUser && currentUser._id) {
  //       const userEnrollments = await enrollmentClient.getUserEnrollments(
  //         currentUser._id
  //       );
  //       dispatch(setEnrollments(userEnrollments));
  //     }
  //   };
  //   fetchEnrollments();
  // }, [currentUser, dispatch]);

  // 添加 handleShowAllEnrollments 函数，触发获取所有注册信息的请求
  const handleShowAllEnrollments = async () => {
    // let allCourses = await courseClient.fetchAllCourses();
    // let middleCourses = allCourses.filter((e: any) => {
    //   courses.forEach((c) => {
    //     return e._id !== c._id;
    //   });
    // });
    // setCourses([...courses, ...middleCourses]);
    setShowAllCourses(!showAllCourses);
    console.log(courses);
  };

  const isEnrolled = (courseId: any) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));
  console.log(displayedCourses, "courses123");

  const handleGoToCourse = (courseId: any) => {
    console.log(courses, enrollments, "llsls");

    if (isEnrolled(courseId)) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  const handleEnroll = async (courseId: string) => {
    const enrollment = await enrollmentClient.enrollInCourse(
      currentUser._id,
      courseId
    );
    dispatch(enrollInCourse(enrollment));

    fetchCourses();
  };

  const handleUnenroll = async (courseId: string) => {
    await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
    console.log(courseId);

    dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
  };

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (currentUser && currentUser._id) {
        const userEnrollments = await enrollmentClient.getUserEnrollments(
          currentUser._id
        );
        dispatch(setEnrollments(userEnrollments));
      }
    };
    fetchEnrollments();
  }, [currentUser, dispatch]);

  const course: any = {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  };
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

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
          onClick={() => {
            console.log("showAllCourses before:", showAllCourses);
            // setShowAllCourses(!showAllCourses);
            handleShowAllEnrollments();
            console.log("showAllCourses after:", !showAllCourses);
          }}
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
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={"/images/reactjs.jpg"}
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
                            event.stopPropagation();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
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
                          // <button
                          //   className="btn btn-danger"
                          //   onClick={(e) => {
                          //     e.preventDefault();
                          //     dispatch(
                          //       unenrollFromCourse({
                          //         userId: currentUser._id,
                          //         courseId: course._id,
                          //       })
                          //     );
                          //   }}
                          // >
                          //   Unenroll
                          // </button>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              handleUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          // <button
                          //   className="btn btn-success"
                          //   onClick={(e) => {
                          //     e.preventDefault();
                          //     dispatch(
                          //       enrollInCourse({
                          //         userId: currentUser._id,
                          //         courseId: course._id,
                          //       })
                          //     );
                          //   }}
                          // >
                          //   Enroll
                          // </button>
                          <button
                            className="btn btn-success"
                            onClick={(e) => {
                              e.preventDefault();
                              handleEnroll(course._id);
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
