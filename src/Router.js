import Revir from 'revir'
import states from 'revir/tests/states'

const state = new Revir({states})
state.on('ready', event => {
  console.log('transition:', event)
})
state.transition('Enter run payroll')
