import Vue from 'vue'
import Router from 'vue-router'
import Books from '../pages/Books'
import About from '../pages/About'
import Book from '../pages/Book'
import SignUp from '../pages/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Books
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/books/:bookId',
      name: 'Book',
      component: Book,
      props: true
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      props: true
    }
  ]
})
