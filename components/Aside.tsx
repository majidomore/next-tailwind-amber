import Image from "next/image";
import React from "react";

type Props = {
  name?: string;
};

const Aside = ({ name }: Props) => {
  return (
    <div className="min-h-screen border-r-2 border-black w-[35px] fixed left-1 md:flex hidden flex-col items-center">
      {/* Aside Logo */}
      <div className="mt-3">
        <svg
          width="18"
          height="35"
          viewBox="0 0 18 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0C2.79813 -1.00455e-07 5.07376 0.452652 7.19696 1.33211C9.32016 2.21156 11.2493 3.50061 12.8744 5.12563C14.4994 6.75066 15.7884 8.67984 16.6679 10.803C17.5474 12.9262 18 15.2019 18 17.5C18 19.7981 17.5474 22.0738 16.6679 24.197C15.7884 26.3202 14.4994 28.2493 12.8744 29.8744C11.2493 31.4994 9.32016 32.7884 7.19696 33.6679C5.07376 34.5473 2.79813 35 0.5 35L0.500001 17.5L0.5 0Z"
            fill="#1E1E1F"
          />
        </svg>
      </div>
      <nav className="mt-60">
        <ul className="space-y-5">
          <li>
            <a href="#">
              <Image
                width={20}
                height={20}
                src="/img/upload.svg"
                alt="upload-icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width={20}
                height={20}
                src="/img/manage.svg"
                alt="manage-icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width={20}
                height={20}
                src="/img/settings.svg"
                alt="settings.svg"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
