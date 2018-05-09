import grey from 'material-ui/colors/grey'

const styles = {
  root: {
    width: '100%',
  },
  bar: {
    height: '56px',
    background: '#fff',
    minHeight: '56px',
    boxShadow: '0px 2px 2px rgba(66, 66, 66, 0.08)',
    borderBottom: '1px solid #dce0ec',
  },
  flex: {
    flex: 1,
  },
  icon: {
    color: grey[700],
  },
  logo: {
    '@media screen and (max-width: 767px)': {
      marginLeft: 20,
    },
  },
  menu: {
    '@media screen and (max-width: 767px)': {
      marginRight: 20,
      width: 'auto',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  mobile: {
    '@media screen and (max-width: 767px)': {
      display: 'flex !important',
    },
  },
  smallAvatar: {
    width: 32,
    height: 32,
  },
  toolbar: {
    '@media screen and (min-width: 600px)': {
      minHeight: '56px',
    },
  },
}

export default styles
