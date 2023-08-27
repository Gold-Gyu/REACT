import { useState } from 'react';
import './DetailModal.css';

function detailModal({
  title,
  date,
  description,
  state,
}: {
  title: string;
  date: string;
  description: string;
  state: boolean;
}) {
  const [updateTitle, setUpdateTitle] = useState(title);

  function update() {
    setUpdateTitle('내용이 바뀌지요');
  }

  if (state) {
    return (
      <div className="modal">
        <h4>{updateTitle}</h4>
        <p>{date}</p>
        <p>{description}</p>
        <div>
          <button onClick={update}>UPDATE</button>
          <button>DELETE</button>
        </div>
      </div>
    );
  }
}

export default detailModal;
