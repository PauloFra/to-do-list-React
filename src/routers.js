import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ToDoList from './pages/todolist/ToDoList'
import NotFound from './pages/notfound/NotFound'
import Header from './components/Header'
function Routers() {
  return (
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<ToDoList />} />
            </Routes>
    </BrowserRouter>
  )
}

export default Routers