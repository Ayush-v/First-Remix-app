import { Link } from "@remix-run/react";

const items = [
  { id: 1, title: "helloworld1" },
  { id: 2, title: "helloworld2" },
  { id: 3, title: "helloworld3" },
  { id: 4, title: "helloworld4" },
  { id: 5, title: "helloworld5" },
  { id: 6, title: "helloworld6" },
];
function index() {
  return (
    <div>
      <h1>University</h1>
      {items.map((index) => (
        <Link key={index.id} to={`${index.id}/${index.title}`}>
          <br />
          <p>{index.title}</p>
          <br />
        </Link>
      ))}
    </div>
  );
}

export default index;
