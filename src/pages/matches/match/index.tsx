import { useParams } from "remix";

export const Match = () => {

  const {matchId}= useParams()

  return <div>match {matchId}</div>;
}
