import axios from "axios"
import { useState, useEffect } from 'react'
import Card from "../components/Card"
// import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"
import { bool } from "prop-types"

const BlogList = ({isAdmin}) => {

	const history = useHistory()
	// 포스트
	const [posts, setPosts] = useState([])
	// 로딩
	const [loading, setLoading] = useState(true)

	const deletePost = (e, id) => {
		// stopPropagation은 버블링을 막아줌으로써 해당 요소의 이벤트만 발생할 수 있도록함
		e.stopPropagation()
		console.log("delete")
		axios.delete(`http://localhost:3001/posts/${id}`)
			.then((res) => {
				// 현재 db에 남아있는 id값과 삭제요청한 id값이 다른 것들만 남긴다.(같은것은 삭제)
				setPosts(prevPosts => prevPosts.filter(post => post.id !== id)
				)
			})
	}

	const getPosts = () => {
		axios.get("http://localhost:3001/posts")
			.then((res) => {
				setPosts(res.data)
				setLoading(false)
			})
	}

	useEffect(() => {
		getPosts();
	}, [])

	if (loading) {
		return (
			<LoadingSpinner />
		)
	}
	if (posts.length === 0) {
		return (<div>No blog posts found</div>)
	}
	return posts.filter(post => {
		return isAdmin || post.Publish
	}).map(post => {
		return (
			<Card
				key={post.id}
				title={post.title}
				onClick={() => history.push(`/blogs/${post.id}`)}>

				{isAdmin ?  (<div>

					<button
						className="btn btn-danger btn-sm"
						onClick={(e) => deletePost(e, post.id)}
					>DELETE</button>
				</div>) 
				 : null
				}
			</Card>
		)
	})
}

BlogList.propTypes = {
	isAdmin: bool
}
BlogList.defaultProps = {
	isAdmin: false
}

export default BlogList