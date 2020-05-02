import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'

import { DialogList } from 'components'

const Dialogs = ({ items, setCurrentDialogId, getDialogList }) => {
  const [filteredList, setFilteredList] = useState(items);

  useEffect(() => {
    if (!items.length) {
      getDialogList()
    }
    setFilteredList(items)
  }, [items, getDialogList])

  const handleSearch = value => {
    if (value) {
      setFilteredList(
        items.filter(el =>
          el.user.fullName.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      setFilteredList(items)
    }
  }

  return (
    <DialogList
      dialogs={filteredList}
      userId={1}
      onSearch={handleSearch}
      onSelectDialog={setCurrentDialogId}
    />
  )
}

Dialogs.propTypes = {
  items: PropTypes.array.isRequired,
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)
