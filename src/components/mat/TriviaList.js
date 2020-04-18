import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { navigate } from "gatsby"
import { lightTheme } from "../../themes"

const useStyles = makeStyles(theme => ({
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: lightTheme.linkBg,
    },
  },
}))

const TriviaList = ({ open, closeDialog, trivia }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()

  const handleClose = () => {
    closeDialog()
  }

  const handleTriviaSelect = url => () => {
    closeDialog()
    navigate(url)
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="trivia-list-title"
      >
        <DialogTitle id="trivia-list-title">Trivia list</DialogTitle>
        <DialogContent dividers>
          <List>
            {trivia &&
              trivia.map(item => (
                <ListItem
                  key={item.node.id}
                  onClick={handleTriviaSelect(`/${item.node.name}`)}
                  className={classes.listItem}
                >
                  <ListItemText
                    primary={item.node.childMarkdownRemark.frontmatter.title}
                  />
                </ListItem>
              ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TriviaList
