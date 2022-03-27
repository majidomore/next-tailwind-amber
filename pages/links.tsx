import React from "react";
import { NextPage } from "next";
import Link from "next/link";

type Props = {
  name?: string;
};

const Links: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>1. Home</a>
          </Link>
        </li>
        <li>
          <Link href="/accountsettings">
            <a>2. Account Settings</a>
          </Link>
        </li>
        <li>
          <Link href="/addons">
            <a>3. Addons</a>
          </Link>
        </li>
        <li>
          <Link href="/checkout">
            <a>4. Checkout</a>
          </Link>
        </li>
        <li>
          <Link href="/controls">
            <a>5. Controls</a>
          </Link>
        </li>
        <li>
          <Link href="/managecta">
            <a>6. Manage CTA</a>
          </Link>
        </li>
        <li>
          <Link href="/managecta2">
            <a>7. Manage CTA 2</a>
          </Link>
        </li>
        <li>
          <Link href="/manageplaylist">
            <a>8. Manage Play List</a>
          </Link>
        </li>
        <li>
          <Link href="/reedemcode">
            <a>9. Redeem Code</a>
          </Link>
        </li>
        <li>
          <Link href="/signupdark">
            <a>10. Signup Dark</a>
          </Link>
        </li>
        <li>
          <Link href="/universalplayer">
            <a>11. Universal Player</a>
          </Link>
        </li>
        <li>
          <Link href="/Upload">
            <a>12. Upload</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
