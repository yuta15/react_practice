import Result from "./components/_header";
import Counter from "./components/couter";
import Greeting from "./components/greeting";
import Welcome from "./components/welcome"

export default function App() {
  return (
    <div>
        <Result/>
        <span>--------------------------------------------------------------</span>
        <Counter/>
        <span>--------------------------------------------------------------</span>
        <Greeting/>
        <span>--------------------------------------------------------------</span>
        <Welcome></Welcome>

    </div>
  );
}
