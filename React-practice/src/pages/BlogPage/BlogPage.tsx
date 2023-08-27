import { useState } from 'react';
import './BlogPage.css';
import BlogContent from 'components/common/blogContent/BlogContent';

const BlogPage = () => {
  const post = '고민 이야기';
  const [inputContext, setInputContext] = useState('');
  const [title, setTitle] = useState([
    // 'good',
    '나의 첫 번째 글',
    '아스날 최고',
    '데클런 라이스',
  ]);
  function ascSort() {
    const sortTitle = [...title];
    setTitle(sortTitle.sort());
  }

  // input값
  function inputText() {
    const copy = [...title]
    copy.unshift(inputContext);
    setTitle(copy)
  }
  // 삭제하기
  function deleteArticle(index:number) {
    const copy = [...title]
    copy.splice(index, 1)
    setTitle(copy)
  }
  return (
    <div>
      <div className="black-nav">{post}</div>
      <button onClick={ascSort}>가나다 순으로 글 제목 정렬</button>

      {title.map(function (subject, idx) {
        return (
          <div className="blog-list-box" key={subject}>
            <BlogContent title={subject} />
            <button onClick={()=>deleteArticle(idx)}>DELETE</button>
          </div>
        );
      })}
      <div className='input-box'>
        <input
          type="text"
          onChange={e => {
            setInputContext(e.target.value);
          }}
        />
        <button onClick={inputText}>등록하기</button>
      </div>
    </div>
  );
};

export default BlogPage;
