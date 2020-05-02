import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'

import { DialogList } from 'components'

const Dialogs = ({ dialogs, currentDialog, getDialogList }) => {
  const [filteredList, setFilteredList] = useState(dialogs)
  //   const [currentDialog, setCurrentDialog] = useState(initialState)

  useEffect(() => {
    if (!dialogs.length) {
      getDialogList()
    }
    setFilteredList(dialogs)
  }, [dialogs, getDialogList])

  const handleSearch = value => {
    if (value) {
      setFilteredList(
        dialogs.filter(el =>
          el.user.fullName.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      setFilteredList(dialogs)
    }
  }

  const handleSelectDialog = id => {
    console.log(currentDialog)
  }

  return (
    <DialogList
      dialogs={filteredList}
      userId={1}
      onSearch={handleSearch}
      onSelectDialog={handleSelectDialog}
    />
  )
}

Dialogs.propTypes = {
  dialogs: PropTypes.array.isRequired,
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)
