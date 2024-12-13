//import logo from './logo.svg';
import headshot from './assets/theo-headshot.png'
import './App.css';

function App() {
  return (
   <div>
    <div className="header-bar">
        <div className="header-bar-content">
          <h1>Theodore Lafontant Kagan</h1>
          <h3>Marine Scientist and Climate Tech Enthusiast</h3>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-left">
          <div classNam="personal-statement">

          </div>
          <div className="divider">

          </div>
          <div className="topics-of-interest">
            <div className="topics-of-interest-content">
              <div className="topics-of-interest-nav-bar">
              </div>
              <div className="topics-of-interest-experience">
                <div className="topics-of-interest-exp-content">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-right">
          <img src={headshot}/>
        </div>
      </div>
    </div>
  );
}

export default App;
