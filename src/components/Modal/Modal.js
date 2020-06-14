import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'
//import { PositionData } from "../../PositionData";

const Modal = forwardRef((props, ref) => {
	const [display, setDisplay] = React.useState(false)
	const [popupData, setPopupData] = React.useState(null)

	useImperativeHandle(ref, () => {
		return {
			openModal: open,
			close: () => close()
		}
	})

	const open = (data) => {
		setDisplay(true)
		setPopupData(data)
	}
	//
	const close = () => {
		setDisplay(false)
		setPopupData(null)
	}

	if (display) {
		return ReactDOM.createPortal(
			<div className="new-position-wrapper">
				<div onClick={close} className={'modal-backdrop'} />
				<div className={'modal-box'}>
					<h1>{popupData?.title || 'No title specified'}</h1>
				</div>
			</div>,
			document.getElementById('root')
		)
	}
	return null
})

export default Modal
