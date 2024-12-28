import { signInAction, signOutAction } from "@/actions";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const NavAuth = () => {
  const session = useSession();

  return session.status === "authenticated" ? (
    <form
      action={async () => {
        await signOutAction();
        await signOut({
          redirect: false,
        });
      }}
    >
      <button>Logout</button>
    </form>
  ) : (
    <form
      action={async () => {
        await signInAction();
      }}
    >
      <button>Login</button>
    </form>
  );
};

export default NavAuth;
