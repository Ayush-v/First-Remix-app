import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h1>this is a api page for remix router</h1>
      <Link to="uni">University</Link>
    </div>
  );
};

export default index;
