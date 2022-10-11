import React from 'react'
import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <div>
    <h1>Admin can manage users and add the products here.</h1>
    <Link to = "/add-product" className = "btn btn-primary mb-2" > Add Product </Link>  
    <button>Manage Users</button>  
    </div>
  )
}

export default AdminPage