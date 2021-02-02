/** @jsx jsx */
import { jsx } from "theme-ui"
import BgImage from "../../images/line-colorfull.png"
function LineColorfull() {
  return (
    <div
      sx={{
        backgroundImage: `url(${BgImage})`,
        width: "100%",
        height: 9,
      }}
    ></div>
  )
}

export default LineColorfull
