import { useId } from 'react'
import React, { useState } from 'react'
import style from './profile.module.scss'
import { ReactComponent as AvatarIcon } from '../../assets/img/avatar.svg'
import { ReactComponent as UploadIcon } from '../../assets/img/import.svg'
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'
import { ReactComponent as EyeIcon } from '../../assets/img/close_eye.svg'
import { ReactComponent as EyeOffIcon } from '../../assets/img/open_eye.svg'
import { ReactComponent as Elipse } from '../../assets/img/elipse.svg'
import { ReactComponent as Elipse2 } from '../../assets/img/elipse2.svg'
import CheckBox from '../checkBox/CheckBox'

const Profile = () => {
	const [inputTypes, setInputTypes] = useState({
		password1: 'password',
		password2: 'password',
		password3: 'password'
	})

	const toggleInputType = inputName => {
		setInputTypes(prevTypes => ({
			...prevTypes,
			[inputName]: prevTypes[inputName] === 'password' ? 'text' : 'password'
		}))
	}

	return (
		<div className={style.profile_wrap}>
			<div className={style.profile_info}>
				<div className={style.info_avatar}>
					<div className={style.left}>
						<div className={style.avatar}>
							<AvatarIcon />
						</div>
						<div className={style.profile_control}>
							<label>
								<UploadIcon />
								Загрузить
							</label>
							<label>
								<DeleteIcon />
								Удалить
							</label>
						</div>
					</div>
					<div className={style.profile_save}>
						<button>Сохранить</button>
					</div>
				</div>
				<div className={style.info_inputs}>
					<h3>Личные данные</h3>

					<input type='text' placeholder='Имя' name='name' id={useId} />
					<input type='text' placeholder='Фамилия' name='surname' id={useId} />
					<input type='email' placeholder='Почта' name='email' id={useId} />
				</div>
				<Elipse className={style.elipse} />
				<Elipse2 className={style.elipse2} />
			</div>
			<div className={style.change_password}>
				<div className={style.info_inputs2}>
					<h3>Смена пароля</h3>

					<div className={style.input_wrap}>
						<input type={inputTypes.password1} placeholder='Текущий пароль' name='password1' id={useId} />
						{inputTypes.password1 === 'password' ? (
							<EyeIcon onClick={() => toggleInputType('password1')} style={{ cursor: 'pointer' }} />
						) : (
							<EyeOffIcon
								onClick={() => toggleInputType('password1')}
								style={{ cursor: 'pointer' }}
							/>
						)}
					</div>
					<div className={style.input_wrap}>
						<input type={inputTypes.password2} placeholder='Новый пароль' name='password2' id={useId} />
						{inputTypes.password2 === 'password' ? (
							<EyeIcon onClick={() => toggleInputType('password2')} style={{ cursor: 'pointer' }} />
						) : (
							<EyeOffIcon
								onClick={() => toggleInputType('password2')}
								style={{ cursor: 'pointer' }}
							/>
						)}
					</div>
					<div className={style.input_wrap}>
						<input
							type={inputTypes.password3}
							placeholder='Подтвердить новый пароль'
							name='password3'
							id={useId}
						/>
						{inputTypes.password3 === 'password' ? (
							<EyeIcon onClick={() => toggleInputType('password3')} style={{ cursor: 'pointer' }} />
						) : (
							<EyeOffIcon
								onClick={() => toggleInputType('password3')}
								style={{ cursor: 'pointer' }}
							/>
						)}
					</div>
				</div>
				<Elipse className={style.elipse} />
				<Elipse2 className={style.elipse2} />
			</div>
			<div className={style.confirm}>
				<div className={style.clue}>
					<CheckBox />
					<p>Получение специальных предложений и акций по электронной почте.</p>
				</div>
				<div className={style.logout_btn}>
					<button>Выйти из аккаунта</button>
				</div>
			</div>
		</div>
	)
}

export default Profile
