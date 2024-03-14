import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { useCheckout } from "../context/checkout";
import { OotwInformation } from "./info";
import { OotwPayment } from "./payment";
import { OotwTransaction } from "./transaction";

export const OotwRequest = () => {
  const {
    setRequestId,
    checkout,
  } = useCheckout()
  const navigate = useNavigate()
  const { checkoutRequestId } = useParams();
  const location = useLocation();
  useEffect(() => {
    setRequestId(checkoutRequestId)
  }, [checkoutRequestId, setRequestId])

  useEffect(() => {
    if (checkout && !location?.pathname?.includes('/transaction')) {
      setTimeout(() => {
        navigate('./transaction')
      }, 500)
    }
  }, [checkout, navigate, location])

  return <Routes>
    <Route path="/info" element={<OotwInformation />} />
    <Route path="/payment" element={<OotwPayment />} />
    <Route path="/transaction" element={<OotwTransaction />} />
    <Route
      path="/*"
      element={<Navigate to={"./info"} replace />}
    />
  </Routes>
}