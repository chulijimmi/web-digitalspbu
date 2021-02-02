/** @jsx jsx */
import { LazyLoadImage } from "react-lazy-load-image-component"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { desktop } from "../../theme/media-query"
import Colors from "../../theme/colors"

const WIDTH_LOGO = 136
const HEIGHT_LOGO = 24
const logoDimmension = { width: WIDTH_LOGO, height: HEIGHT_LOGO }

function Navigation({ label, to }) {
  return (
    <Link
      sx={{
        fontFamily: "Roboto",
        fontSize: 16,
        color: Colors.grey,
        textDecoration: "none",
        ":hover": {
          color: Colors.primary,
        },
        [desktop]: {
          marginLeft: 83,
        },
      }}
      to={to}
    >
      {label}
    </Link>
  )
}

function MainMenu() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 auto",
        [desktop]: {
          width: "90%",
          marginTop: 46,
          maxHeight: HEIGHT_LOGO,
        },
      }}
    >
      <div sx={{ width: "auto", height: "auto" }}>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={Logo}
          width={logoDimmension.width}
          height={logoDimmension.height}
          sx={{
            ...logoDimmension,
            objectFit: "cover",
            objectPosition: "100% 100%",
          }}
        />
      </div>
      <div
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Navigation label={"Produk Cloud"} to="/" />
        <Navigation label={"Biaya Layanan"} to="/" />
        <Navigation label={"Partner Kami"} to="/" />
        <Navigation label={"Hubungi Kami"} to="/" />
        <Navigation label={"Blog"} to="/" />
      </div>
    </div>
  )
}

export default MainMenu
