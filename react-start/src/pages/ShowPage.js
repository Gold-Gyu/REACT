import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const ShowPage = () => {
	// id는 routes.js에서 url에서 :뒤에 명칭과 같아야한다. 그래야 그 인자를 사용할 수 있다
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const [loading, setLoading] = useState(true)

	const getPost = (id) => {
		axios.get(`http://localhost:3001/posts/${id}`)
			.then((res) => {
				setPost(res.data)
				setLoading(false)
			})
	}

	// 한번만 요청을 실행할 것이기 때문에 빈배열
	// 배열안의 값이 변경될 때마다 실행되는 것임
	useEffect(() => {
		getPost(id)
	}, [id])

	// 시간을 나타내는 함수
	const printDate = (timestamp) => {
		return new Date(timestamp).toLocaleString();
	}


	//loading중이면
	if (loading) {
		return <LoadingSpinner />
	}
	// 로딩이 아니면 보여주기
	return (
		<div>
			<div className="d-flex">
				<h1 className="flex-grow-1">{post.title}</h1>
				<div>

					<Link
					 className="btn btn-primary"
					 to={`/blogs/${id}/update`}>
						수정하기
					</Link>
				</div>
			</div>
			<small className="text-muted">
				생성시간 : {printDate(post.createdAt)}
			</small>
			<hr />
			<p>{post.body}</p>
		</div>
	)
}

export default ShowPage 