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


