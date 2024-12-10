import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
    number: String,
    title: String,
    course: String,
    due: Date,
    availabe_from: Date,
    available_until: Date,
    display_grade_as: String,
    submission_type: String,
    assign_to: String,
    points: String,
    description: String
 },
 { collection: "assignments" }
);
export default assignmentSchema;