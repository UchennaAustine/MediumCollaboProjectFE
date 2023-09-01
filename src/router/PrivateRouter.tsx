import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  return (
    <div>
      {user ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigate to="/opinionPage" />
        </div>
      )}
    </div>
  );
};

export default PrivateRouter;
