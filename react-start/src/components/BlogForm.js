import { useEffect, useState } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'
import { bool } from 'prop-types';

const BlogForm = ({updating}) => {

	const { id } = useParams()

	const history = useHistory()

	const [title, setTitle] = useState('')
	const [OriginalTitle, setOriginalTitle] = useState('')
	const [body, setBody] = useState('')
	const [OriginalBody, setOriginalBody] = useState('')
	const [Publish, setPublish] = useState(false)
	const [OriginalPublish, setOriginalPublish] = useState(false)

	useEffect(() => {
		if (updating) {
			axios.get(`http://localhost:3001/posts/${id}`)
			.then((res) => {
				setTitle(res.data.title)
				setOriginalTitle(res.data.title)
				setBody(res.data.body)
				setOriginalBody(res.data.body)
				setPublish(res.data.Publish)
				setOriginalPublish(res.data.Publish)
			})
		}
	}, [id, updating])

	// 원본가 제목이 달라지거나 내용이 달라지면
	const isUpdated = () => {
		return title !== OriginalTitle || body !== OriginalBody || Publish !== OriginalPublish
	}

	// 뒤로 돌아가는 함수
	const goBack = () => {
		if (updating) {

			history.push(`/blogs/${id}`)
		} else {
			history.push('/blogs')
		}
	}

	const onSubmit = () => {
		if (updating) {
			axios.patch(`http://localhost:3001/posts/${id}`, {
				title,
				body,
				Publish
			})
			.then(() => {
				history.push(`/blogs/${id}`)
			})
		} else {
			axios.post('http://localhost:3001/posts', {
				title,
				body,
				Publish,
				createdAt : Date.now()
			})
			.then(() => {
				history.push('/admin')
			})
		}
	};

	const onChangePublish = (e) => {
		console.log(e.target.checked)
		setPublish(e.target.checked)
	}

	return (
		<div>
			<h1>{updating ? "Update" : "Create"} a blog post</h1>
			<div className="mb-3">
				<label className="form-label">Title</label>
				<input type="text"
					className="form-control"
					value={title}
					placeholder="제목을 작성해주세요"
					onChange={(event) => {
						setTitle(event.target.value)
					}}
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Content</label>
				<textarea
					className="form-control"
					value={body}
					placeholder="내용을 작성해주세요"
					onChange={(event) => {
						setBody(event.target.value)
					}}
					rows="10"
				/>
			</div>

			{/* 공개여부 확인하는 체크박스 */}
			<div className='form-check mb-3'>
				<input 
					className='form-check-input'
					type='checkbox'
					checked={Publish}
					onChange={onChangePublish}
				/>
				<label className='form-check-label'>
					Publish
				</label>

			</div>

			<button
				className="btn btn-primary"
				onClick={onSubmit}
				// 업데이트가 되었으면 수정 버튼 활성화
				disabled={updating && !isUpdated()}
			>
				{updating ? "Update" : "Post"}
				</button>
			<button
				className="btn btn-danger ms-2"
				onClick={goBack}
			>
				Cancel
				</button>
		</div>
	)
};

BlogForm.propTypes = {
	updating: bool
}

BlogForm.defaultProps = {
	updating: false
}


export default BlogForm