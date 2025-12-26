
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, user, children }: any) {
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}
