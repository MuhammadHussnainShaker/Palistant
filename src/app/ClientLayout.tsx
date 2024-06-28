"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import CreateBook from "./components/CreateBook.tsx"
import ShowBookList from "./components/ShowBookList.tsx"
import ShowBookDetails from "./components/ShowBookDetails"
import UpdateBookInfo from "./components/UpdateBookInfo"

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname()

  const renderComponent = () => {
    switch (pathname) {
      case "/":
        return <ShowBookList />
      case "/create-book":
        return <CreateBook />
      case "/show-book/[id]":
        return <ShowBookDetails />
      case "/edit-book/[id]":
        return <UpdateBookInfo />
      default:
        return children // Render children for other routes
    }
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-book">Create Book</Link>
          </li>
        </ul>
      </nav>
      <main>{renderComponent()}</main>
    </>
  )
}

export default ClientLayout
