import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import Category from "~/components/Category";
import AddUpload from "~/components/AddUpload";
import ControlsSection from "~/components/ControlsSection";
import VideoSettings from "~/components/VideoSettings";
import { NextPage } from "next";

const Controls: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto w-full mt-10 h-full md:px-24 mb-20">
        <ControlsSection />
        <Category />
        <AddUpload />
        <hr className="mt-[50px] bg-black h-[1.3px]" />
        {/* Video Player */}
        <div className="w-full">
          <svg
            width="100%"
            height="381"
            viewBox="0 0 483 381"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="1" width="483" height="380" fill="#F8F8F8" />
            <rect width="482" height="270" fill="#010001" />
            <path d="M10 239L26 247.655L10 256V239Z" fill="#747474" />
            <rect x="39" y="243" width="295" height="9" fill="#7C7C7C" />
            <rect x="39" y="242" width="14" height="12" fill="white" />
            <path
              d="M354.34 247.09C354.34 249.427 355.619 251.055 357.57 251.055C359.52 251.055 360.799 249.427 360.799 247.09C360.799 244.762 359.52 243.134 357.57 243.134C355.619 243.134 354.34 244.762 354.34 247.09ZM357.57 244.266C358.848 244.266 359.649 245.416 359.649 247.09C359.649 248.774 358.848 249.924 357.57 249.924C356.291 249.924 355.49 248.774 355.49 247.09C355.49 245.425 356.291 244.266 357.57 244.266ZM361.522 246.161C361.522 246.566 361.789 246.832 362.193 246.832C362.598 246.832 362.856 246.566 362.856 246.161C362.856 245.756 362.598 245.498 362.193 245.498C361.789 245.498 361.522 245.756 361.522 246.161ZM361.522 250.384C361.522 250.788 361.789 251.055 362.193 251.055C362.598 251.055 362.856 250.788 362.856 250.384C362.856 249.979 362.598 249.721 362.193 249.721C361.789 249.721 361.522 249.979 361.522 250.384ZM363.639 247.09C363.639 249.427 364.918 251.055 366.868 251.055C368.819 251.055 370.098 249.427 370.098 247.09C370.098 244.762 368.819 243.134 366.868 243.134C364.918 243.134 363.639 244.762 363.639 247.09ZM366.868 244.266C368.147 244.266 368.948 245.416 368.948 247.09C368.948 248.774 368.147 249.924 366.868 249.924C365.59 249.924 364.789 248.774 364.789 247.09C364.789 245.425 365.59 244.266 366.868 244.266ZM370.963 247.219H373.382C374.293 247.219 374.873 247.734 374.873 248.562C374.873 249.445 374.321 249.951 373.373 249.951C372.527 249.951 371.947 249.482 371.91 248.755H370.76C370.779 250.31 372.012 251.055 373.373 251.055C375.02 251.055 376.023 250.108 376.023 248.544C376.023 247.062 374.983 246.133 373.364 246.133H372.186L372.315 244.33H375.498V243.18H371.257L370.963 247.219Z"
              fill="white"
            />
            <path
              d="M421.877 242.965C423.393 242.965 424.536 243.776 425.076 245.168H427.819C427.195 242.197 424.952 240.368 421.877 240.368C418.262 240.368 415.831 242.903 415.831 246.726C415.831 250.569 418.262 253.104 421.877 253.104C424.972 253.104 427.195 251.276 427.819 248.284H425.076C424.557 249.676 423.393 250.507 421.877 250.507C419.82 250.507 418.428 249.011 418.428 246.726C418.428 244.461 419.82 242.965 421.877 242.965ZM435.445 242.965C436.962 242.965 438.104 243.776 438.644 245.168H441.387C440.764 242.197 438.52 240.368 435.445 240.368C431.83 240.368 429.399 242.903 429.399 246.726C429.399 250.569 431.83 253.104 435.445 253.104C438.541 253.104 440.764 251.276 441.387 248.284H438.644C438.125 249.676 436.962 250.507 435.445 250.507C433.388 250.507 431.996 249.011 431.996 246.726C431.996 244.461 433.388 242.965 435.445 242.965Z"
              fill="white"
            />
            <rect x="385" y="250" width="2" height="3" fill="white" />
            <rect x="390" y="247" width="2" height="6" fill="white" />
            <rect x="395" y="244" width="2" height="9" fill="white" />
            <rect x="400" y="242" width="2" height="11" fill="#565656" />
            <rect x="405" y="239" width="2" height="14" fill="#565656" />
            <rect x="453" y="244" width="12" height="7" fill="#C4C4C4" />
            <rect
              x="450.5"
              y="241.5"
              width="17"
              height="12"
              stroke="white"
              strokeDasharray="7 7"
            />
            <path d="M239 120L265 134L239 147.5V120Z" fill="white" />
            <path
              d="M24.5634 296L27.746 287.676H26.4436L23.9171 294.296L21.3808 287.676H20.0783L23.261 296H24.5634ZM28.1031 288.401C28.1031 288.832 28.3773 289.116 28.818 289.116C29.2391 289.116 29.5231 288.832 29.5231 288.401C29.5231 287.97 29.2391 287.696 28.818 287.696C28.3773 287.696 28.1031 287.97 28.1031 288.401ZM29.4252 296V290.124H28.2011V296H29.4252ZM35.0988 296H36.3229V287.676H35.0988V291.084C34.8442 290.477 34.0412 290.056 33.2382 290.056C31.5343 290.056 30.4277 291.251 30.4277 293.052C30.4277 294.864 31.5343 296.059 33.2382 296.059C34.051 296.059 34.854 295.638 35.0988 295.04V296ZM31.6518 293.052C31.6518 291.985 32.3568 291.28 33.3851 291.28C34.3839 291.28 35.0988 292.014 35.0988 293.062C35.1086 294.12 34.4035 294.835 33.3851 294.835C32.3568 294.835 31.6518 294.13 31.6518 293.052ZM41.4098 294.198C41.1846 294.609 40.6949 294.893 40.0878 294.893C39.2554 294.893 38.6287 294.335 38.472 293.483H42.8885C42.9179 293.336 42.9277 293.17 42.9277 293.013C42.9277 291.329 41.684 290.046 40.0682 290.046C38.4426 290.046 37.2087 291.339 37.2087 293.043C37.2087 294.805 38.4034 296.049 40.0976 296.049C41.2727 296.049 42.3107 295.295 42.7122 294.198H41.4098ZM38.472 292.592C38.6385 291.76 39.2554 291.202 40.0682 291.202C40.881 291.202 41.5077 291.77 41.6644 292.592H38.472ZM43.6888 293.052C43.6888 294.756 44.952 296.059 46.5776 296.059C48.2032 296.059 49.4567 294.756 49.4567 293.052C49.4567 291.358 48.2032 290.056 46.5776 290.056C44.952 290.056 43.6888 291.358 43.6888 293.052ZM46.5776 291.28C47.5177 291.28 48.2326 292.044 48.2326 293.052C48.2326 294.071 47.5177 294.835 46.5776 294.835C45.6375 294.835 44.9129 294.071 44.9129 293.052C44.9129 292.044 45.6375 291.28 46.5776 291.28ZM54.0166 296V287.676H52.7925V296H54.0166ZM54.9876 288.401C54.9876 288.832 55.2618 289.116 55.7024 289.116C56.1235 289.116 56.4075 288.832 56.4075 288.401C56.4075 287.97 56.1235 287.696 55.7024 287.696C55.2618 287.696 54.9876 287.97 54.9876 288.401ZM56.3096 296V290.124H55.0855V296H56.3096ZM61.3467 293.052V296H62.5708V293.052C62.5708 291.241 61.6307 290.056 60.1422 290.056C59.4175 290.056 58.7712 290.487 58.5558 291.084V290.124H57.3317V296H58.5558V293.062C58.5558 292.024 59.1335 291.28 59.9267 291.28C60.7885 291.28 61.3467 291.975 61.3467 293.052ZM64.7697 296V293.268L67.0905 296H68.6573L66.121 293.062L68.4419 290.124H67.0905L64.7697 292.857V287.676H63.5456V296H64.7697Z"
              fill="#787C87"
            />
            <path
              d="M25.7917 312.823V316.612H27.3655V312.823C27.3655 310.493 26.1568 308.97 24.243 308.97C23.3113 308.97 22.4803 309.524 22.1908 310.292V305.91H20.6169V316.612H22.1908V312.835C22.1908 311.501 22.9462 310.544 23.966 310.544C25.074 310.544 25.7917 311.438 25.7917 312.823ZM29.9212 307.459L29.5435 309.058H28.4229V310.544H29.5435V314.019C29.5435 315.869 30.2989 316.612 32.0994 316.612H32.7541V315.051H32.2505C31.4698 315.051 31.1173 314.711 31.1173 313.931V310.544H32.7541V309.058H31.1173V307.459H29.9212ZM34.8394 307.459L34.4617 309.058H33.3411V310.544H34.4617V314.019C34.4617 315.869 35.2171 316.612 37.0176 316.612H37.6723V315.051H37.1687C36.388 315.051 36.0355 314.711 36.0355 313.931V310.544H37.6723V309.058H36.0355V307.459H34.8394ZM40.3475 309.058H38.7737V319.76H40.3475V315.378C40.6749 316.159 41.7073 316.7 42.7523 316.7C44.9431 316.7 46.3532 315.164 46.3532 312.848C46.3532 310.518 44.9305 308.982 42.7523 308.982C41.6947 308.982 40.6749 309.524 40.3475 310.292V309.058ZM44.7794 312.848C44.7794 314.22 43.8855 315.127 42.5635 315.127C41.2792 315.127 40.3475 314.182 40.3475 312.835C40.3349 311.475 41.2415 310.556 42.5509 310.556C43.8729 310.556 44.7794 311.463 44.7794 312.848ZM47.1443 314.145C47.1695 315.744 48.6174 316.688 50.0401 316.688C51.6643 316.688 52.8604 315.769 52.8604 314.497C52.8604 312.722 51.4125 312.369 50.2793 312.08C49.7253 311.941 48.9447 311.752 48.9573 311.123C48.9573 310.632 49.4358 310.304 50.0527 310.304C50.72 310.304 51.2362 310.745 51.2992 311.312H52.7093C52.6212 309.902 51.5762 308.97 50.0653 308.97C48.5544 308.97 47.3835 309.776 47.3835 311.135C47.3835 312.621 48.5922 313.011 49.7253 313.339C50.7326 313.616 51.2866 313.88 51.2866 314.51C51.2866 315.038 50.8081 315.353 50.0905 315.353C49.3099 315.341 48.6677 314.812 48.6426 314.145H47.1443ZM53.7629 309.99C53.7629 310.544 54.128 310.909 54.682 310.909C55.236 310.909 55.5885 310.544 55.5885 309.99C55.5885 309.436 55.236 309.083 54.682 309.083C54.128 309.083 53.7629 309.436 53.7629 309.99ZM53.7629 315.769C53.7629 316.323 54.128 316.688 54.682 316.688C55.236 316.688 55.5885 316.323 55.5885 315.769C55.5885 315.215 55.236 314.862 54.682 314.862C54.128 314.862 53.7629 315.215 53.7629 315.769ZM57.9575 316.612L61.911 305.91H60.3371L56.3837 316.612H57.9575ZM63.8593 316.612L67.8128 305.91H66.239L62.2855 316.612H63.8593ZM74.6085 316.612H76.1824V305.91H74.6085V310.292C74.2812 309.511 73.2488 308.97 72.2163 308.97C70.0256 308.97 68.6028 310.506 68.6028 312.823C68.6028 315.152 70.0256 316.688 72.2163 316.688C73.2614 316.688 74.2938 316.146 74.6085 315.378V316.612ZM70.1767 312.823C70.1767 311.45 71.0832 310.544 72.4052 310.544C73.6894 310.544 74.6085 311.488 74.6085 312.835C74.6211 314.195 73.7146 315.114 72.4052 315.114C71.0832 315.114 70.1767 314.208 70.1767 312.823ZM77.2458 312.823C77.2458 315.013 78.87 316.688 80.96 316.688C83.0501 316.688 84.6617 315.013 84.6617 312.823C84.6617 310.644 83.0501 308.97 80.96 308.97C78.87 308.97 77.2458 310.644 77.2458 312.823ZM80.96 310.544C82.1687 310.544 83.0878 311.526 83.0878 312.823C83.0878 314.132 82.1687 315.114 80.96 315.114C79.7513 315.114 78.8196 314.132 78.8196 312.823C78.8196 311.526 79.7513 310.544 80.96 310.544ZM85.5606 312.823C85.5606 315.013 87.1848 316.688 89.2748 316.688C91.3649 316.688 92.9765 315.013 92.9765 312.823C92.9765 310.644 91.3649 308.97 89.2748 308.97C87.1848 308.97 85.5606 310.644 85.5606 312.823ZM89.2748 310.544C90.4835 310.544 91.4027 311.526 91.4027 312.823C91.4027 314.132 90.4835 315.114 89.2748 315.114C88.0662 315.114 87.1344 314.132 87.1344 312.823C87.1344 311.526 88.0662 310.544 89.2748 310.544ZM93.8755 312.823C93.8755 315.013 95.4996 316.688 97.5897 316.688C99.6797 316.688 101.291 315.013 101.291 312.823C101.291 310.644 99.6797 308.97 97.5897 308.97C95.4996 308.97 93.8755 310.644 93.8755 312.823ZM97.5897 310.544C98.7984 310.544 99.7175 311.526 99.7175 312.823C99.7175 314.132 98.7984 315.114 97.5897 315.114C96.381 315.114 95.4493 314.132 95.4493 312.823C95.4493 311.526 96.381 310.544 97.5897 310.544ZM101.721 315.769C101.721 316.323 102.086 316.688 102.64 316.688C103.194 316.688 103.546 316.323 103.546 315.769C103.546 315.215 103.194 314.862 102.64 314.862C102.086 314.862 101.721 315.215 101.721 315.769ZM104.622 306.842C104.622 307.396 104.974 307.761 105.541 307.761C106.082 307.761 106.447 307.396 106.447 306.842C106.447 306.288 106.082 305.935 105.541 305.935C104.974 305.935 104.622 306.288 104.622 306.842ZM106.321 316.612V309.058H104.747V316.612H106.321ZM107.447 312.823C107.447 315.013 109.071 316.688 111.161 316.688C113.251 316.688 114.862 315.013 114.862 312.823C114.862 310.644 113.251 308.97 111.161 308.97C109.071 308.97 107.447 310.644 107.447 312.823ZM111.161 310.544C112.37 310.544 113.289 311.526 113.289 312.823C113.289 314.132 112.37 315.114 111.161 315.114C109.952 315.114 109.02 314.132 109.02 312.823C109.02 311.526 109.952 310.544 111.161 310.544ZM117.083 316.612L121.037 305.91H119.463L115.51 316.612H117.083ZM127.077 312.823V316.612H128.651V312.823C128.651 311.501 129.394 310.544 130.414 310.544C131.522 310.544 132.239 311.438 132.239 312.823V316.612H133.813V312.823C133.813 310.493 132.529 308.97 130.477 308.97C129.432 308.97 128.601 309.524 128.11 310.481C127.581 309.524 126.687 308.97 125.529 308.97C124.597 308.97 123.766 309.524 123.489 310.292V309.058H121.915V316.612H123.489V312.835C123.489 311.501 124.232 310.544 125.252 310.544C126.36 310.544 127.077 311.438 127.077 312.823ZM141.035 316.612H142.609V305.91H141.035V310.292C140.708 309.511 139.675 308.97 138.643 308.97C136.452 308.97 135.029 310.506 135.029 312.823C135.029 315.152 136.452 316.688 138.643 316.688C139.688 316.688 140.72 316.146 141.035 315.378V316.612ZM136.603 312.823C136.603 311.45 137.51 310.544 138.832 310.544C140.116 310.544 141.035 311.488 141.035 312.835C141.047 314.195 140.141 315.114 138.832 315.114C137.51 315.114 136.603 314.208 136.603 312.823ZM143.773 316.612H148.532V315.051H143.773V316.612ZM151.027 316.612V311.551L155.332 316.612H157.347L152.789 311.261L156.944 305.91H155.093L151.027 311.085V305.91H149.453V316.612H151.027ZM164.875 316.612V305.91H163.301V309.058H160.557V308.504C160.557 307.723 160.909 307.371 161.69 307.371H162.193V305.822H161.539C159.738 305.822 158.983 306.552 158.983 308.416V309.058H157.875V310.544H158.983V316.612H160.557V310.544H163.301V316.612H164.875ZM165.988 312.823C165.988 315.013 167.613 316.688 169.703 316.688C171.793 316.688 173.404 315.013 173.404 312.823C173.404 310.644 171.793 308.97 169.703 308.97C167.613 308.97 165.988 310.644 165.988 312.823ZM169.703 310.544C170.911 310.544 171.83 311.526 171.83 312.823C171.83 314.132 170.911 315.114 169.703 315.114C168.494 315.114 167.562 314.132 167.562 312.823C167.562 311.526 168.494 310.544 169.703 310.544ZM179.78 314.296C179.491 314.824 178.861 315.19 178.08 315.19C177.01 315.19 176.204 314.472 176.003 313.377H181.681C181.719 313.188 181.732 312.974 181.732 312.772C181.732 310.607 180.133 308.957 178.055 308.957C175.965 308.957 174.379 310.619 174.379 312.81C174.379 315.076 175.915 316.675 178.093 316.675C179.604 316.675 180.939 315.706 181.455 314.296H179.78ZM176.003 312.231C176.217 311.161 177.01 310.443 178.055 310.443C179.1 310.443 179.906 311.173 180.108 312.231H176.003Z"
              fill="#4793BE"
            />
            <path d="M20 318.186H182.311V318.816H20V318.186Z" fill="#4793BE" />
            <a href="https://dooo.io/md_Kfloe">
              <rect
                fill="black"
                fillOpacity="0"
                y="0.242304"
                width="162.311"
                height="19.5154"
              />
            </a>
            <path
              d="M21.6745 342.34V338.785H25.3174V337.561H21.6745V335.24H25.4056V334.016H20.4505V342.34H21.6745ZM26.2025 334.741C26.2025 335.172 26.4767 335.456 26.9173 335.456C27.3384 335.456 27.6224 335.172 27.6224 334.741C27.6224 334.31 27.3384 334.036 26.9173 334.036C26.4767 334.036 26.2025 334.31 26.2025 334.741ZM27.5245 342.34V336.464H26.3004V342.34H27.5245ZM29.8098 342.34V334.016H28.5858V342.34H29.8098ZM34.9427 340.538C34.7175 340.949 34.2279 341.233 33.6207 341.233C32.7883 341.233 32.1616 340.675 32.0049 339.823H36.4214C36.4508 339.676 36.4606 339.51 36.4606 339.353C36.4606 337.669 35.2169 336.386 33.6011 336.386C31.9755 336.386 30.7417 337.679 30.7417 339.382C30.7417 341.145 31.9364 342.389 33.6305 342.389C34.8056 342.389 35.8436 341.635 36.2451 340.538H34.9427ZM32.0049 338.932C32.1714 338.1 32.7883 337.541 33.6011 337.541C34.4139 337.541 35.0406 338.109 35.1973 338.932H32.0049ZM41.4195 339.392V342.34H42.6435V339.392C42.6435 337.581 41.7034 336.396 40.215 336.396C39.4903 336.396 38.844 336.827 38.6285 337.424V336.464H37.4045V342.34H38.6285V339.402C38.6285 338.364 39.2063 337.62 39.9995 337.62C40.8613 337.62 41.4195 338.315 41.4195 339.392ZM48.1915 342.34H49.4156V336.464H48.1915V337.424C47.9369 336.817 47.1339 336.396 46.3211 336.396C44.6172 336.396 43.5204 337.59 43.5204 339.392C43.5204 341.204 44.627 342.399 46.3211 342.399C47.1437 342.399 47.9369 341.978 48.1915 341.38V342.34ZM44.7445 339.392C44.7445 338.325 45.4398 337.62 46.468 337.62C47.4669 337.62 48.1915 338.354 48.1915 339.402C48.2013 340.46 47.4962 341.175 46.4778 341.175C45.4496 341.175 44.7445 340.469 44.7445 339.392ZM54.5699 339.392V342.34H55.794V339.392C55.794 338.364 56.3718 337.62 57.165 337.62C58.0268 337.62 58.5849 338.315 58.5849 339.392V342.34H59.809V339.392C59.809 337.581 58.8102 336.396 57.214 336.396C56.4012 336.396 55.7549 336.827 55.3729 337.571C54.9616 336.827 54.2664 336.396 53.3654 336.396C52.6408 336.396 51.9945 336.827 51.779 337.424V336.464H50.5549V342.34H51.779V339.402C51.779 338.364 52.3568 337.62 53.15 337.62C54.0118 337.62 54.5699 338.315 54.5699 339.392ZM64.8873 340.538C64.6621 340.949 64.1725 341.233 63.5653 341.233C62.733 341.233 62.1062 340.675 61.9495 339.823H66.366C66.3954 339.676 66.4052 339.51 66.4052 339.353C66.4052 337.669 65.1615 336.386 63.5457 336.386C61.9202 336.386 60.6863 337.679 60.6863 339.382C60.6863 341.145 61.881 342.389 63.5751 342.389C64.7502 342.389 65.7883 341.635 66.1898 340.538H64.8873ZM61.9495 338.932C62.116 338.1 62.733 337.541 63.5457 337.541C64.3585 337.541 64.9853 338.109 65.142 338.932H61.9495Z"
              fill="#787C87"
            />
            <path
              d="M20.6169 356.727C20.6169 360.278 22.1278 362.154 24.9733 362.154C27.8062 362.154 29.317 360.265 29.317 356.727V351.376H27.7432V356.727C27.7432 359.409 26.887 360.605 24.9733 360.605C23.0469 360.605 22.1908 359.409 22.1908 356.727V351.376H20.6169V356.727ZM32.2325 354.524H30.6587V365.226H32.2325V360.844C32.5599 361.625 33.5923 362.166 34.6373 362.166C36.8281 362.166 38.2382 360.63 38.2382 358.314C38.2382 355.984 36.8155 354.448 34.6373 354.448C33.5797 354.448 32.5599 354.99 32.2325 355.758V354.524ZM36.6644 358.314C36.6644 359.686 35.7705 360.592 34.4484 360.592C33.1642 360.592 32.2325 359.648 32.2325 358.301C32.2199 356.941 33.1264 356.022 34.4359 356.022C35.7579 356.022 36.6644 356.929 36.6644 358.314ZM45.2992 362.078H46.873V351.376H45.2992V355.758C44.9718 354.977 43.9394 354.436 42.907 354.436C40.7162 354.436 39.2935 355.972 39.2935 358.288C39.2935 360.618 40.7162 362.154 42.907 362.154C43.952 362.154 44.9844 361.612 45.2992 360.844V362.078ZM40.8673 358.288C40.8673 356.916 41.7738 356.009 43.0958 356.009C44.3801 356.009 45.2992 356.954 45.2992 358.301C45.3118 359.661 44.4053 360.58 43.0958 360.58C41.7738 360.58 40.8673 359.673 40.8673 358.288ZM54.0177 362.078H55.5915V354.524H54.0177V355.758C53.6903 354.977 52.6579 354.436 51.6129 354.436C49.4221 354.436 48.012 355.972 48.012 358.288C48.012 360.618 49.4347 362.154 51.6129 362.154C52.6705 362.154 53.6903 361.612 54.0177 360.844V362.078ZM49.5858 358.288C49.5858 356.916 50.4797 356.009 51.8018 356.009C53.086 356.009 54.0177 356.954 54.0177 358.301C54.0303 359.661 53.1238 360.58 51.8143 360.58C50.4923 360.58 49.5858 359.673 49.5858 358.288ZM58.2777 352.925L57.8999 354.524H56.7794V356.009H57.8999V359.484C57.8999 361.335 58.6554 362.078 60.4558 362.078H61.1105V360.517H60.6069C59.8263 360.517 59.4738 360.177 59.4738 359.396V356.009H61.1105V354.524H59.4738V352.925H58.2777ZM67.2458 359.761C66.9562 360.29 66.3267 360.655 65.546 360.655C64.4758 360.655 63.67 359.938 63.4686 358.842H69.1469C69.1847 358.653 69.1973 358.439 69.1973 358.238C69.1973 356.072 67.5983 354.423 65.5209 354.423C63.4308 354.423 61.8444 356.085 61.8444 358.276C61.8444 360.542 63.3805 362.141 65.5586 362.141C67.0695 362.141 68.4041 361.172 68.9203 359.761H67.2458ZM63.4686 357.697C63.6826 356.626 64.4758 355.909 65.5209 355.909C66.5659 355.909 67.3717 356.639 67.5731 357.697H63.4686ZM69.7526 361.235C69.7526 361.789 70.1177 362.154 70.6717 362.154C71.2257 362.154 71.5782 361.789 71.5782 361.235C71.5782 360.681 71.2257 360.328 70.6717 360.328C70.1177 360.328 69.7526 360.681 69.7526 361.235ZM77.9414 358.288V362.078H79.5152V358.288C79.5152 356.966 80.258 356.009 81.2779 356.009C82.3858 356.009 83.1035 356.903 83.1035 358.288V362.078H84.6773V358.288C84.6773 355.959 83.3931 354.436 81.3408 354.436C80.2958 354.436 79.4648 354.99 78.9738 355.947C78.445 354.99 77.5511 354.436 76.3927 354.436C75.461 354.436 74.63 354.99 74.353 355.758V354.524H72.7792V362.078H74.353V358.301C74.353 356.966 75.0959 356.009 76.1157 356.009C77.2237 356.009 77.9414 356.903 77.9414 358.288ZM87.4546 354.524H85.8808V365.226H87.4546V360.844C87.782 361.625 88.8144 362.166 89.8594 362.166C92.0502 362.166 93.4603 360.63 93.4603 358.314C93.4603 355.984 92.0376 354.448 89.8594 354.448C88.8018 354.448 87.782 354.99 87.4546 355.758V354.524ZM91.8865 358.314C91.8865 359.686 90.9926 360.592 89.6705 360.592C88.3863 360.592 87.4546 359.648 87.4546 358.301C87.442 356.941 88.3485 356.022 89.658 356.022C90.98 356.022 91.8865 356.929 91.8865 358.314ZM94.3771 359.85H99.6903V362.078H101.264V359.85H102.523V358.276H101.264V351.376H99.6903L94.3771 358.276V359.85ZM96.3412 358.276L99.6903 353.856V358.276H96.3412Z"
              fill="black"
            />
            <rect
              x="458.7"
              y="287.7"
              width="11.6"
              height="13.6"
              rx="1.3"
              stroke="#656565"
              strokeWidth="1.4"
            />
            <path
              d="M455 297V285C455 283.895 455.895 283 457 283H467"
              stroke="#656565"
              strokeWidth="1.4"
            />
          </svg>
        </div>
        <VideoSettings />
      </div>
    </Layout>
  );
};

export default Controls;
