import "./App.css";
// import UnnecessaryRerenders from "./Memo/unnecessary-rerenders";
import ExpensiveCal from "./Web Worker/ExpensiveCal";
// import CodeSplitting from "./webpack magic comments/codeSpletting";

function App() {
  return (
    <div className="App">
      {/* <CodeSplitting /> */}
      <ExpensiveCal />
      {/* <UnnecessaryRerenders /> */}
    </div>
  );
}

export default App;
