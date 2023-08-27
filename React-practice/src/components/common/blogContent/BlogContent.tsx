import { useState } from 'react';
import './BlogContent.css';
import DetailModal from '../detailModal/DetailModal';

function BlogContent({ title }: { title: string }) {
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  function getLike() {
    setLike(like + 1);
  }

  function stateModal() {
    setModal(!modal);
  }

  return (
    <div className="blog-content-box">
      <h4>
        {title}{' '}
        <span onClick={getLike} className="thumb-up">
          👍
        </span>{' '}
        {like}{' '}
        
      </h4>
      <p>날 짜</p>
      {!modal ? (
        <button onClick={stateModal}> 상세보기 </button>
      ) : (
        <button onClick={stateModal}> 상세닫기 </button>
      )}
      {/* 모달 */}
      <DetailModal
        title={title}
        date="2023-08-27"
        description="상세내용"
        state={modal}
      />
    </div>
  );
}

export default BlogContent;
