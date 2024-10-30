export const ENROLL_COURSE = 'ENROLL_COURSE';
export const UNENROLL_COURSE = 'UNENROLL_COURSE';

export const enrollCourse = (userId: any, courseId: any) => ({
  type: ENROLL_COURSE,
  payload: { userId, courseId },
});

export const unenrollCourse = (userId: any, courseId: any) => ({
  type: UNENROLL_COURSE,
  payload: { userId, courseId },
});