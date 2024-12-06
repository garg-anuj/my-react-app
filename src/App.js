// import { Player } from "@lottiefiles/react-lottie-player";
// import animationData from "./assets/newLottie1.json";
import { CkEditor } from "./components/CkEditor/CkEditor";
import Fetcher from "./components/Fetcher/Fetcher";
import NewInputs from "./components/NewInputs";

function App() {
  return (
    <div>
      <h1>Lottie Animation Example</h1>
      {/* <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "300px", width: "300px" }}
    /> */}

      <NewInputs />

      {/* <Fetcher /> */}

      <CkEditor />
    </div>
  );
}

export default App;
