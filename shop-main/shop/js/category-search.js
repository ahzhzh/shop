const CATEGORY_DATA = {
  cpu: {
    keywords: [
      '코어울트라 시리즈2', '인텔 14세대', '인텔 13~12세대', '인텔', '라이젠 6세대', '라이젠 5~4세대', 'AMD', '내장그래픽 CPU', '서버용 CPU', '중고 CPU'
    ],
    options: [
      { label: '제조사별', name: 'maker', choices: ['인텔', 'AMD'] },
      { label: '코드 네임', name: 'codename', choices: ['애로우레이크', '그래나이트 릿지', '라파엘', '버미어'] },
      { label: 'CPU 시리즈', name: 'series', choices: ['코어울트라', '코어i9', '코어i7', '라이젠 9', '라이젠 7'] },
      { label: 'CPU 종류', name: 'type', choices: ['코어 울트라9', '코어 울트라7', '코어i9', '라이젠9', '스레드리퍼'] },
      { label: '소켓 구분', name: 'socket', choices: ['인텔(소켓1851)', '인텔(소켓1700)', 'AMD(소켓AM5)', 'AMD(소켓AM4)'] },
      { label: '코어 수', name: 'core', choices: ['24코어', '16코어', '12코어', '8코어', '6코어'] },
      { label: '스레드 수', name: 'thread', choices: ['32스레드', '24스레드', '16스레드', '12스레드', '8스레드'] },
      { label: '내장그래픽', name: 'igpu', choices: ['탑재', '미탑재'] }
    ]
  },

  ram: {
    keywords: [
      'PC용 DDR5', 'PC용 DDR4', 'PC용 DDR3','노트북용 DDR5', '노트북용 DDR4', '노트북용 DDR3','서버용 RAM', '중고 RAM'
    ],
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
      ]}
    ]
  },
  
  vga: {
    keywords: [
      'NVIDIA 계열', 'AMD 계열', '인텔 계열', '길이 300mm 미만', '외장 그래픽', 'VGA 지지대/쿨러'
    ],
    options: [
      { label: '제조사별', name: 'maker', choices: [
        'GIGABYTE', 'MSI', '갤럭시', '이엠텍', 'PALIT', 'PowerColor', 'ZOTAC', 'ASRock', 'ASUS', 'COLORFUL'
      ]},
      { label: 'NVIDIA 칩셋', name: 'nvidia_chipset', choices: [
        'RTX 5090', 'RTX 5080', 'RTX 5070 Ti', 'RTX 5070', 'RTX 5060 Ti'
      ]},
      { label: 'AMD 칩셋', name: 'amd_chipset', choices: [
        'RX 9070 XT', 'RX 9070', 'RX 7800 XT', 'RX 7700 XT', 'RX 7600'
      ]},
      { label: '인텔 칩셋', name: 'intel_chipset', choices: [
        'ARC B580', 'ARC B570', 'ARC A770', 'ARC A750', 'ARC A380'
      ]},
      { label: '메모리 용량', name: 'vram', choices: [
        '24GB', '16GB', '12GB', '8GB', '6GB'
      ]},
      { label: '출력단자', name: 'output', choices: [
        'HDMI2.1', 'HDMI2.0', 'HDMI', 'DP2.1', 'DP2.0'
      ]},
      { label: '권장 파워용량', name: 'power', choices: [
        '450W 이상', '550W 이상', '650W 이상', '750W 이상', '850W 이상'
      ]},
      { label: '팬 개수', name: 'fan_count', choices: [
        '4팬', '3팬', '2팬', '1팬', '블로워팬'
      ]},
      { label: '가로(길이)', name: 'length', choices: [
        '360~', '350~359', '340~349', '330~339', '320~329'
      ]}
    ]
  },

  cooler: {
    keywords: [
      'CPU 수랭쿨러', 'CPU 공랭쿨러', '쿨링팬', '그래픽카드 쿨러', 'RAM 쿨러', '방열판', '써멀패드', '튜닝 용품'
    ],
    options: [
      { label: '제조사별', name: 'maker', choices: ['잘만', 'JIUSHARK', '3RSYS', 'DEEPCOOL', 'darkFlash', 'Thermalright', 'ARCTIC', 'PCCOOLER', '발키리', '쿨러마스터'] },
      { label: '제품 종류', name: 'type', choices: ['CPU 쿨러', '써멀컴파운드(그리스)', '시스템 쿨러', 'M.2 SSD 쿨러', 'RAM 쿨러'] },
      { label: '냉각 방식', name: 'cooling', choices: ['공랭', '수랭']},
      { label: '공랭 형태', name: 'air_type', choices: ['싱글타워형', '듀얼타워형', '일반형', '슬림형', '서버용'] },
      { label: '높이', name: 'height', choices: ['165~mm', '150~164mm', '125~149mm', '100~124mm', '75~99mm'] },
      { label: '라디에이터', name: 'radiator', choices: ['4열', '3열', '2열', '1열', '3x3열'] },
      { label: '팬 크기', name: 'fan_size', choices: ['200mm', '140mm', '120mm', '92mm', '80mm'] },
      { label: '팬 커넥터', name: 'fan_connector', choices: ['2핀', '3핀', '4핀', '3-4핀', '4핀(IDE)'] }
    ]
  },
  

  motherboard: {
    keywords: ['인텔 1851 소켓 지원', '인텔용 메인보드', 'AMD AM5소켓 지원', 'AMD용 메인보드', 'DD5 메모리 지원', 'C타입 모니터 출력', '임베디드 보드'],
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
      ]}
    ]
  },
  

  ssd: {
    keywords: ['M.2 NVMe 전체', 'M.2 NVMe 5.0', 'M.2 NVMe 3.0', '2.5인치 SATA', 'M.2 SATA', 'PS5 / UMPC용', 'OS 설치용','SSD / HDD 주변기기'],
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
      ]}
    ]
  },
  

  hdd: {
    keywords: ['PC용 HDD', 'NAS용 HDD', 'CCTV용 HDD', '노트북용 HDD', '기업용 HDD', 'SSD / HDD 복사기', 'SSD / HDD 주변기기'],
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
      ]}
    ]
  },
  

  power: {
    keywords: ['ATX 3.x 파워', 'M-ATX 3.x 파워', '모듈러 파워', '80 PLUS 인증 파워', '1000W 이상 파워', 'UPS'],
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
      ]}
    ]
  },
  


};

let currentCategory = 'cpu';

function renderPopularKeywords(category) {
  const box = document.getElementById('popular-keywords');
  box.innerHTML = '';
  (CATEGORY_DATA[category].keywords || []).forEach(kw => {
    const span = document.createElement('span');
    span.className = 'popular-keyword';
    span.textContent = kw;
    box.appendChild(span);
  });
}

function renderDetailOptions(category) {
  const form = document.getElementById('detail-search-form');
  form.innerHTML = '';
  const options = CATEGORY_DATA[category].options || [];
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
    opt.choices.forEach(choice => {
      const id = `${opt.name}_${choice.replace(/\s/g,'')}`;
      const labelSet = document.createElement('label');
      labelSet.className = 'checkbox-set';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = id;
      cb.name = opt.name;
      cb.value = choice;
      // 한 라벨(옵션 그룹) 안에서는 하나만 선택 가능(라디오처럼)
      cb.addEventListener('change', function() {
        if (cb.checked) {
          document.querySelectorAll(`input[name="${opt.name}"]`).forEach(other => {
            if (other !== cb) other.checked = false;
          });
        }
      });
      const span = document.createElement('span');
      span.textContent = choice;
      span.title = choice;
      labelSet.appendChild(cb);
      labelSet.appendChild(span);
      choices.appendChild(labelSet);
    });
    row.appendChild(choices);
    form.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('cat');
  currentCategory = (urlCategory && CATEGORY_DATA[urlCategory]) ? urlCategory : 'cpu';

  // 좌측 카테고리 메뉴 활성화 및 클릭 이벤트
  const list = document.getElementById('category-list');
  Array.from(list.children).forEach(li => {
    const category = li.getAttribute('data-category');
    li.classList.toggle('active', category === currentCategory);

    li.addEventListener('click', function() {
      Array.from(list.children).forEach(x => x.classList.remove('active'));
      li.classList.add('active');
      currentCategory = category;
      renderPopularKeywords(currentCategory);
      renderDetailOptions(currentCategory);
    });
  });

  renderPopularKeywords(currentCategory);
  renderDetailOptions(currentCategory);
});
