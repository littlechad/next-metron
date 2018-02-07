import { connect } from 'react-redux'

import Info from '../../../../../components/Info'

const mapStateToProps = state => ({
  data: state.Character.data,
  error: state.Character.error,
  isFetchedOnServer: state.Character.isFetchedOnServer,
})

export default connect(mapStateToProps)(Info)
