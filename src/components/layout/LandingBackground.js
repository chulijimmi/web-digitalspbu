/** @jsx jsx */
import { jsx } from "theme-ui"
import BgImage from "../../images/landing-background.png"

function LandingBackground({ children }) {
  return (
    <div
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
      }}
    >
      {children}
    </div>
  )
}

export default LandingBackground
