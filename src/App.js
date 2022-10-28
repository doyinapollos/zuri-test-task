import "./App.css";
import img1 from "./photo/image-1.jpg";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div id="profile__img" className="">
          <img className="w-24 h-24 rounded-full" src={img1} alt="" />
        </div>

        <div id="twitter" className="links-content">
          @ebiapollos
        </div>

        <div className="links-content">Zuri team</div>

        <div className="links-content">Python books</div>

        <div className="links-content">Background check for coders</div>

        <div className="links-content">Design books</div>
      </div>

      <footer className="footer">
        <div className="footer-sub-div">
          <span>Zuri.Internship</span>

          <span>HGN Internship 9 Frontend Task</span>

          <div className="flex">
            <img
              className="w-8 h-8"
              src="https://www.mappr.co/wp-content/uploads/2021/11/africa-continent-blank-black-white-edited.jpg"
              alt=""
            />

            <span>
              INGRESIVE
              <br /> FOR GOOD
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
