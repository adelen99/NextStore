import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";

function Navbar() {
  return (
    <div className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-4 flex-wrap py-8'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>

        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
