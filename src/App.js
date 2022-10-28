import "./App.css";
import img1 from "./photo/image-1.jpg";

function App() {
  return (
    <div className="">
      <div id="profile__img" className="">
        <img className="w-24 h-24" src={img1} alt="" />
      </div>

      <div id="twitter" className="">
        @ebiapollos
      </div>

      <div className="">Zuri team</div>

      <div className="">Python books</div>

      <div className="">Background check for coders</div>

      <div className="">Design books</div>

      <footer className="">
        <div className="">
          <span>Zuri.Internship</span>

          <span>HGN Internship 9 Frontend Task</span>

          <div className="">
            <img src="" alt="" />

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
