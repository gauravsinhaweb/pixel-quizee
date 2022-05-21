import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components/index-component";
import { Hero, Quiz } from "../pages/pages-index";
import { ScrollToTop } from "../services/ScrollToTop";

function RoutePage() {
  // const { loading, setLoading } = useState();

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        {/* {loading ? ( */}
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route
            exact
            path="/category/:categoryNumber/question/:questionNumber"
            element={<Quiz />}
          />
        </Routes>
        {/* ) : ( */}
        {/* <div className="flex items-center h-screen capitalize justify-center text-3xl font-semibold">
          <div id="spinnerBody" className="bg-zinc-800">
            <div className="sk-cube-grid ">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          </div>
        </div> */}
        {/* )} */}
        <ToastContainer
          toastStyle={{ color: "#fafafa", backgroundColor: "#e11d48" }}
        />
      </Router>
    </>
  );
}

export default RoutePage;
