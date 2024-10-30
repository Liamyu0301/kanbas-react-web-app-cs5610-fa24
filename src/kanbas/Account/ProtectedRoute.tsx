import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: any;
  role?: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
  if (role && currentUser.role !== role) {
    return null;
  }
  return children;
}
