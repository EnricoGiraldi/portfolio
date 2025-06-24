import React from 'react';

function CV() {
  return (
    <div>
      <h2>Curriculum Vitae</h2>
      <p>You can download or view my CV below:</p>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        Open CV (PDF)
      </a>
      <div style={{ marginTop: "20px" }}>
        <iframe src="/cv.pdf" width="100%" height="800px" title="CV PDF"></iframe>
      </div>
    </div>
  );
}

export default CV;
