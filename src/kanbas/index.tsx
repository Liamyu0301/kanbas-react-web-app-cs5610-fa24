// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./styles.css";
// import { useState, useEffect } from "react";
// import store from "./store";
// import { Provider } from "react-redux";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Session from "./Account/Session";
// // import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import { useSelector } from "react-redux";
// import * as courseClient from "./Courses/client";

// function KanbasContent() {
//   const [courses, setCourses] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const [enrolling, setEnrolling] = useState<boolean>(false);
//   const findCoursesForUser = async () => {
//     try {
//       const courses = await userClient.findCoursesForUser(currentUser._id);
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const fetchCourses = async () => {
//     try {
//       const allCourses = await courseClient.fetchAllCourses();
//       const enrolledCourses = await userClient.findCoursesForUser(
//         currentUser._id
//       );
//       const courses = allCourses.map((course: any) => {
//         if (enrolledCourses.find((c: any) => c._id === course._id)) {
//           return { ...course, enrolled: true };
//         } else {
//           return course;
//         }
//       });
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     if (enrolling) {
//       fetchCourses();
//     } else {
//       findCoursesForUser();
//     }
//   }, [currentUser, enrolling]);
//   const [course, setCourse] = useState<any>({
//     _id: "1234",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     image: "/images/reactjs.jpg",
//     description: "New Description",
//   });

//   // const fetchCourses = async () => {
//   //   let courses = [];
//   //   try {
//   //     courses = await courseClient.fetchAllCourses();
//   //     setCourses(courses);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   //   setCourses(courses);
//   // };

//   // useEffect(() => {
//   //   fetchCourses();
//   // }, [currentUser]);

//   const addNewCourse = async () => {
//     // const newCourse = await userClient.createCourse(course);
//     const newCourse = await courseClient.createCourse(course);
//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = async (courseId: string) => {
//     // const status = await courseClient.deleteCourse(courseId);
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = async () => {
//     await courseClient.updateCourse(course);
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <Session>
//       <div id="wd-kanbas">
//         <KanbasNavigation />
//         <div className="wd-main-content-offset p-3">
//           <Routes>
//             <Route path="/" element={<Navigate to="Dashboard" replace />} />
//             <Route path="Account/*" element={<Account />} />
//             <Route
//               path="Dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard
//                     courses={courses}
//                     course={course}
//                     setCourse={setCourse}
//                     addNewCourse={addNewCourse}
//                     deleteCourse={deleteCourse}
//                     updateCourse={updateCourse}
//                     // fetchCourses={fetchCourses}
//                     enrolling={enrolling}
//                     setEnrolling={setEnrolling}
//                   />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="Courses/:cid/*"
//               element={
//                 <ProtectedRoute>
//                   <Courses courses={courses} />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="Calendar" element={<h1>Calendar</h1>} />
//             <Route path="Inbox" element={<h1>Inbox</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Session>
//   );
// }
// export default function Kanbas() {
//   return (
//     <Provider store={store}>
//       <KanbasContent />
//     </Provider>
//   );
// }

import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

function KanbasContent() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const addNewCourse = async () => {
    // const newCourse = { ...course, _id: new Date().getTime().toString() };
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const status = await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  return (
    <div id="wd-kanbas">
      <Session>
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                  updateEnrollment={updateEnrollment}
                />
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={<Courses courses={courses} />}
            />
            <Route path="/Calendar" element={<h2>Calendar</h2>} />
            <Route path="/Inbox" element={<h2>Inbox</h2>} />
          </Routes>
        </div>
      </Session>
    </div>
  );
}
export default function Kanbas() {
  return (
    <Provider store={store}>
      <KanbasContent />
    </Provider>
  );
}
