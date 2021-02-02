/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import colors from "../../theme/colors"
import BackgroundFooter from "../../images/bg-footer.png"

function Navigation({ to, label }) {
  return (
    <Link
      to={to}
      sx={{
        fontFamily: "Roboto",
        fontSize: "14px",
        color: colors.dark,
        marginRight: "40px",
        textDecoration: "underline",
        ":hover": {
          color: colors.primary,
        },
      }}
    >
      {label}
    </Link>
  )
}

function Footer() {
  return (
    <div
      sx={{
        width: "100%",
        height: "216px",
        background: colors.greyBackground,
        marginTop: "67px",
        backgroundImage: `url(${BackgroundFooter})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          width: "1140px",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
          margin: "0 auto",
          paddingBottom: "32px",
        }}
      >
        <div>
          <Navigation to={"/"} label={"Kebijakan Privasi"} />
          <Navigation to={"/"} label={"Ketentuan Cloud"} />
          <Navigation to={"/"} label={"Hubungi Kami"} />
        </div>
        <span
          sx={{ fontFamily: "Roboto", fontSize: "14px", color: colors.dark }}
        >
          copyright 2020 digitalspbu.com
        </span>
      </div>
    </div>
  )
}

export default Footer
