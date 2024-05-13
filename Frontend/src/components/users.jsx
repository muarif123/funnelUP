import React, { useEffect, useState } from 'react'
import { UserCircleIcon } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'



export function UserToggle() {
  const [users, setusers] = useState('')
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user')) || {}
    console.log(user);
    setusers(user.role)
  }, [])


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <UserCircleIcon />
          <span className="sr-only">Users</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          <Link to={'/compon/Login'}>

            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={'/compon/SignUp'}>

            SignUp
          </Link>



        </DropdownMenuItem>
        {users&&users === 'admin' ? (

          <DropdownMenuItem>
            <Link to={'/compon/Products'}>

              My Products
            </Link>
          </DropdownMenuItem>
        ) : null}

        {users&&users === 'admin' ? (

          <DropdownMenuItem>
            <Link to={'/compon/Upload'}>

              Upload Product
            </Link>

          </DropdownMenuItem>
        ) : null}
        {users&&users === 'admin' ? (

          <DropdownMenuItem>
            <Link to={'/compon/Carouselp'}>

              Upload Ad
            </Link>

          </DropdownMenuItem>
        ) : null}
        {users&&users==='admin'?(

        <DropdownMenuItem>
          <Link to={'/compon/Dashboard'}>

            Dashboard
          </Link>

        </DropdownMenuItem>
        ):null}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
