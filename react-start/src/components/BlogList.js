import axios from "axios"
import { useState, useEffect } from 'react'
import Card from "../components/Card"
// import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"
import { bool } from "prop-types"
import Pagination from "./Pagination"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

const BlogList = ({isAdmin}) => {

	const history = useHistory()
	// url에 기록남기고 그 기록을 통해 뒤로가기 만들기
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const pageParams = params.get('page')
	
	// 포스트
	const [posts, setPosts] = useState([])
	// 로딩
	const [loading, setLoading] = useState(true)
	// 페이지
	const [currentPage, setCurrentPage] = useState(1)
	const [numberOfPosts, setnumberOfPosts] = useState(0)
	const [numberOfPages, setnumberOfPages] = useState(0)
	const limit = 5


	//numberOfPosts가 바뀔 때마다 numberOfpages를 계산
	useEffect(()=> {
		setnumberOfPages(Math.ceil(numberOfPosts/limit))
	}, [numberOfPosts])



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


	const onClickPageButton = (page) => {
		history.push(`/admin?page=${page}`)
		getPosts(page)
	}
	const getPosts = (page = 1) => {
		let params = {
			_page: page,
			_limit: limit,
			_sort: 'id',
			_order: 'desc',
		}

		if (!isAdmin) {
			params = {...params, Publish: true}
		}

		axios.get(`http://localhost:3001/posts`, {
			params : params
		})
		.then((res) => {
			setnumberOfPosts(res.headers['x-total-count'])
			setPosts(res.data)
			setLoading(false)
		})
	}

	useEffect(() => {
		setCurrentPage(parseInt(pageParams) || 1);
		getPosts(parseInt(pageParams) || 1);
	}, [pageParams])

	if (loading) {
		return (
			<LoadingSpinner />
		)
	}
	if (posts.length === 0) {
		return (<div>No blog posts found</div>)
	}

	const renderBlogList = () => {
		return posts.map(post => {
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
	return (
		<div>
			{renderBlogList()}
			{numberOfPages > 1 && <Pagination
				currentPage={currentPage}
				numberOfPages={numberOfPages}
				onClick={onClickPageButton}
				/>}
		</div>
	)
}

BlogList.propTypes = {
	isAdmin: bool
}
BlogList.defaultProps = {
	isAdmin: false
}

export default BlogList