import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <h1 className="mb-4">this is a api page for remix router</h1>
      <Link
        to="uni"
        className="bg-white shadow-md ring-1 px-3 py-4 rounded-xl hover:shadow-lg transition duration-200"
      >
        Go to University
      </Link>
    </div>
  );
};

export default index;
