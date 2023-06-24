import PropTypes from 'prop-types'

const Card = ({ title, onClick, children, }) => {

	return (
		<div
			className="card mb-3 cursor-pointer"
			onClick={onClick}>
			<div className="card-body py-2 d-flex align-items-center">
					<div className='flex-grow-1'>{title}</div>
					{/* children을 상속받는다면 나타낸다는 의미 */}
					{children && <div>{children}</div>}
			</div>
		</div >
	)
}

// props의 타입 설정해주기(npm설치)
// isRequired 필수로 설정하기 위해서 == not null과 비슷한 느낌
Card.prototype = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element,
	onClick: PropTypes.func,
}

// props의 디폴트값 설정
// 아무것도 인자를 상속받지않으면 디폴트값을 랜더링
Card.defaultProps = {
	children: null,
	onClick: () => {},
}

export default Card;