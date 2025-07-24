import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";
// import { DotSpinner } from 'ldrs/react'


const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();

  // If Clerk is still loading, you might want to show a loading indicator
  if (!isLoaded) {
    return <div className="items-center justify-center">
      {/* <DotSpinner
        size="40"
        speed="0.9"
        color="#55a6e0"
      /> */}
      Authenticating...
    </div>;
  }

  // If the user is not signed in, redirect them to the login page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  // If the user is signed in, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;