

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Form from './Form';
import AppNavbar from './AppNavbar';
import JobAssistanceProgram from './JobAssistanceProgram';
import TextImageLayout from './TextImageLayout';
import Achievements from './Achievements';
import SkillsAndImage from './SkillsAndImage';
import Support from './Support';
import Hiring from './Hiring';
import Industry from './Industry';
// import Career from './Career';
import GuidanceSessionForm from './GuidanceSessionForm'
import SalaryTrend from './SalaryTrend';
import Answers from './Answers';
import Footer from './Footer';






function App() {
  return (
    <div className="">
      <AppNavbar />


      <div className="container3">
        <div className="page-one">

          <JobAssistanceProgram />
        </div>
        <div className="page-two">
          <GuidanceSessionForm />

        </div>
      </div>
      <Industry />
      <TextImageLayout />

      <Achievements />
      <SkillsAndImage />
      <Support />
      {/* <Career /> */}
      <Hiring />
      <SalaryTrend />
      {/* <Answers /> */}
      <Footer />
    </div>
  );
}

export default App;
