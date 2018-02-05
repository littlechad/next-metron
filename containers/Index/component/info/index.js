import { connect } from 'react-redux'

import Info from '../../../../components/Info'

export default connect(state => ({
  data: state.character.data,
  error: state.character.error,
  isFetchedOnServer: state.character.isFetchedOnServer,
}))(Info)