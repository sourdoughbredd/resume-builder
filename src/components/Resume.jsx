import "../styles/Resume.css";
import Header from "./Header";
import Section from "./Section";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function Resume() {
  return (
    <div className="resume">
      <Header
        name="Brett Bussell"
        phone="(209) 585 5343"
        email="bwbussell24@gmail.com"
        website="www.linkedin.com/in/brett-bussell"
      ></Header>
      <Section name="Education">
        <Education
          degree="M.S. in Mechanical Engineering"
          school="University of California, Berkeley"
          date="05/2021"
          details={[
            { title: "GPA", description: "3.77/4.00" },
            {
              title: "Emphasis",
              description: "Modeling and control of dynamical systems",
            },
            {
              title: "Select Coursework",
              description: "Control of Unmanned Aerial Vehicles",
            },
          ]}
        ></Education>
        <Education
          degree="B.S. in Mechanical Engineering"
          school="University of California, Berkeley"
          date="12/2019"
          details={[
            { title: "GPA", description: "3.90/4.00, Graduation with Honors" },
            {
              title: "Select Coursework",
              description: "Lagrangian Dynamics, Advanced Linear Algebra",
            },
          ]}
          gpa="3.90/4.00, Graduation with Honors"
          courses="Lagrangian Dynamics, Advanced Linear Algebra"
        ></Education>
      </Section>
      <Section name="Work Experience">
        <WorkExperience
          title="Flight Controls Engineer (F/A-18)"
          employer="Naval Air Systems Command (NAVAIR)"
          start="10/2021"
          end="07/2023"
          responsibilities={[
            {
              id: 0,
              text: "Developed and maintained MATLAB scripts for aggregation and analysis of 400,000 Monte Carlo simulation runs, ensuring control laws meet requirements",
            },
            {
              id: 1,
              text: "Boosted Monte Carlo data aggregation rate by 6x using parallel processing, saving hundreds of hours of computation time and reducing code development timeline",
            },
            {
              id: 2,
              text: "Identified and resolved a small but critical design error in the control law Simulink model, preventing potential losses of millions of testing dollars and ensuring the project’s timely success",
            },
            {
              id: 3,
              text: "Refined control laws and analysis methodologies through targeted SWIL analyses using high-fidelity CASTLE simulation software and MATLAB/Simulink",
            },
            {
              id: 4,
              text: "Supported control law testing and validation during HWIL/PIL (pilot-in-the-loop) sim sessions at the state-of-the-art F-18 simulators at the Navy’s Manned Flight Simulator facility",
            },
          ]}
        ></WorkExperience>
        <WorkExperience
          title="Instructor"
          employer="UC Berkeley College of Engineering, T-PREP Program"
          start="08/2020"
          end="08/2021"
          responsibilities={[
            {
              id: 0,
              text: "Taught a 3 week crash course in MATLAB programming to a group of 30 incoming transfer students",
            },
            {
              id: 1,
              text: "Created a set of university-level lecture materials, including 12 lectures and live programming demos",
            },
          ]}
        ></WorkExperience>
        <WorkExperience
          title="Student Researcher"
          employer="UC Berkeley Hybrid Robotics Lab"
          start="03/2018"
          end="12/2019"
          responsibilities={[
            {
              id: 0,
              text: "Built a simulation of nonlinear vehicle dynamics (based on 3-state bicycle model) in MATLAB Simulink",
            },
            {
              id: 1,
              text: "Designed a cascaded PID control system that can autonomously drift at desired radii with varying initial conditions",
            },
          ]}
        ></WorkExperience>
      </Section>
    </div>
  );
}
