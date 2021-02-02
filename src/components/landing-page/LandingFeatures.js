/** @jsx jsx */
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { desktop } from "../../theme/media-query"
import { HeadingSection, HeadingTitle } from "../Typhography"
import Colors from "../../theme/colors"
import TelegramBot from "../../images/telegram-bot.png"
import SupportHours from "../../images/support-hours.png"
import DeviceMultiplatform from "../../images/device-multiplatform.png"
import AnalystRealTime from "../../images/analyst-realtime.png"

const tabImageDimmension = { width: "auto", height: 40 }

function Description({ children }) {
  return (
    <p
      sx={{
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: 400,
        color: Colors.grey,
      }}
    >
      {children}
    </p>
  )
}
function TabsTelegram() {
  return (
    <React.Fragment>
      <div sx={{ ...tabImageDimmension, marginBottom: "30px" }}>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={TelegramBot}
          width={tabImageDimmension.width}
          height={tabImageDimmension.height}
        />
      </div>
      <div sx={{ maxWidth: "80%" }}>
        <HeadingSection
          title={"Telegram API Bot Machine Learning"}
          color={Colors.dark}
        />
      </div>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        purus gravida magna sagittis porta ac at mi. Donec mattis eget tortor
        vitae tempor. Sed sollicitudin quis nulla pellentesque pharetra. Aliquam
        in venenatis est.
      </Description>
    </React.Fragment>
  )
}

function TabsSupport() {
  return (
    <React.Fragment>
      <div sx={{ ...tabImageDimmension, marginBottom: "30px" }}>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={SupportHours}
          width={tabImageDimmension.width}
          height={tabImageDimmension.height}
        />
      </div>
      <div sx={{ maxWidth: "80%" }}>
        <HeadingSection
          title={"Dukungan Sistem dan Keluhan Pelanggan 24 Jam"}
          color={Colors.dark}
        />
      </div>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        purus gravida magna sagittis porta ac at mi. Donec mattis eget tortor
        vitae tempor. Sed sollicitudin quis nulla pellentesque pharetra. Aliquam
        in venenatis est.
      </Description>
    </React.Fragment>
  )
}

function TabsDevices() {
  return (
    <React.Fragment>
      <div sx={{ ...tabImageDimmension, marginBottom: "30px" }}>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={DeviceMultiplatform}
          width={tabImageDimmension.width}
          height={tabImageDimmension.height}
        />
      </div>
      <div sx={{ maxWidth: "80%" }}>
        <HeadingSection
          title={"Multi Platform Access Web Service"}
          color={Colors.dark}
        />
      </div>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        purus gravida magna sagittis porta ac at mi. Donec mattis eget tortor
        vitae tempor. Sed sollicitudin quis nulla pellentesque pharetra. Aliquam
        in venenatis est.
      </Description>
    </React.Fragment>
  )
}

function TabsRealTime() {
  return (
    <React.Fragment>
      <div sx={{ ...tabImageDimmension, marginBottom: "30px" }}>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={AnalystRealTime}
          width={tabImageDimmension.width}
          height={tabImageDimmension.height}
        />
      </div>
      <div sx={{ maxWidth: "80%" }}>
        <HeadingSection
          title={"Analisa Real Time Terhubung Dengan SPBU Anda"}
          color={Colors.dark}
        />
      </div>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        purus gravida magna sagittis porta ac at mi. Donec mattis eget tortor
        vitae tempor. Sed sollicitudin quis nulla pellentesque pharetra. Aliquam
        in venenatis est.
      </Description>
    </React.Fragment>
  )
}

function LandingFeatures() {
  return (
    <div
      sx={{
        margin: "0 auto",
        [desktop]: { width: "90%" },
      }}
    >
      <div sx={{ marginBottom: "80px" }}>
        <HeadingTitle
          title={"Nikmati Fasilitas Dari Kami"}
          color={Colors.dark}
          style={{ textAlign: "center" }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [desktop]: {
            marginTop: "40px",
          },
        }}
      >
        <div sx={{ width: "22%" }}>
          <TabsTelegram />
        </div>
        <div sx={{ width: "22%" }}>
          <TabsSupport />
        </div>
        <div sx={{ width: "22%" }}>
          <TabsDevices />
        </div>
        <div sx={{ width: "22%" }}>
          <TabsRealTime />
        </div>
      </div>
    </div>
  )
}

export default LandingFeatures
