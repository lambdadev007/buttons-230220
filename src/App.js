import classNames from "classnames";
import "./App.css";
import Component001 from "./components/Component001";

function App() {
  return (
    <div className="App">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className={classNames("table-header")}>001</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classNames("table-cell")}>
              <Component001 />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
