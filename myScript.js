document.querySelectorAll('#menu ul li a').forEach(link => {

    link.addEventListener('click', function(event) {
        // 모든 메뉴 항목에서 'active' 클래스 제거
        document.querySelectorAll('#menu ul li a').forEach(item => {
            item.classList.remove('active');
        });
        // 클릭한 메뉴 항목에만 'active' 클래스 추가
        this.classList.add('active');
    });
});

const opinionTextarea = document.getElementById('opinion');
const placeholderDiv = document.getElementById('placeholder');

opinionTextarea.addEventListener('input', function() {
    placeholderDiv.style.display = this.value ? 'none' : 'flex';
});

function submitOpinion() {
    var opinion = document.getElementById('opinion').value;
    if (opinion.trim() === '') {
        alert('의견을 입력해 주세요.');
        return;
    }
    alert('의견이 제출되었습니다. 감사합니다!');
    document.getElementById('opinion').value = ''; // Clear the textarea after submission
    placeholderDiv.style.display = 'flex'; // Show the placeholder again
}

