/** @jsx jsx */
import { jsx } from "theme-ui"
import { desktop } from "../theme/media-query"

export const HeadingTitleBanner = ({ title, color, children, style }) => (
  <h1
    sx={{
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "60px",
      letterSpacing: "0.5px",
      color: color,
      ...style,
    }}
  >
    {title} {children}
  </h1>
)

export const HeadingTitle = ({ title, color, children, style }) => (
  <h1
    sx={{
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 48,
      lineHeight: "60px",
      letterSpacing: "0.5px",
      color: color,
      ...style,
    }}
  >
    {title} {children}
  </h1>
)

export const HeadingSubTitle = ({ title, color }) => (
  <h2
    sx={{
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 24,
      lineHeight: "30px",
      letterSpacing: "0.2px",
      color: color,
    }}
  >
    {title}
  </h2>
)

export const HeadingSection = ({ title, color }) => (
  <h3
    sx={{
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "24px",
      letterSpacing: "0.1px",
      color: color,
    }}
  >
    {title}
  </h3>
)
