import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Outlet } from 'react-router';
import SignInForm from '../_auth/forms/SignInForm';
import Header from '../lib/components/shared/Header';


const RootLayout = () => {
  return (
    <>
      <Header />
      <SignedIn>
        <Outlet /> {/* Renders the child route if signed in */}
      </SignedIn>
      <SignedOut>
        <SignInForm />
      </SignedOut>
    </>
  )
}

export default RootLayout