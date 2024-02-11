import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

export default async function Profile() {
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress;
  //   console.log(auth().userId);
  return (
    <div className="px-4 flex items-center gap-4">
      <UserButton afterSignOutUrl="/" />
      <p>{email}</p>
    </div>
  );
}
