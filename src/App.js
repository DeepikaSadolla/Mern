// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router,Routes,Link} from "react";
// import HeaderComponent from './components/header.component';
// import FooterComponent from './components/footer.component';
// import ClassComponent from './components/Student-list.component';
// function App() {
//   return (
//     <div className='App'>
//       {/* <HeaderComponent />
//       <ClassComponent />
//       <FooterComponent /> */}
//       <Router>
//         <Routes>
//           <Link to="/HeaderComponent"
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/Student-list.component';
import StudentInfo from './components/Student-info.component';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';
function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <nav className="navbar navbar-expand ">

          <ul className="navbar-nav">

            <li className='nav nav-item'><Link className="nav-link" to={"/create-student"}><button> Create Student</button></Link></li>
            <li className='nav nav-item'><Link className="nav-link" to={"/Student-list"}>Student List</Link></li>
          </ul>


        </nav>
        <Switch>
          <Route exact path="/" component={StudentList} />
          <Route path="/create-student" component={CreateStudent} />
          <Route path="/edit-student/:id" component={EditStudent} />
          <Route path="/Student-list" component={StudentList} />
          <Route path="/Student-info/:id" component={StudentInfo} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;