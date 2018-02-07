import { connect } from 'react-redux'

import Info from '../../../../components/Info'

export default connect(state => ({
  data: state.Character.data,
  error: state.Character.error,
  isFetchedOnServer: state.Character.isFetchedOnServer,
}))(Info)
