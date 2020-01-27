import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hackerspace Mumbai: OSS & Community"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `hackerspace`, `mumbai`, `technology`, `community`, `oss`, `people`, `meetup`, `bootcamps`, `workshops`]}
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to the Hackerspace Mumbai blog where we share our learnings and experiences in building the largest OSS community in Mumbai.</p>
        <p>
        
        <h2>
          <span role="img" aria-label="gift emoji">🎁</span> 
        What we do</h2>
<p>The mandate we have set for ourselves is to increase the knowledge level of technology at all skill levels in Mumbai, providing a platform for folks to showcase and share their knowledge and experience.</p>


<h3>1. Mumbai Technology Meetup #mumtechup </h3>
      
    <p>A monthly meetup usually consisting of 3-4 sessions revolving around a theme. The themes for the first quarter of 2020:</p>
      <ul>
        <li>January: Golang and Frontend Technology</li>
        <li>February: IoT</li>
        <li>March: DevOps</li>
      </ul>


    The session is usually aimed at folks with intermediate experience but we reserve a few places for freshers.
    
<h3>2. Freecodecamp</h3>

    One of our core goal is to enable folks from all walks of life to be able to code and in this we found freecodecamp an ideological ally and a superlative resource. Most of our meetups have a dedicated session for folks undertaking the freeCodeCamp challenges so that they can share and encourage each other's progress towards being a full stack developer.

<h3>3. Protoschool</h3>

    Being an OSS community, we believe that privacy is an inviolable right of an individual and to this end, we support and work towards a decentralized web. Along with freeCodeCamp, we host Protoschool sessions for enabling folks to take their first steps into #dWeb.

<h3>4. Bootcamps & Hackathons</h3>

    If you go by last few year analytics, our most sought after events are bootcamps which comprises of day long coding sessions. These are usually theme based like cloud, #AI, #MixedReality etc. Also we partner with MLH to conduct hackathons, giving special emphasis on student participation. 


<h4><span role="img" aria-label="namaste emoji">🙏</span>बिंदास, बनून टाक !!!</h4>

        </p>
   
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
