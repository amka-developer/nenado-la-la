import React from 'react'
import style from './checkbox.module.scss'

const CheckBox = ({ checked, onChange }) => {
	return (
		<div className={style.checkbox}>
			<label>
				<input type='checkbox' checked={checked} onChange={onChange} />
				<span className={style.checkmark}></span>
			</label>
		</div>
	)
}

export default CheckBox
