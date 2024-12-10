import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {




  const findAssignmentById = async (req, res) => {
    const { assignmentId } = req.params
    // console.log("starting findAssignmentById: ", assignmentId);
    const assignment = await assignmentsDao.findAssignmentById(assignmentId);
    // console.log("result findAssignmentById: ", assignment);
    res.json(assignment);
  };
  app.get("/api/courses/assignments/:assignmentId", findAssignmentById);



   const updateAssignment = async (req, res) => {
    const {assignmentId} = req.params;
    const assignmentUpdates = req.body;
    console.log("chainging ", assignmentUpdates)
    await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    console.log("updated ", assignmentId)
    res.sendStatus(204);
    // res.json(status);

  }
  app.put("/api/courses/assignments/:assignmentId", updateAssignment)


  const deleteAssignment = async (req, res) => {
    const status = await assignmentsDao.deleteAssignment(req.params.assignmentId);
    res.json(status);
};
app.delete("/api/courses/assignments/:assignmentId", deleteAssignment);


}