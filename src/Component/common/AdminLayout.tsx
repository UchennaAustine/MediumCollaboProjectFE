import { Outlet } from "react-router-dom";
import AdminSider from "../../pages/AdminScreen/AdminSider";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="flex w-full">
      <AdminSider />
      {toggle ? (
        <div className="w-full flex justify-end">
          <div className="w-[calc(100%-60px)] h-full flex justify-center">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end">
          <div className="w-[calc(100%-200px)] h-full flex justify-center">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
