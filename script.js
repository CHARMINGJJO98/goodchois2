// モーダル表示機能
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// モーダル閉じる機能
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// モーダル外クリックで閉じる処理
window.addEventListener("click", function(event) {
  let modals = document.querySelectorAll(".modal");
  modals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// スムーズスクロール：ナビゲーションリンクのクリックで指定セクションへ移動
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    let targetID = this.getAttribute('href').substring(1);
    let targetSection = document.getElementById(targetID);
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
