"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "50%" },
}



const Movingnav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <h1 onClick={() => setIsOpen(isOpen => !isOpen)} >jj</h1>
      <p>hello</p>
    </motion.nav>
  )
}

export default Movingnav