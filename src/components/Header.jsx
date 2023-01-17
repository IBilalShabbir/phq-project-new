import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";

export default function Header() {
  const [checked, setIsChecked] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  function changeNav() {
    setIsNavOpen(window.innerWidth > 1000);
  }
  useEffect(() => {
    changeNav();
    window.addEventListener("resize", changeNav);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  const navLinks = [
    {
      label: "Home",
      to: "/",
    },

    {
      label: "Pricing",
      to: "/about",
    },
  ];
  return (
    <div className={isScrolling ? "header header__active" : "header"}>
      <div className="header__content">
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="header__content__logo"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 133.000000 176.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M7 1458 c-4 -166 -7 -446 -7 -622 l0 -321 110 110 110 110 0 402 0
403 376 0 376 0 37 32 c20 17 74 67 120 110 l84 78 -600 0 -600 0 -6 -302z"
              />
              <path
                d="M1218 1532 l-108 -111 0 -400 0 -401 -377 0 -378 0 -117 -110 -118
-110 599 0 599 0 7 223 c3 122 5 401 3 620 l-3 399 -107 -110z"
              />
              <path d="M450 1085 l0 -215 220 0 220 0 0 215 0 215 -220 0 -220 0 0 -215z" />
              <path
                d="M873 233 c-86 -16 -103 -150 -22 -184 18 -7 29 -19 29 -30 0 -12 7
-19 20 -19 13 0 20 7 20 18 0 10 12 22 30 29 40 15 66 70 54 114 -14 50 -73
82 -131 72z m71 -59 c20 -20 20 -58 0 -78 -33 -34 -104 -8 -104 37 0 49 70 76
104 41z"
              />
              <path
                d="M887 154 c-14 -15 -6 -34 14 -34 14 0 19 5 17 17 -3 18 -20 27 -31
17z"
              />
              <path
                d="M300 135 c0 -88 1 -95 20 -95 19 0 20 7 20 95 0 88 -1 95 -20 95 -19
0 -20 -7 -20 -95z"
              />
              <path
                d="M370 210 c0 -18 7 -20 54 -20 30 0 58 -5 61 -10 13 -22 -17 -40 -66
-40 -37 0 -49 -4 -49 -15 0 -24 121 -21 143 3 23 25 21 58 -3 82 -16 16 -33
20 -80 20 -53 0 -60 -2 -60 -20z"
              />
              <path
                d="M562 138 c3 -88 4 -93 26 -96 20 -3 22 1 22 37 0 40 1 41 35 41 24 0
35 5 35 15 0 10 -11 15 -35 15 -34 0 -35 1 -35 40 0 36 -2 40 -25 40 l-26 0 3
-92z"
              />
              <path
                d="M710 135 c0 -95 0 -95 25 -95 25 0 25 0 25 95 0 95 0 95 -25 95 -25
0 -25 0 -25 -95z"
              />
            </g>
          </svg>
        </button>
        <button
          className="header__content__nav__menu"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen && (
          <div className="header__content__nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                label={link.label}
                checked={checked}
                className="header__content__nav__link"
              >
                <input
                  type="radio"
                  className="header__content__nav__link__input"
                  name="header__content__nav__link"
                  checked={checked === link.label}
                  readOnly
                  to={link.to}
                  onClick={() => {
                    setIsChecked(link.label);
                    if (window.innerWidth < 1000) {
                      setIsNavOpen(false);
                    }
                  }}
                />
                <div className="header__content__nav__link__content">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
