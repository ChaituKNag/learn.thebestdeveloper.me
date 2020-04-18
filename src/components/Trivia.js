import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "./layout"
import randomLink from "../utils/random-link"
import SEO from "./seo"
import RefreshIcon from "@material-ui/icons/Refresh"
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded"
import PersonIcon from "@material-ui/icons/Person"
import Fab from "@material-ui/core/Fab"

import { makeStyles } from "@material-ui/core/styles"
import { fonts } from "../themes"
import TriviaList from "./mat/TriviaList"

const useStyles = makeStyles(theme => ({
  triviaRoot: {
    paddingBottom: theme.spacing(6),
  },
  buttonsRoot: {
    height: "50px",
    maxWidth: "700px",
    width: "100%",
    transform: "translateZ(0px)",
    flexGrow: 1,
    position: "fixed",
    bottom: "0",
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: theme.spacing(2),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  profileBtn: {
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(4),
      order: 2,
    },
  },
  listBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
  },
  refreshBtn: {
    marginRight: theme.spacing(2),
    fontFamily: fonts.secondary,
    textTransform: "capitalize",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  refreshIcon: {
    marginRight: theme.spacing(1),
  },
}))

const Trivia = ({ data, pageContext }) => {
  const [triviaListOpen, setTriviaListOpen] = useState(false)
  const classes = useStyles()
  const trivia = data.markdownRemark

  const handleRandomTrivia = () => {
    if (data.allFile.edges) {
      let nodes = data.allFile.edges
      let { node } = randomLink(
        nodes,
        nodes.findIndex(t => t.node.name === pageContext.name)
      )
      navigate(`/${node.name}`)
    }
  }

  const showTriviaList = () => {
    setTriviaListOpen(true)
  }

  const closeTriviaList = () => {
    setTriviaListOpen(false)
  }
  return (
    <Layout>
      <SEO title={trivia.frontmatter.title} />
      <div
        className={classes.triviaRoot}
        key={trivia.id}
        dangerouslySetInnerHTML={{ __html: trivia.html }}
      />

      <TriviaList
        open={triviaListOpen}
        closeDialog={closeTriviaList}
        trivia={data.allFile.edges}
      />

      <div className={classes.buttonsRoot}>
        <Fab
          color="primary"
          aria-label="refresh"
          className={classes.refreshBtn}
          variant="extended"
          size="large"
          onClick={handleRandomTrivia}
        >
          <RefreshIcon className={classes.refreshIcon} /> Random Trivia
        </Fab>
        <Fab
          color="secondary"
          aria-label="list"
          className={classes.listBtn}
          size="medium"
          onClick={showTriviaList}
        >
          <ListAltRoundedIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.profileBtn}
          variant="round"
          size="medium"
          href="https://thebestdeveloper.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          <PersonIcon />
        </Fab>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleTrivia($nameRegex: String!) {
    markdownRemark(fileAbsolutePath: { regex: $nameRegex }) {
      frontmatter {
        topic
        title
      }
      html
      id
      fileAbsolutePath
    }
    allFile(filter: { ext: { eq: ".md" } }) {
      edges {
        node {
          name
          id
          childMarkdownRemark {
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`

export default Trivia
