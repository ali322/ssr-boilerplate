import Index from './index/app.jsx'
import Detail from './detail/app.jsx'
import * as actions from './index/action'

export default [
  {
    path: '/',
    component: Index,
    exact: true,
    asyncState: store => store.dispatch(actions.fetchEvents())
  },
  { path: '/detail/:id', component: Detail }
]
