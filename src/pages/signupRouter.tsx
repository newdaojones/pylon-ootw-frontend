import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { OotwKYC } from "./kyc";
import { OotwSignup } from "./signup";

export const OotwSignupRouter = () => {
  const { user } = useCheckout()

  return <Routes>
    <Route path="/*" element={user ? <Navigate to={"../kyc"} replace /> : <OotwSignup />} />
    <Route path="/kyc" element={!user ? <Navigate to={"../"} replace /> : <OotwKYC />} />
  </Routes>
}