/** @jsx jsx */
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { desktop } from "../../theme/media-query"
import { HeadingSection, HeadingTitle } from "../Typhography"
import Colors from "../../theme/colors"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import UserProfile from "../../images/user-profile.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import colors from "../../theme/colors"

function ClientTestimonials() {
  const [slideNumber, setSlideNumber] = React.useState(0)
  const onChangeSlider = React.useCallback(value => {
    setSlideNumber(value)
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const CarouselItem1 = () => {
    return (
      <div
        sx={{
          justifyContent: "center",
          display: "table",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "40px",
        }}
      >
        <div
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "200px",
            overflow: "hidden",
            margin: "0 auto",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <LazyLoadImage
            alt={"Spbu"}
            effect="blur"
            src={UserProfile}
            width={"100px"}
            height={"100px"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "0 50%",
            }}
          />
        </div>
        <p
          sx={{
            color: Colors.dark,
            fontFamily: "Roboto",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          ZULKIFLI BAA
        </p>
        <p
          sx={{
            color: Colors.primary,
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "14px",
          }}
        >
          PT. Taruna Jaya Abadi
        </p>
        <p
          sx={{
            color: colors.grey,
            fontFamily: "Roboto",
            fontSize: "14px",
            margin: "0 auto",
            [desktop]: {
              width: "70%",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
        <br></br>
      </div>
    )
  }

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest
    const carouselItems = [CarouselItem1, CarouselItem1, CarouselItem1]
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <span
        sx={{
          width: "16px",
          height: "16px",
          borderRadius: "16px",
          marginX: "15px",
          marginTop: "15px",
          background: active ? Colors.primary : Colors.greyLight,
          ":hover": {
            background: active ? Colors.primary : Colors.primary,
          },
        }}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </span>
    )
  }

  return (
    <div
      sx={{
        margin: "0 auto",
        marginTop: "80px",
        [desktop]: { width: "90%" },
      }}
    >
      <div sx={{}}>
        <HeadingTitle
          title={"Cerita Sukses Pengguna Digital SPBU"}
          color={Colors.dark}
          style={{ textAlign: "center" }}
        />
      </div>
      <div
        sx={{
          [desktop]: {
            width: "90%",
            height: "auto",
            margin: "0 auto",
            marginTop: "40px",
          },
        }}
      >
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true}
          customDot={<CustomDot />}
        >
          <CarouselItem1 />
          <CarouselItem1 />
          <CarouselItem1 />
        </Carousel>
      </div>
    </div>
  )
}

export default ClientTestimonials
