import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {




  const findAssignmentById = async (req, res) => {
    const { assignmentId } = req.params;
    // console.log("starting findAssignmentById ROUTE: ", assignmentId);
    const assignment = await assignmentsDao.findAssignmentById(assignmentId);
    // console.log("result findAssignmentById ROUTE: ", assignment);
    res.json(assignment);
  };
  app.get("/api/courses/:assignmentId/assignments", findAssignmentById);


  app.post("/:userId/:courseId/enroll", (req, res) => {
    const {userId, courseId} = req.params;
    const newEnrollment = enrollmentsDao.addEnrollment(userId, courseId);
    res.send(newEnrollment);
  });

  app.delete("/:userId/:courseId/unenroll", (req, res) => {
    const {userId, courseId} = req.params;
    enrollmentsDao.deleteEnrollment(userId, courseId);
    res.sendStatus(204);
  })




  



}

