import * as React from "react"

const pageStyles = {
  margin: 0,
  padding: 0,
  height: '100%',
  overflow: 'hidden',
  color: '#fff'
}

const contentStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: '0px',
  // overflow: 'hidden',
  // display: 'inline-block',
}

const iframeStyle = {
  // width: "100%",
  // height: "100%"
  marginTop: '-30',
  marginBottom: '-100',
  marginLeft: '-100px',
  marginRight: '-100px'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>TipToBe</title>
      <div style={contentStyle}>
        <iframe
          // style={iframeStyle}
          src="https://docs.google.com/presentation/d/e/2PACX-1vQ6S4dwYYb_eTyKpQAHsy8FJOAQs-1SOQvIhCX7PKxx8ihHYl_MeG1dXxfhL7qg6A/embed?start=true&loop=true&delayms=60000&amp;rm=minimal"
          frameborder="-10"
          width="1280"
          height="1024"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true" />
      </div>
    </main>
  )
}

export default IndexPage
