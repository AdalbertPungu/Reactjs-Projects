import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
	const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext()
	const container = useRef(null)
	const [columns, setColumns] = useState('col-2')
}

export default Submenu
