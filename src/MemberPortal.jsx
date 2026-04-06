import React, { useState } from "react";
import MemberPass from "../components/MemberPass";
import MemberServices from "../components/MemberServices";

export default function MemberPortal() {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated
    ? <MemberServices />
    : <MemberPass onAuthenticated={() => setAuthenticated(true)} />;
}
