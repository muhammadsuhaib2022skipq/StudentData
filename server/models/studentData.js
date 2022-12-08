import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    rollNumber: Number,
    name: String,
    creator: String,
    class: String,
    phoneNumber: Number
});

const StudentData = mongoose.model('StudentData', studentSchema);

export default StudentData;