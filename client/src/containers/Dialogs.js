import React from 'react'
import PropTypes from 'prop-types'

import dialogs from 'data.json'

import { DialogList } from 'components'

const Dialogs = () => {
  return <DialogList dialogs={dialogs} userId={1} />
}

Dialogs.propTypes = {}

export default Dialogs
