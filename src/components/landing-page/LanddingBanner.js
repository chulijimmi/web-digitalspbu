/** @jsx jsx */
import { LazyLoadImage } from "react-lazy-load-image-component"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PreviewDevice from "../../images/preview-device.png"
import { desktop } from "../../theme/media-query"
import Colors from "../../theme/colors"
import {
  HeadingSubTitle,
  HeadingTitle,
  HeadingTitleBanner,
} from "../Typhography"
import { IoIosArrowForward } from "react-icons/io"
import colors from "../../theme/colors"
import { transition } from "../../theme/mixin"

const previewDimmension = { width: 624, height: 444 }
function Section() {
  return (
    <div sx={{ marginTop: 60 }}>
      <HeadingTitleBanner title={""} color={Colors.dark}>
        <span>
          Wujudkan Digitalisasi Usaha{" "}
          <span sx={{ color: Colors.primary }}>SPBU</span> Anda
        </span>
      </HeadingTitleBanner>
      <div sx={{ marginTop: "40px" }}>
        <HeadingSubTitle
          title={
            "Konsultasikan dengan tim kami sekarang untuk mendukung sistem pelaporan bisnis spbu anda."
          }
          color={Colors.grey}
        />
      </div>
      <div sx={{ marginTop: "80px" }}>
        <Link
          to={"/"}
          sx={{
            paddingX: 22,
            paddingY: 18,
            background: Colors.secondary,
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 16,
            color: Colors.white,
            textDecoration: "none",
            borderRadius: 30,
            display: "table",
            ":hover": {
              background: Colors.primary,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            },
            animationName: "backgroundButton",
            ...transition("background-color", "300ms"),
            ...transition("box-shadow", "300ms"),
          }}
        >
          <span
            sx={{
              display: "table-cell",
              verticalAlign: "middle",
            }}
          >
            Request Demo
          </span>
          <IoIosArrowForward
            size={20}
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
              marginLeft: "5px",
            }}
          />
        </Link>
      </div>
    </div>
  )
}

function PreviewImages() {
  return (
    <div sx={{ ...previewDimmension }}>
      <LazyLoadImage
        alt={"Spbu"}
        effect="blur"
        src={PreviewDevice}
        width={"100%"}
        height={"100%"}
        sx={{
          ...previewDimmension,
          objectFit: "cover",
          objectPosition: "100% 100%",
        }}
      />
    </div>
  )
}

function LandingBanner() {
  return (
    <div sx={{ width: "100%", margin: "0 auto", minHeight: "calc(100vh)" }}>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          [desktop]: {
            width: "90%",
            marginBottom: "0px",
          },
        }}
      >
        <div sx={{ width: "50%" }}>
          <Section />
        </div>
        <div sx={{ width: "50%" }}>
          <PreviewImages />
        </div>
      </div>

      <Link
        to={"/"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: colors.white,
          textDecoration: "none",
          padding: "12px 10px",
          borderRadius: "6px",
          animationName: "arrowButton",
          background: `rgb(237,20,76)`,
          background: `linear-gradient(90deg, rgba(237,20,76,1) 0%, rgba(82,9,121,1) 62%, rgba(1,15,89,1) 100%)`,
          ":hover": {
            width: "640px",
          },
          ...transition("width", "300ms"),
          [desktop]: {
            width: "620px",
            margin: "0 auto",
            marginTop: "100px",
          },
        }}
      >
        <span
          sx={{
            color: colors.white,
            fontFamily: "Roboto",
            fontSize: "16px",
            textAlign: "left",
            [desktop]: {
              width: "auto",
            },
          }}
        >
          Promo harga layanan COVID 19 untuk{" "}
          <span sx={{ fontStyle: "italic", textDecoration: "underline" }}>
            pengguna digitalspbu baru
          </span>{" "}
          Daftar Sekarang
        </span>
        <div sx={{ marginBottom: "2px" }}>
          <IoIosArrowForward
            size={20}
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default LandingBanner
