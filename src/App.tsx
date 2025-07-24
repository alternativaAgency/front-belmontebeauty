import { Route, Routes } from "react-router";
import ProtectedRoute from "./lib/components/services/ProtectedRoute";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import SignInForm from "./_auth/forms/SignInForm";
import NoAuth from "./_auth/forms/NoAuth";

const App = () => {

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/no-auth" element={<NoAuth />} />
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;