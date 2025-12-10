import { useParams } from "react-router-dom";

export default function Cupon() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Cupón #{id}</h1>
    </div>
  );
}
