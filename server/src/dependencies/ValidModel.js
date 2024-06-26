const utils = require('../utils/Utils')

class ValidModel {
  constructor () {
    this.ModalOk = false
    this.MessageInvalidModal = utils.StringEmpty()
  }

  set _MessageInvalidModal (messageInvalid) {
    this.MessageInvalidModal = messageInvalid
  }

  set _ModalOk (modalOk) {
    this.ModalOk = Boolean(modalOk)
  }

  get _ModalOk () {
    return this.ModalOk
  }

  get _MessageInvalidModal () {
    return this.MessageInvalidModal
  }
}

module.exports = ValidModel
