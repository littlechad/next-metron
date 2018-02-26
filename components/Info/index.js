import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  card: {
    minWidth: 400,
    width: '400px',
    margin: '20px auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
})

const Info = ({
  data,
  error,
  classes,
}) => {
  const content = Object.keys(error).length > 0
    ? (
      <CardContent>
        <Typography className={classes.title}>We encountered and error.</Typography>
      </CardContent>)
    : (
      <CardContent>
        <Typography className={classes.title}>Character of the Day</Typography>
        <Typography variant="headline" component="h2">
          Character: {data.name}
        </Typography>
        <Typography className={classes.pos}>starwars</Typography>
        <Typography component="p">
          birth year: {data.birth_year}
        </Typography>
        <Typography component="p">
          gender: {data.gender}
        </Typography>
        <Typography component="p">
          skin color: {data.skin_color}
        </Typography>
        <Typography component="p">
          eye color: {data.eye_color}
        </Typography>
      </CardContent>)

  return (
    <div>
      <Card className={classes.card}>
        {content}
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

Info.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  error: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Info)
