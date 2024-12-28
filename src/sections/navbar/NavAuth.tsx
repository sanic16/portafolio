import { signInAction, signOutAction } from "@/actions";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";

type NavAuthProps = {
  className?: string;
};

const NavAuth: FC<NavAuthProps> = ({ className }) => {
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
      <button className={className}>Logout</button>
    </form>
  ) : (
    <form
      action={async () => {
        await signInAction();
      }}
    >
      <button className={className}>Login</button>
    </form>
  );
};

export default NavAuth;
