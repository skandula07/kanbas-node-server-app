import model from "./model.js";


export function findAssignmentsForCourse(courseId) {

  // console.log(model.findOne({number : "A101"}));
  return model.find({course : courseId});
}



export function findAssignmentById (assignmentId){
  console.log("START find assignment by id", assignmentId)
   const assignment = model.findOne({number: assignmentId});
  console.log("found assignment by id", assignment)
  return assignment;
}

export function createAssignment(assignment) {
  delete assignment._id
  return model.create(assignment); 
}

export const deleteAssignment = (assignmentId) => model.deleteOne({ number: assignmentId });


export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ number : assignmentId }, { $set: assignmentUpdates })
}