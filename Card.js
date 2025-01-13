document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const content = document.querySelector('.content');
  
    toggleBtn.addEventListener('click', () => {
      // コンテンツの表示・非表示を切り替える
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        toggleBtn.textContent = '表示を閉じる';
      } else {
        content.style.display = 'none';
        toggleBtn.textContent = '1.1.1.1から1.4.4.4まで';
      }
    });
  });
  