'use client'

import History from "./History";
import Publicity from "./Publicity";
export default function LateralLayout() {
      const usuario = sessionStorage.getItem('usuario');
  return (
    <>
    {usuario ? (
            <History />
        ) : (
            <Publicity />  
        )}
    </>
  )
}
