import { Link } from "react-router-dom";

export default function About() {
  console.log("hello.");
  return (
    <div className="buttons-home">
      <div>
        <Link to="/">Kevin</Link>
      </div>
      <div>
        <Link to="/">Projects</Link>
      </div>
      <div>
        <Link to="/">Notebook</Link>
      </div>
    </div>
  );
}
