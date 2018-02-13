import { connect } from 'react-redux'

import Info from '../../../components/Info'

const mapStateToProps = state => ({
  data: state.Character.data,
  error: state.Character.error,
})

export default connect(mapStateToProps)(Info)
