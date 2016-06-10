import Revir from 'revir'
import states from 'revir/tests/states'
import {Router} from 'director'

const state = new Revir({states})
state.on('ready', event => {
  console.log('transition:', event)
})
state.transition('Enter run payroll')

const routes = {
  '/app': function() {
    console.log('/app', arguments)
  },
  '/app/employees/:eeId': function() {
    console.log('/app/employees/:eeId', arguments)
  }
}

let router = new Router(routes)
  .configure({
    html5history: true,
    notfound: function() {
      console.log('notfound', arguments)
    },
    on: function() {
      console.log('router.dispatch', arguments)
    },
    recurse: 'forward',
    run_handler_in_init: true,
    strict: false
  })
  .init()

router.getRoute(0)
setTimeout(() => router.setRoute('/yolo'), 2000)
