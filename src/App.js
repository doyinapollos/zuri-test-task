import "./App.css";
import img1 from "./photo/image-1.jpg";

function App() {
  return (
    <div className="app">
      <div className="main">
        <img
          id="profile__img"
          className="w-24 h-24 rounded-full"
          src={img1}
          alt=""
        />
        <div className="name">Ebi-erefa Apollos</div>
        <div id="twitter" className="links-content">
          @ebiapollos
        </div>
        <div id="slack" className="hidden">
          @ebiapollos
        </div>
        <a
          id="btn__zuri"
          className="links-content"
          href="https://training.zuri.team/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Zuri team{" "}
        </a>
        <a
          id="books"
          className="links-content"
          href="http://books.zuri.team/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Zuri Books{" "}
        </a>
        <a
          id="book__python"
          className="links-content"
          href="https://books.zuri.team/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Python books{" "}
        </a>
        <a
          id="pitch"
          className="links-content"
          href="https://background.zuri.team/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Background check for coder{" "}
        </a>{" "}
        <a
          id="book__design"
          className="links-content"
          href="https://books.zuri.team/design-rules/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Design books{" "}
        </a>
      </div>

      <footer className="footer">
        <div className="footer-sub-div">
          <span className="font-bold">Zuri.Internship</span>

          <span>HGN Internship 9 Frontend Task</span>

          <div className="flex">
            <div className="flex flex-col justify-center items-center w-12 h-12 bg-sky-400 rounded-full mr-2.5">
              <img
                className="w-8 h-8"
                src="https://www.mappr.co/wp-content/uploads/2021/11/africa-continent-blank-black-white-edited.jpg"
                alt=""
              />
            </div>

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
