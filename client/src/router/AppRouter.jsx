import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../src/components/Menu";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import Student from "../page/Student/Student.jsx";
import UnassignStudent from "../page/Student/UnassignStudent.jsx";
import Attendance from "../page/Student/Attendance.jsx";
import LeaveRequest from "../page/Student/LeaveRequest.jsx";
import IdCard from "../page/Student/IdCard.jsx";
import ManageLogin from "../page/Student/ManageLogin.jsx";
import Promote from "../page/Student/Promote.jsx";
import Performance from "../page/Student/Performance.jsx";
import Dashboard from "../page/Dashboard/Dashboard.jsx";
import AllStaff from "../page/Staffs/AllStaff.jsx";
import StaffAttendance from "../page/Staffs/StaffAttendance.jsx";
import StaffLeaveRequest from "../page/Staffs/staffLeaveRequest.jsx";
import StaffIdCard from "../page/Staffs/StaffIdCard.jsx";
import StaffManageLogin from "../page/Staffs/SatffManageLogin.jsx";
import Rooms from "../page/Academic/Rooms.jsx";
import ClassAndSection from "../page/Academic/ClassAndSection.jsx";
import Subject from "../page/Academic/Subjects.jsx";
import Timetable from "../page/Academic/Timetable.jsx";
import AcademicPerformance from "../page/Academic/AcademicPerformance.jsx";
import AcademicExam from "../page/Academic/AcademicExam.jsx";
import AcademicResult from "../page/Academic/AcademicResult.jsx";
import AccountStatement from "../page/Finance/AccountStatement.jsx";
import FeeManagement from "../page/Finance/FeeManagement.jsx";
import Payroll from "../page/Finance/Payroll.jsx";
import Report from "../page/Finance/Report.jsx";
import AllStudents from "../page/Admission/AllStudents.jsx";
import AdmissionAttendance from "../page/Admission/AdmissionAttendance.jsx";
import AdmisionLR from "../page/Admission/AdmisionLR.jsx";
import AdmisionPerformance from "../page/Admission/AdmisionPerfromace.jsx";
import AdmissionID from "../page/Admission/AdmisionID.jsx";
import AdmissionManageLogin from "../page/Admission/AdmisionManageLogin.jsx";
import AdmissionPromote from "../page/Admission/AdmisionPromote.jsx";
import Library from "../page/Resources/Library.jsx";
// import Transport from "../page/Resources/Transport.jsx";
import Calendar from "../page/Events&Calender/Calender.jsx";
import Events from "../page/Events&Calender/Events.jsx";
import UpcomingEvents from "../page/Events&Calender/UpcomingEvents.jsx";
import Notice from "../page/Notice/Notice.jsx";
import Messages from "../page/Message/Messages.jsx";
import ReportAndAnalytics from "../page/Report&Analytics/ReportAndAnalytics.jsx";
import Settings from "../page/Settings/Settings.jsx";
import StudentDetails from "../page/Student/StudentDetails.jsx";
import AddStaff from "../page/Staffs/AddStaff.jsx";
import EditStaff from "../page/Staffs/EditStaff.jsx";
import StaffDetails from "../page/Staffs/StaffDetails.jsx";
import AddStudent from "../page/Student/AddStudent.jsx";
import EditStudent from "../page/Student/EditStudent.jsx";







function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
        
          <Route path="/dashboard" element={<Dashboard />} />
            {/* // student routes */}
          <Route path="students" element={<Student/>} />
          <Route path="Studentdetails" element={<StudentDetails/>} />
          <Route path="unassign-students" element={<UnassignStudent/>} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="leave-request" element={<LeaveRequest/>} />
          <Route path="perfromances" element={<Performance/>} />
          <Route path="id-card" element={<IdCard/>} />
          <Route path="manage-login" element={<ManageLogin/>} />
          <Route path="promote" element={<Promote/>} />
          <Route path="AddStudent" element={<AddStudent />} />
          <Route path="EditStudent" element={<EditStudent />} />


           {/* // staffs  */}
          <Route path="all-staffs" element={<AllStaff/>} />
          <Route path="add-staffs" element={<AddStaff/>} />
          <Route path="edit-staffs" element={<EditStaff/>} />
          <Route path="staffDetails" element={<StaffDetails/>} />
          <Route path="staff-attendance" element={<StaffAttendance/>} />
          <Route path="staffLeave-request" element={<StaffLeaveRequest/>} />
          <Route path="staff-id" element={<StaffIdCard/>} />
          <Route path="staff-manageLogin" element={<StaffManageLogin/>} />

            {/* // Academic */}
          <Route path="academic-rooms" element={<Rooms/>} />
          <Route path="class-section" element={<ClassAndSection/>} />
          <Route path="academic-subject" element={<Subject/>} />
          <Route path="academic-timetable" element={<Timetable/>} />
          <Route path="academic-performace" element={<AcademicPerformance/>} />
          <Route path="academic-exam" element={<AcademicExam/>} />
          <Route path="academic-result" element={<AcademicResult/>} />

            {/* // Finance */}
          <Route path="account-statement" element={<AccountStatement/>} />
          <Route path="fee-management" element={<FeeManagement/>} />
          <Route path="payroll" element={<Payroll/>} />
          <Route path="report" element={<Report/>} />

            {/* // Admission */}
          <Route path="admission-allStudent" element={<AllStudents/>} />
          <Route path="admission-attendance" element={<AdmissionAttendance/>} />
          <Route path="admission-leave-request" element={<AdmisionLR/>} />
          <Route path="admission-performance" element={<AdmisionPerformance/>} />
          <Route path="admission-id-card" element={<AdmissionID/>} />
          <Route path="admission-manage-login" element={<AdmissionManageLogin/>} />
          <Route path="admission-promote" element={<AdmissionPromote/>} />

           {/* // Resources */}
           <Route path="library" element={<Library/>} />
           {/* <Route path="transport" element={<Transport/>} /> */}

           {/* Events & Calendar */}
           <Route path="calender" element={<Calendar/>} />
           <Route path="events" element={<Events/>} />
           <Route path="upcoming-events" element={<UpcomingEvents/>} />

             {/* Notices */}
               <Route path="notice" element={<Notice/>} />

             {/* Messages */}
               <Route path="messages" element={<Messages/>} />

              {/* Reports & Analytics */}
               <Route path="reports-analytics" element={<ReportAndAnalytics/>} />

              {/* settings */}
               <Route path="settings" element={<Settings/>} />



        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;