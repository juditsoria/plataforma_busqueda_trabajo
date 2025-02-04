import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";

const AdminLayout = () => {
  const { user } = useUserStore(); 

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div>
      <h1>Bienvenido al panel de administración</h1>
    </div>
  );
};

export default AdminLayout;