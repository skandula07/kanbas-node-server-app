import model from "./model.js";
import CourseModel from "../Courses/model.js";
import userModel from "../Users/model.js";

export async function findCoursesForUser(userId) {

  const enrollments = await model.find({ user: userId });
  const courseNumbers = enrollments.map((enrollment) => enrollment.course);
  const courses = await CourseModel.find({ number: { $in: courseNumbers } });
  return courses;
}

export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId });
 const userIds = enrollments.map((enrollment) => enrollment.user);
 const users = await userModel.find({ user: { $in: userIds } });
 return users;
}

 export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
 }
 export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }
 
