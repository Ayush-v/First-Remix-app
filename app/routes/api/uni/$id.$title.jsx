import { useParams } from "@remix-run/react";

function Detail() {
  const params = useParams();

  const id = params.id;
  const title = params.title;

  return (
    <div>
      <h1>Details of id: {id}</h1>
      <br />
      <p>{title}</p>
    </div>
  );
}

export default Detail;
