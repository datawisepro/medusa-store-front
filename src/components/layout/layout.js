import { Flex, Link, Text } from "@theme-ui/components"
import Image from "next/image"
import React from "react"
import RegionSelector from "../region-selector/region-selector"

const Layout = ({ children, country, regions, handleRegionChange }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        // flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#F3F4F6",
      }}
    >
      <Flex
        sx={{
          // justifyContent: ["center", "flex-end"],
          border: "200px solid red",
          alignItems: "center",
          width: ["100%", "50%"],
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
