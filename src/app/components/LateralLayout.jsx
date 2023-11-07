import History from "./History";
import Publicity from "./Publicity";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function LateralLayout() {
  const sesion = await getServerSession(authOptions);
  return <>{sesion ? <History /> : <Publicity />}</>;
}
