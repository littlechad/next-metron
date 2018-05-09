const styles = () => ({
  root: { padding: '20px 0', background: '#fefefe', flexShrink: 0 },
  center: { textAlign: 'center' },
  copy: { padding: '0 0 10px', margin: 0 },
  link: {
    color: '#333',
    fontWeight: '600',
    margin: '0 10px',
    textTransform: 'uppercase',
    '@media screen and (max-width: 767px)': {
      display: 'block',
    },
  },
  static: { textAlign: 'center', padding: '10px 0' },
})

export default styles
