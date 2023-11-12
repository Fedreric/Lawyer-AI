'use client'
import { useSession } from "next-auth/react";
import History from "./History";
import Publicity from "./Publicity";

export default function LateralLayout() {
  const {data:session} = useSession();
  return <>{session ? <History session={session}/> : <Publicity />}</>;
}
