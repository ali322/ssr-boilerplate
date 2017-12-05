import Index from './index/app.jsx'
import Detail from './detail/app.jsx'

export default [
  { path: '/', component: Index, exact: true },
  { path: '/detail/:id', component: Detail }
]
