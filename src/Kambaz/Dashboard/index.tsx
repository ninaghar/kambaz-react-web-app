import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">Server-side Web Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>CS3456 Python for Data Science</h5>
              <p className="wd-dashboard-course-title">Intro to Data Analysis</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/machine-learning.jpg" width={200} />
            <div>
              <h5>CS4567 Machine Learning</h5>
              <p className="wd-dashboard-course-title">AI & Predictive Modeling</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/database.jpg" width={200} />
            <div>
              <h5>CS5678 Database Systems</h5>
              <p className="wd-dashboard-course-title">Relational DBs & SQL</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/devops.jpg" width={200} />
            <div>
              <h5>CS6789 DevOps</h5>
              <p className="wd-dashboard-course-title">CI/CD and Cloud Practices</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/security.jpg" width={200} />
            <div>
              <h5>CS7890 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">Ethical Hacking & Defense</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
