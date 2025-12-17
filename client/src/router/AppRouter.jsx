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





function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
        
          <Route path="/dashboard" element={<Dashboard />} />
            {/* // student routes */}
          <Route path="students" element={<Student/>} />
          <Route path="unassign-students" element={<UnassignStudent/>} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="leave-request" element={<LeaveRequest/>} />
          <Route path="perfromances" element={<Performance/>} />
          <Route path="id-card" element={<IdCard/>} />
          <Route path="manage-login" element={<ManageLogin/>} />
          <Route path="promote" element={<Promote/>} />

          {/* <Route path="campus-setup" element={<CampusSetup/>} />
            <Route path="block-setup" element={<BlockSetup/>} />            
            <Route path="building-setup" element={<BuildingSetup/>} />  
            <Route path="ground" element={<AddGround/>} /> 
            <Route path="campusoverview" element={<CampusOvervieww/>} />  
            <Route path="buildingoverview" element={<BuildingOverview/>}/>
            <Route path="flooroverview" element={<FloorOverview/>}/>

          <Route path="user-management-system" element={<UserManagement/>} />
          <Route path="students" element={<Students />} />
          <Route path="studentTable" element={<StudentTable />} />
          <Route path="studentProfile/:id" element={<StudentProfile />} />

          
          <Route path="teachers" element={<Teachers />} />
          <Route path="addteachers" element={<AddTeachers/>} />
          <Route path="teachersProfile/:id" element={<TeacherProfile/>} />
          <Route path="academic-setup" element={<AcademicSetup />} />
          <Route path="lead-management-system" element={<LeadManagementSystem />} />
          <Route path="hr-management" element={<HRManagement />} />
          <Route path="account-management" element={<AccountManagement />} />
          <Route path="academic-management" element={<AcademicManagement />} />
          <Route path="library" element={<Library />} />
            <Route path="book-overview" element={<BookOverview />} />
            <Route path="history" element={<IssuedReturnHistory />} />


          <Route path="dormitory" element={<Dormitory />} />
          <Route path="transportation" element={<Transportation />} />
          <Route path="academic-history" element={<AcademicHistory />} />
          <Route path="admin-module" element={<AdminModule />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;