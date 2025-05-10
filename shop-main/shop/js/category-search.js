const CATEGORY_DATA = {
  cpu: {
  options: [
    { label: '제조사별', name: 'maker', choices: ['인텔', 'AMD'] },
    { label: '코드 네임', name: 'codename', choices: ['애로우레이크', '랩터레이크', '그래니트 릿지', '라파엘', '버미어'] },
    { label: 'CPU 시리즈', name: 'series', choices: ['코어 울트라', '14세대', '13세대', '12세대', '라이젠 9000', '라이젠 7000', '라이젠 5000'] },
    { label: 'CPU 종류', name: 'type', choices: ['코어 울트라9', '코어 울트라7', '코어 울트라5', '코어i9', '코어i7', '코어i5', '라이젠9', '라이젠7', '라이젠5'] },
    { label: '소켓 구분', name: 'socket', choices: ['(소켓1851)', '(소켓1700)', '(소켓AM5)', '(소켓AM4)'] },
    { label: '코어 수', name: 'core', choices: ['24코어', '20코어', '14코어', '10코어', '8 코어', '6 코어'] },
    { label: '스레드 수', name: 'thread', choices: ['32스레드', '28스레드', '20스레드', '16스레드', '12스레드'] },
    { label: '내장그래픽', name: 'igpu', choices: ['탑재', '미탑재'] },
    { label: '가격대', name: 'price', choices: [] }
  ]
},

vga: {
  options: [
    { label: '제조사별', name: 'maker', choices: ['MSI', '이엠텍', 'GIGABYTE', '갤럭시', 'ZOTAC', 'ASUS'] },
    { label: 'NVIDIA 칩셋', name: 'nvidia_chipset', choices: ['RTX 5090', 'RTX 5080', 'RTX 5070', 'RTX 5060', 'RTX 4090', 'RTX 4080', 'RTX 4070', 'RTX 4060' ]},
    { label: '메모리 용량', name: 'vram', choices: ['32GB','24GB', '16GB', '12GB', '8GB'] },
    { label: '출력단자', name: 'output', choices: ['HDMI2.1', 'DP2.1', 'DP1.4'] },
    { label: '인터페이스', name: 'interface', choices: ['PCIe5.0x16','PCIe5.0','PCIe4.0']},
    { label: '팬 개수', name: 'fan_count', choices: ['4팬', '3팬', '2팬'] },
    { label: '가격대', name: 'price', choices: [] }
  ]
},

    ram: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: [
        '삼성전자', 'ESSENCORE', 'TeamGroup', '마이크론', 'G.SKILL', 'SK하이닉스', 'PATRIOT', 'ADATA', '아이티젠', 'CORSAIR'
      ]},
      { label: '사용 장치', name: 'device', choices: [
        '데스크탑용', '노트북용', '서버용'
      ]},
      { label: '제품 분류', name: 'ddr', choices: [
        'DDR5', 'DDR4', 'DDR3', 'DDR2'
      ]},
      { label: '메모리 용량', name: 'capacity', choices: [
        '64GB', '48GB', '32GB', '16GB', '8GB'
      ]},
      { label: '램개수', name: 'stick_count', choices: [
        '1개', '2개', '4개', '8개'
      ]},      
      { label: '램타이밍', name: 'timing', choices: [
        'CL6', 'CL7', 'CL9', 'CL10', 'CL11'
      ]},
      { label: '히트싱크', name: 'heatsink', choices: [
        '방열판', '미포함'
      ]},
      { label: '가격대', name: 'price', choices: [] }
    ]
  },

  cooler: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: ['잘만', 'JIUSHARK', '3RSYS', 'DEEPCOOL', 'darkFlash', 'Thermalright', 'ARCTIC', 'PCCOOLER', '발키리', '쿨러마스터'] },
      { label: '제품 종류', name: 'type', choices: ['CPU 쿨러', '써멀컴파운드(그리스)', '시스템 쿨러', 'M.2 SSD 쿨러', 'RAM 쿨러'] },
      { label: '냉각 방식', name: 'cooling', choices: ['공랭', '수랭']},
      { label: '공랭 형태', name: 'air_type', choices: ['싱글타워형', '듀얼타워형', '일반형', '슬림형', '서버용'] },
      { label: '높이', name: 'height', choices: ['165~mm', '150~164mm', '125~149mm', '100~124mm', '75~99mm'] },
      { label: '라디에이터', name: 'radiator', choices: ['4열', '3열', '2열', '1열', '3x3열'] },
      { label: '팬 크기', name: 'fan_size', choices: ['200mm', '140mm', '120mm', '92mm', '80mm'] },
      { label: '팬 커넥터', name: 'fan_connector', choices: ['2핀', '3핀', '4핀', '3-4핀', '4핀(IDE)'] },
    { label: '가격대', name: 'price', choices: [] }
    ]
  },
  
  motherboard: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: [
        'GIGABYTE', 'ASUS', 'MSI', 'ASRock', 'BIOSTAR'
      ]},
      { label: 'CPU 소켓', name: 'socket', choices: [
        'AMD(소켓AM5)', 'AMD(소켓AM4)', 'AMD(소켓sTR5)', '인텔(소켓1851)', '인텔(소켓1700)'
      ]},
      { label: '세부 칩셋', name: 'chipset', choices: [
        'AMD X870E', 'AMD X870', 'AMD B850', 'AMD B840', 'AMD B650',
        '인텔 Z890', '인텔 B860', '인텔 H810', '인텔 Z790', '인텔 B760'
      ]},
      { label: '메모리 종류', name: 'memory_type', choices: [
        'DDR5', 'LPDDR5', 'DDR4', 'LPDDR4', 'DDR3'
      ]},
      { label: '메모리 슬롯', name: 'memory_slot', choices: [
        '5개 이상', '4개', '2개', '1개'
      ]},
      { label: '저장장치 인터페이스', name: 'storage_interface', choices: [
        'M.2', 'SATA3(6Gb/s)', 'SATA2(3Gb/s)', 'mSATA', 'U.2'
      ]},
      { label: 'M.2 슬롯 수', name: 'm2_slot_count', choices: [
        '6개 이상', '5개', '4개', '3개', '2개', '1개'
      ]},
      { label: '무선랜 종류', name: 'wireless', choices: [
        '무선랜(Wi-Fi)', '블루투스', 'M.2 Key-E'
      ]},
      { label: '특징', name: 'feature', choices: [
        'SPS(DrMOS)', 'DrMOS', '전원부 방열판', 'M.2 히트싱크', '일체형IO실드'
      ]},
    { label: '가격대', name: 'price', choices: [] }
    ]
  },
  
  ssd: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: [
        '삼성전자', 'SK하이닉스', '솔리다임', '마이크론', 'ESSENCORE', '키오시아', 'Seagate', 'CORSAIR', 'COLORFUL'
      ]},
      { label: '폼팩터', name: 'form_factor', choices: [
        'M.2 (2280)', '6.4cm(2.5형)', 'M.2 (2230)', 'M.2 (2242)'
      ]},
      { label: '용량', name: 'capacity', choices: [
        '4TB~3TB', '2TB~1.1TB', '1TB~600GB', '525GB~270GB', '256GB~130GB'
      ]},
      { label: '메모리 타입', name: 'memory_type', choices: [
        'TLC(토글)', 'TLC(기타)', 'QLC', 'MLC(기타)'
      ]},
      { label: 'RAM 탑재', name: 'ram', choices: [
        'DRAM 탑재'
      ]},
      { label: '순차읽기', name: 'seq_read', choices: [
        '~3,999MB/s', '~5,999MB/s', '~7,999MB/s', '~11,999MB/s', '12,000~MB/s',
      ]},
      { label: '순차쓰기', name: 'seq_write', choices: [
        '~4,999MB/s', '~5,999MB/s',  '~6,999MB/s', '~8,999MB/s', '9,000~MB/s'
      ]},
    { label: '가격대', name: 'price', choices: [] }
    ]
  },
  
  hdd: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: [
        'Seagate', 'Western Digital', '도시바', 'Synology', 'Sebap'
      ]},
      { label: '디스크 용량', name: 'capacity', choices: [
        '24TB', '22TB', '20TB', '18TB', '16TB', '14TB', '12TB', '10TB', '8TB', '6TB', '4TB', '3TB', '2TB'
      ]},
      { label: '회전수', name: 'rpm', choices: [
        '15,000RPM', '10,000RPM', '7,200RPM', '5,900RPM', '5,640RPM'
      ]},
      { label: '버퍼 용량', name: 'buffer', choices: [
        '메모리 512MB', '메모리 256MB', '메모리 128MB', '메모리 64MB', '메모리 32MB'
      ]},
      { label: '기록방식', name: 'recording', choices: [
        'CMR(PMR)', 'SMR(PMR)', '확인요망(PMR)', 'TGMR'
      ]},
    { label: '가격대', name: 'price', choices: [] }
    ]
  },
  
  power: {
    
    options: [
      { label: '제조사별', name: 'maker', choices: [
        '마이크로닉스', 'darkFlash', 'SuperFlower', '시소닉', '잘만'
      ]},
      { label: '제품 분류', name: 'type', choices: [
        'ATX 파워', 'M-ATX(SFX) 파워', 'TFX 파워', '서버용 파워', 'Flex-ATX 파워'
      ]},
      { label: '정격출력', name: 'wattage', choices: [
        '1000W~1299W', '800W~899W', '700W~799W', '600W~699W', '500W~599W'
      ]},
      { label: '80PLUS인증', name: 'certification', choices: [
        '80 PLUS 티타늄', '80 PLUS 플래티넘', '80 PLUS 골드', '80 PLUS 실버', '80 PLUS 브론즈'
      ]},
      { label: '케이블연결', name: 'cable', choices: [
        '풀모듈러', '세미모듈러', '케이블일체형'
      ]},
      { label: 'ATX12V 규격', name: 'atx12v', choices: [
        'V3.1', 'V3.0', 'V2.92', 'V2.52', 'V2.4'
      ]},
    { label: '가격대', name: 'price', choices: [] }
    ]
  },
  


};

let currentCategory = 'cpu';
let selectedFilters = {
  priceMin: null,
  priceMax: null
};
let currentSort = 'popularity';

// 인기검색어 렌더링 함수
function renderPopularKeywords(category) {
  const box = document.getElementById('popular-keywords');
  if (!box) return;
  box.innerHTML = '';
  (CATEGORY_DATA[category]?.keywords || []).forEach(kw => {
    const span = document.createElement('span');
    span.className = 'popular-keyword';
    span.textContent = kw;
    box.appendChild(span);
  });
}

// 체크박스 변경 핸들러
function handleFilterChange(optionName, value, isChecked) {
  if (!selectedFilters[optionName]) {
    selectedFilters[optionName] = [];
  }
  if (isChecked) {
    selectedFilters[optionName].push(value);
  } else {
    selectedFilters[optionName] = selectedFilters[optionName].filter(v => v !== value);
  }
  renderProducts(currentCategory, selectedFilters, currentSort);
}

// 상세검색 옵션 렌더링 함수 (가격 입력 필드 추가)
function renderDetailOptions(category) {
  const form = document.getElementById('detail-search-form');
  form.innerHTML = '';
  const options = CATEGORY_DATA[category]?.options || [];
  
  if (!options.length) {
    form.innerHTML = '<div style="color:#888;font-size:15px;">상세검색 옵션이 없습니다.</div>';
    return;
  }

  options.forEach(opt => {
    const row = document.createElement('div');
    row.className = 'detail-search-row';
    
    const label = document.createElement('div');
    label.className = 'detail-search-label';
    label.textContent = opt.label;
    row.appendChild(label);

    const choices = document.createElement('div');
    choices.className = 'detail-search-options';
    
if (opt.name === 'price') {
  const priceInputs = document.createElement('div');
  priceInputs.className = 'price-filter-inputs';
  priceInputs.style.display = 'flex';
  priceInputs.style.alignItems = 'center';
  priceInputs.style.gap = '8px';

  // 최소가격 입력
  const minInputWrap = document.createElement('span');
  const minInput = document.createElement('input');
  minInput.type = 'number';
  minInput.placeholder = '최소가격';
  minInput.min = 0;
  minInput.style.width = '90px';
  minInput.style.marginRight = '4px';
  minInput.className = 'price-input';
  minInput.addEventListener('input', (e) => {
    selectedFilters.priceMin = e.target.value ? parseInt(e.target.value) : null;
  });
  minInputWrap.appendChild(minInput);

  // 최대가격 입력
  const maxInputWrap = document.createElement('span');
  const maxInput = document.createElement('input');
  maxInput.type = 'number';
  maxInput.placeholder = '최대가격';
  maxInput.min = 0;
  maxInput.style.width = '90px';
  maxInput.style.marginRight = '4px';
  maxInput.className = 'price-input';
  maxInput.addEventListener('input', (e) => {
    selectedFilters.priceMax = e.target.value ? parseInt(e.target.value) : null;
  });
  maxInputWrap.appendChild(maxInput);

  // 돋보기(검색) 버튼 (Font Awesome)
const searchBtn = document.createElement('button');
searchBtn.type = 'button';
searchBtn.className = 'price-search-btn';
searchBtn.innerHTML = '<i class="fa fa-search"></i>';
searchBtn.style.marginLeft = '8px';
searchBtn.style.background = '#fff'; // 완전 흰색 배경
searchBtn.style.border = '1px solid #ddd'; // 연하고 얇은 테두리
searchBtn.style.boxShadow = 'none';
searchBtn.addEventListener('click', function() {
  renderProducts(currentCategory, selectedFilters, currentSort);
});

// 초기화(↺) 버튼
const resetBtn = document.createElement('button');
resetBtn.type = 'button';
resetBtn.className = 'price-reset-btn';
resetBtn.textContent = '↺';
resetBtn.style.marginLeft = '4px';
resetBtn.style.background = '#fff'; // 완전 흰색 배경
resetBtn.style.border = '1px solid #ddd'; // 연하고 얇은 테두리
resetBtn.style.boxShadow = 'none';
resetBtn.title = '초기화';
resetBtn.addEventListener('click', function() {
  minInput.value = '';
  maxInput.value = '';
  selectedFilters.priceMin = null;
  selectedFilters.priceMax = null;
  renderProducts(currentCategory, selectedFilters, currentSort);
});



  // 조립
  priceInputs.appendChild(minInputWrap);
  priceInputs.appendChild(document.createTextNode(' ~ '));
  priceInputs.appendChild(maxInputWrap);
  priceInputs.appendChild(searchBtn);
  priceInputs.appendChild(resetBtn);

  choices.appendChild(priceInputs);
}




    else { // 기존 체크박스
      opt.choices.forEach(choice => {
        const id = `${opt.name}_${choice.replace(/\s/g,'')}`;
        const labelSet = document.createElement('label');
        labelSet.className = 'checkbox-set';
        
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = id;
        cb.name = opt.name;
        cb.value = choice;
        
        cb.addEventListener('change', function() {
          handleFilterChange(opt.name, choice, this.checked);
        });
        
        const span = document.createElement('span');
        span.textContent = choice;
        span.title = choice;
        
        labelSet.appendChild(cb);
        labelSet.appendChild(span);
        choices.appendChild(labelSet);
      });
    }
    
    row.appendChild(choices);
    form.appendChild(row);
  });
}

// 가격 파싱 함수
function parsePrice(priceStr) {
  return parseInt(String(priceStr).replace(/[^\d]/g, ''), 10) || 0;
}

// 정렬 함수
function sortProducts(productList, sortType) {
  const sorted = [...productList];
  if (sortType === 'price-asc') {
    sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortType === 'price-desc') {
    sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sortType === 'popularity') {
    sorted.sort((a, b) => (a.popularity || 9999) - (b.popularity || 9999));
  } else if (sortType === 'new') {
    sorted.sort((a, b) => (a.new || 9999) - (b.new || 9999));
  }
  return sorted;
}

// 정렬 버튼 active 표시 함수
function setActiveSortButton(sortType) {
  document.querySelectorAll('.product-sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sort') === sortType);
  });
}

// 상품 렌더링 함수 (가격 필터링 추가)
function renderProducts(category, filters = {}, sortType = 'popularity') {
  const container = document.getElementById('product-list-container');
  if (!container) return;

  const productsObj = categoryMap[category];
  if (!productsObj) {
    container.innerHTML = '<div class="no-result">상품 데이터가 없습니다.</div>';
    return;
  }
  
  let productList = Object.entries(productsObj);

  // 체크박스 필터 적용
  Object.keys(filters).forEach(optionName => {
    const selected = filters[optionName];
    if (optionName !== 'priceMin' && optionName !== 'priceMax' && selected && selected.length) {
      productList = productList.filter(([id, product]) =>
        selected.some(val => {
          const nameMatch = product.name && product.name.includes(val);
          const descMatch = (product.desc || []).some(spec => spec.includes(val));
          return nameMatch || descMatch;
        })
      );
    }
  });

  // 가격 필터 적용
  if (filters.priceMin || filters.priceMax) {
    productList = productList.filter(([id, product]) => {
      const productPrice = parsePrice(product.price);
      const min = filters.priceMin || 0;
      const max = filters.priceMax || Infinity;
      return productPrice >= min && productPrice <= max;
    });
  }

  // 정렬 적용
  productList = sortProducts(
    productList.map(([id, product]) => ({ id, ...product })),
    sortType
  ).map(product => [product.id, product]);

  // 렌더링
  container.innerHTML = '';
  if (!productList.length) {
    container.innerHTML = '<div class="no-result">검색 결과가 없습니다.</div>';
    return;
  }
  productList.forEach(([id, product]) => {
    const descHtml = product.desc.join(' / ');
    const productId = id || encodeURIComponent(product.name);
    const html = `
      <div class="product-list-item">
        <div class="product-image">
          <a href="product.html?id=${productId}">
            <img src="${product.image}" alt="${product.name}">
          </a>
        </div>
        <div class="product-main-info">
          <div class="product-title">
            <a href="product.html?id=${productId}" class="product-link">${product.name}</a>
          </div>
          <div class="product-desc">${descHtml}</div>
        </div>
        <div class="product-price-box">
          <div class="product-price">${product.price}</div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

// 카테고리 클릭 및 초기화
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('cat');
  currentCategory = (urlCategory && CATEGORY_DATA[urlCategory]) ? urlCategory : 'cpu';

  const list = document.getElementById('category-list');
  Array.from(list.children).forEach(li => {
    const category = li.getAttribute('data-category');
    li.classList.toggle('active', category === currentCategory);

    li.addEventListener('click', function() {
      Array.from(list.children).forEach(x => x.classList.remove('active'));
      li.classList.add('active');
      currentCategory = category;
      selectedFilters = {
        priceMin: null,
        priceMax: null
      };
      currentSort = 'popularity';

      if (history.pushState) {
        history.pushState(null, '', `?cat=${currentCategory}`);
      }

      renderPopularKeywords(currentCategory);
      renderDetailOptions(currentCategory);
      setActiveSortButton(currentSort);
      renderProducts(currentCategory, selectedFilters, currentSort);
    });
  });

  // 정렬 버튼 이벤트 등록
  document.querySelectorAll('.product-sort-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      currentSort = this.getAttribute('data-sort');
      setActiveSortButton(currentSort);
      renderProducts(currentCategory, selectedFilters, currentSort);
    });
  });

  // 초기 렌더링
  renderPopularKeywords(currentCategory);
  renderDetailOptions(currentCategory);
  setActiveSortButton(currentSort);
  renderProducts(currentCategory, selectedFilters, currentSort);
});






