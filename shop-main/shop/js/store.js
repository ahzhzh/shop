

document.getElementById('filter-form').addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 제출 방지

    // 선택된 옵션 가져오기
    const selectedOptions = {};
    const formData = new FormData(e.target);

    formData.forEach((value, key) => {
        if (!selectedOptions[key]) {
            selectedOptions[key] = [];
        }
        selectedOptions[key].push(value);
    });

    // 결과 표시 (예시)
    const resultsDiv = document.getElementById('filter-results');
    resultsDiv.innerHTML = '<h4>선택된 옵션:</h4>';
    
    for (const category in selectedOptions) {
        resultsDiv.innerHTML += `<p><strong>${category}:</strong> ${selectedOptions[category].join(', ')}</p>`;
    }

    // 실제 상품 필터링 로직은 여기에 추가하면 됩니다.
});

function showSubItems(categoryId) {
    // 첫 번째 박스에서 선택된 서브 목록 가져오기
    const subItems = document.querySelector(`#${categoryId}`).innerHTML;

    // 두 번째 박스의 리스트 업데이트
    const secondBox = document.querySelector('#second_cat_list');
    secondBox.innerHTML = subItems;
}


