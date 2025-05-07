// js/products.js

// 카테고리별 상품 객체 분리
const vgaProducts = {
    "a": {
    name: "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB",
    category: "vga",
    price: "₩1,915,800",
    image: "./img/product00.png",
    desc: [
        "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB",
        "NVIDIA RTX 4070 Ti SUPER",
        "4nm",
        "2340MHz",
        "2640MHz",
        "2655MHz",
        "8448개",
        "PCIe 4.0 x16",
        "GDDR6X",
        "16GB",
        "HDMI2.1 x1, DP1.4 x3",
        "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)",
        "285W",
        "정격파워 750W 이상",
        "16핀 (12VHPWR) x1",
        "323mm",
        "60mm",
        "3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, XTREME TUNER 지원",
        "3년 무상 보증"
    ]
},
    "b": {
        name: "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB",
        category: "vga",
        price: "₩1,044,000",
        image: "./img/product01.png",
        desc: [
            "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB",
            "NVIDIA RTX 5070",
            "4nm",
            "2325MHz",
            "2512MHz",
            "6144개",
            "PCIe 5.0 x16",
            "GDDR7",
            "12GB",
            "192bit",
            "HDMI2.1 x1, DP2.1 x3",
            "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)",
            "정격파워 650W 이상",
            "16핀 (12V2x6) x1",
            "329mm",
            "45mm",
            "3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, DrMOS 기술 적용",
            "3년보증"
        ]
    },
    "c": {
        name: "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져",
        category: "vga",
        price: "₩2,293,200",
        image: "./img/product02.png",
        desc: [
            "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져",
            "NVIDIA RTX 5080",
            "TSMC 4nm",
            "2730MHz",
            "2745MHz",
            "10752개",
            "PCIe 5.0 x16",
            "GDDR7",
            "16GB",
            "HDMI2.1 x1, DP2.1 x3",
            "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)",
            "360W",
            "정격파워 850W 이상",
            "16핀 (12V2x6) x1",
            "357mm",
            "66mm",
            "3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, DrMOS 기술 적용, Dual BIOS 지원, MYSTIC LIGHT 기능 포함",
            "3년 무상 보증"
        ]
    },
    "d": {
        name: "갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB",
        category: "vga",
        price: "₩1,099,900",
        image: "./img/product03.png",
        desc: [
            "갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB",
            "NVIDIA RTX 5070",
            "4nm",
            "2325MHz",
            "2557MHz",
            "6144개",
            "PCIe 5.0 x16",
            "GDDR7",
            "12GB",
            "HDMI2.1 x1, DP2.1 x3",
            "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)",
            "250W",
            "정격파워 650W 이상",
            "16핀 (12V2x6) x1",
            "322mm",
            "52mm",
            "3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함",
            "3년 무상 보증"
        ]
    },
    "e": {
        name: "MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4",
        category: "vga",
        price: "₩1,148,960",
        image: "./img/product04.png",
        desc: [
            "MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4",
            "NVIDIA RTX 5070",
            "4nm",
            "2325MHz",
            "2610MHz",
            "2625MHz",
            "6144개",
            "PCIe 5.0 x16",
            "GDDR7",
            "12GB",
            "HDMI2.1 x1, DP2.1 x3",
            "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)",
            "250W",
            "정격파워 650W 이상",
            "16핀 (12V2x6) x1",
            "338mm",
            "50mm",
            "3팬, 제로팬 기술, 백플레이트 포함, DrMOS 기술 적용, LED 라이트 탑재, MYSTIC LIGHT 기능 포함",
            "3년 무상 보증"
        ]
    },
};

const cpuProducts = {
    "f": {
    name: "인텔 코어 울트라7 시리즈2 265K (애로우레이크)",
    category: "cpu",
    price: "₩539,990",
    image: "./img/product05.png",
    desc: [
        "LGA 1851",
        "P코어 8개 + E코어 12개 (총 20스레드)",
        "DDR5",
        "탑재 (인텔 그래픽스 Xe LPG)",
        "TSMC 3nm",
        "3.9GHz",
        "5.5GHz",
        "36MB",
        "30MB",
        "125-250W",
        "PCIe 5.0, PCIe 4.0",
        "6400MHz",
        "인텔 XTU, 인텔 딥러닝 부스트",
        "미포함",
        "2304점",
        "36309점",
        "$394 (VAT 별도)"
        ]
    },
    "g": {
        name: "AMD 라이젠7-6세대 9700X (그래니트 릿지)",
        category: "cpu",
        price: "₩474,040",
        image: "./img/product06.png",
        desc: [
            "AM5",
            "8코어 / 16스레드",
            "DDR5",
            "탑재 (AMD 라데온 그래픽)",
            "Zen 5",
            "TSMC 4nm",
            "3.8GHz",
            "5.5GHz",
            "8MB",
            "32MB",
            "65W",
            "88W",
            "PCIe 5.0",
            "5600MHz",
            "SMT(하이퍼스레딩), AMD Ryzen Master",
            "미포함",
            "2260점",
            "21436점",
            "$359 (VAT 별도)"
        ]
    },
    "h": {
        name: "AMD 라이젠7-6세대 9800X3D (그래니트 릿지)",
        category: "cpu",
        price: "₩539,990",
        image: "./img/product07.png",
        desc: [
            "AM5",
            "8코어 / 16스레드",
            "DDR5",
            "탑재 (AMD 라데온 그래픽)",
            "Zen 5",
            "TSMC 4nm",
            "3.8GHz",
            "5.5GHz",
            "8MB",
            "32MB",
            "65W",
            "88W",
            "PCIe 5.0",
            "5600MHz",
            "SMT(하이퍼스레딩), AMD Ryzen Master",
            "미포함",
            "2260점",
            "21436점",
            "$359 (VAT 별도)"
        ]
    },
    "i": {
        name: "인텔 코어i7-14세대 14700K (랩터레이크 리프레시)",
        category: "cpu",
        price: "₩552,890",
        image: "./img/product08.png",
        desc: [
            "AM5",
            "8코어 / 16스레드",
            "DDR5",
            "탑재 (AMD 라데온 그래픽)",
            "Zen 5",
            "TSMC 4nm",
            "3.8GHz",
            "5.5GHz",
            "8MB",
            "32MB",
            "65W",
            "88W",
            "PCIe 5.0",
            "5600MHz",
            "SMT(하이퍼스레딩), AMD Ryzen Master",
            "미포함",
            "2260점",
            "21436점",
            "$359 (VAT 별도)"
        ]
    },
    "j": {
        name: "인텔 코어 울트라5 시리즈2 225F (애로우레이크)",
        category: "cpu",
        price: "₩326,990",
        image: "./img/product09.png",
        desc: [
            "소켓1851",
            "P6+E4코어 / 10스레드",
            "DDR5",
            "미탑재",
            "TSMC 3nm",
            "3.3GHz",
            "4.9GHz",
            "22MB",
            "20MB",
            "65W",
            "121W",
            "PCIe 5.0, 4.0",
            "6400MHz",
            "인텔 딥러닝부스트",
            "인텔 기본쿨러 포함",
            "$221 (VAT 별도)"
        ]
      },        
          "cpu1": {
            "name": "인텔 코어i5-14세대 14400F (랩터레이크 리프레시)",
            "category": "cpu",
            "price": "₩185,060",
            "image": "./img/cpu1.png",
            "desc": [
              "인텔(소켓1700)",
              "P6+E4코어",
              "12+4스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:미탑재",
              "10nm(인텔7)",
              "기본 클럭: 2.5GHz",
              "최대 클럭: 4.7GHz",
              "L2 캐시: 9.5MB",
              "L3 캐시: 20MB",
              "PBP-MTP: 65-148W",
              "PCIe5.0, 4.0",
              "4800, 3200MHz",
              "기술 지원: SMT(하이퍼스레딩), 인텔 딥러닝부스트",
              "쿨러: 인텔 기본쿨러 포함",
              "시네벤치R23(싱글): 1790",
              "시네벤치R23(멀티): 17804"
            ]
          },
          "cpu2": {
            "name": "인텔 코어i5-14세대 14600KF (랩터레이크 리프레시)",
            "category": "cpu",
            "price": "₩276,240",
            "image": "./img/cpu2.png",
            "desc": [
              "인텔(소켓1700)",
              "P6+E8코어",
              "12+8스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:미탑재",
              "10nm(인텔7)",
              "기본 클럭: 3.5GHz",
              "최대 클럭: 5.3GHz",
              "L2 캐시: 20MB",
              "L3 캐시: 24MB",
              "PBP-MTP: 125-181W",
              "PCIe5.0, 4.0",
              "5600, 3200MHz",
              "기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2054",
              "시네벤치R23(멀티): 24086"
            ]
          },
          "cpu3": {
            "name": "인텔 코어 울트라9 시리즈2 285K (애로우레이크)",
            "category": "cpu",
            "price": "₩907,850",
            "image": "./img/cpu3.png",
            "desc": [
              "인텔(소켓1851)",
              "P8+E16코어",
              "24스레드",
              "메모리 규격: DDR5",
              "내장그래픽:탑재",
              "TSMC 3nm",
              "기본 클럭: 3.7GHz",
              "최대 클럭: 5.7GHz",
              "L2 캐시: 40MB",
              "L3 캐시: 36MB",
              "PBP-MTP: 125-250W",
              "PCIe5.0, 4.0",
              "6400MHz",
              "인텔 그래픽스(Xe LPG)",
              "기술 지원: 인텔 XTU, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2320",
              "시네벤치R23(멀티): 41558",
              "출시가: 589달러(VAT별도)"
            ]
          },
          "cpu4": {
            "name": "인텔 코어i5-14세대 14600K (랩터레이크 리프레시)",
            "category": "cpu",
            "price": "₩332,390",
            "image": "./img/cpu4.png",
            "desc": [
              "인텔(소켓1700)",
              "P6+E8코어",
              "12+8스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:탑재",
              "10nm(인텔7)",
              "기본 클럭: 3.5GHz",
              "최대 클럭: 5.3GHz",
              "L2 캐시: 20MB",
              "L3 캐시: 24MB",
              "PBP-MTP: 125-181W",
              "PCIe5.0, 4.0",
              "5600, 3200MHz",
              "인텔 UHD 770",
              "기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2069",
              "시네벤치R23(멀티): 25159",
              "출시가: 319달러 (VAT별도)"
            ]
          },
          "cpu5": {
            "name": "인텔 코어 울트라7 시리즈2 265KF (애로우레이크)",
            "category": "cpu",
            "price": "₩445,160",
            "image": "./img/cpu5.png",
            "desc": [
              "인텔(소켓1851)",
              "P8+E12코어",
              "20스레드",
              "메모리 규격: DDR5",
              "내장그래픽:미탑재",
              "TSMC 3nm",
              "기본 클럭: 3.9GHz",
              "최대 클럭: 5.5GHz",
              "L2 캐시: 36MB",
              "L3 캐시: 30MB",
              "PBP-MTP: 125-250W",
              "PCIe5.0, 4.0",
              "6400MHz",
              "기술 지원: 인텔 XTU, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2309",
              "시네벤치R23(멀티): 37278",
              "출시가: 379달러(VAT별도)"
            ]
          },
          "cpu6": {
            "name": "인텔 코어i7-14세대 14700F (랩터레이크 리프레시)",
            "category": "cpu",
            "price": "₩440,840",
            "image": "./img/cpu6.png",
            "desc": [
              "인텔(소켓1700)",
              "P8+E12코어",
              "16+12스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:미탑재",
              "10nm(인텔7)",
              "기본 클럭: 2.1GHz",
              "최대 클럭: 5.4GHz",
              "L2 캐시: 28MB",
              "L3 캐시: 33MB",
              "PBP-MTP: 65-219W",
              "PCIe5.0, 4.0",
              "5600, 3200MHz",
              "기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트",
              "쿨러: 인텔 기본쿨러 포함",
              "시네벤치R23(싱글): 2091",
              "시네벤치R23(멀티): 32090",
              "출시가: 359달러 (VAT별도)"
            ]
          },
          "cpu7": {
            "name": "인텔 코어i7-14세대 14700KF (랩터레이크 리프레시)",
            "category": "cpu",
            "price": "₩471,360",
            "image": "./img/cpu7.png",
            "desc": [
              "인텔(소켓1700)",
              "P8+E12코어",
              "16+12스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:미탑재",
              "10nm(인텔7)",
              "기본 클럭: 3.4GHz",
              "최대 클럭: 5.6GHz",
              "L2 캐시: 28MB",
              "L3 캐시: 33MB",
              "PBP-MTP: 125-253W",
              "PCIe5.0, 4.0",
              "5600, 3200MHz",
              "기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2145",
              "시네벤치R23(멀티): 35218",
              "출시가: 384달러 (VAT별도)"
            ]
          },
          "cpu8": {
            "name": "인텔 코어i5-13세대 13400F (랩터레이크)",
            "category": "cpu",
            "price": "₩188,640",
            "image": "./img/cpu8.png",
            "desc": [
              "인텔(소켓1700)",
              "P6+E4코어",
              "12+4스레드",
              "메모리 규격: DDR5, DDR4",
              "내장그래픽:미탑재",
              "10nm(인텔7)",
              "기본 클럭: 2.5GHz",
              "최대 클럭: 4.6GHz",
              "L2 캐시: 9.5MB",
              "L3 캐시: 20MB",
              "PBP-MTP: 65-148W",
              "PCIe5.0, 4.0",
              "4800, 3200MHz",
              "기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트",
              "쿨러: 인텔 기본쿨러 포함",
              "시네벤치R23(싱글): 1789",
              "시네벤치R23(멀티): 14621",
              "출시가: 196달러 (VAT별도)"
            ]
          },
          "cpu9": {
            "name": "인텔 코어 울트라5 시리즈2 235 (애로우레이크)",
            "category": "cpu",
            "price": "₩379,650",
            "image": "./img/cpu9.png",
            "desc": [
              "인텔(소켓1851)",
              "P6+E8코어",
              "14스레드",
              "메모리 규격: DDR5",
              "내장그래픽:탑재",
              "TSMC 3nm",
              "기본 클럭: 3.4GHz",
              "최대 클럭: 5.0GHz",
              "L2 캐시: 26MB",
              "L3 캐시: 24MB",
              "PBP-MTP: 65-121W",
              "PCIe5.0, 4.0",
              "6400MHz",
              "인텔 그래픽스(Xe LPG)",
              "기술 지원: 인텔 딥러닝부스트",
              "쿨러: 인텔 기본쿨러 포함",
              "출시가: 247달러(VAT별도)"
            ]
          },
          "cpu10": {
            "name": "인텔 코어 울트라5 시리즈2 245K (애로우레이크)",
            "category": "cpu",
            "price": "₩411,060",
            "image": "./img/cpu10.png",
            "desc": [
              "인텔(소켓1851)",
              "P6+E8코어",
              "14스레드",
              "메모리 규격: DDR5",
              "내장그래픽:탑재",
              "TSMC 3nm",
              "기본 클럭: 4.2GHz",
              "최대 클럭: 5.2GHz",
              "L2 캐시: 26MB",
              "L3 캐시: 24MB",
              "PBP-MTP: 125-159W",
              "PCIe5.0, 4.0",
              "6400MHz",
              "인텔 그래픽스(Xe LPG)",
              "기술 지원: 인텔 XTU, 인텔 딥러닝부스트",
              "쿨러: 미포함",
              "시네벤치R23(싱글): 2114",
              "시네벤치R23(멀티): 24935",
              "출시가: 309달러(VAT별도)"
            ]
          }
        };
        
const coolerProducts = {
    "cooler1": {
      name: "DEEPCOOL AG400",
      category: "cooler",
      price: "₩21,760",
      image: "./img/cooler1.png",
      desc: [
        "공랭, 싱글타워형, 팬 쿨러",
        "TDP: 220W",
        "A/S 기간: 1년",
        "인텔 소켓: LGA1851, LGA1700, LGA1200, LGA115x",
        "AMD 소켓: AM5, AM4",
        "크기: 125 x 92 x 150mm",
        "무게: 614g",
        "팬 크기: 120mm",
        "팬 개수: 1개",
        "팬 두께: 25T",
        "팬 커넥터: 4핀",
        "베어링: Hydro(유체)",
        "최대 RPM: 2000 RPM",
        "최대 풍량: 75.89 CFM",
        "풍압(정압): 2.53mmH₂O",
        "최대 팬소음: 31.6dBA",
        "PWM 지원: 지원",
        "LED: non-LED",
        "24년 11월부로 1851소켓 지원 추가"
      ]
    },
  
    "cooler2": {
      name: "PCCOOLER PALADIN 400",
      category: "cooler",
      price: "₩24,630",
      image: "./img/cooler2.png",
      desc: [
        "공랭, 싱글타워형, 팬 쿨러",
        "TDP: 200W",
        "A/S 기간: 3년",
        "인텔 소켓: LGA1851, LGA1700, LGA1200, LGA115x",
        "AMD 소켓: AM5, AM4",
        "크기: 130 x 76 x 157mm",
        "무게: 700g",
        "팬 크기: 130mm",
        "팬 개수: 1개",
        "팬 두께: 25T",
        "팬 커넥터: 4핀",
        "베어링: Hydraulic(유체)",
        "최대 RPM: 1600 RPM",
        "최대 풍량: 81 CFM",
        "풍압(정압): 2.18mmH₂O",
        "최대 팬소음: 28.6dBA",
        "PWM 지원: 지원",
        "LED: non-LED",
        "AM4이탈방지가이드, 24년 11월 AM4 세이프가드 재추가, 12월 AS기간 확대 및 1851소켓지원 추가"
      ]
    },
  
    "cooler3": {
      name: "Thermalright Peerless Assassin 120 SE 서린",
      category: "cooler",
      price: "₩36,178",
      image: "./img/cooler3.png",
      desc: [
        "공랭, 듀얼타워형, 팬 쿨러",
        "TDP: 260W",
        "A/S 기간: 3년",
        "인텔 소켓: LGA1700, LGA1200, LGA115x",
        "AMD 소켓: AM5, AM4",
        "크기: 125 x 135 x 155mm",
        "무게: 850g",
        "팬 크기: 120mm",
        "팬 개수: 2개",
        "팬 두께: 25T",
        "팬 커넥터: 4핀",
        "베어링: S-FDB(유체)",
        "최대 RPM: 1550 RPM",
        "최대 풍량: 66.17 CFM",
        "풍압(정압): 1.53mmH₂O",
        "최대 팬소음: 25.6dBA",
        "PWM 지원: 지원",
        "LED: non-LED",
        "써멀컴파운드(주사기형), 열전도율 12.8W/(m·K), 23년 11월 AM5 소켓 호환 추가"
      ]
    },
  
    "cooler4": {
      name: "잘만 Alpha II A36",
      category: "cooler",
      price: "₩121,800",
      image: "./img/cooler4.png",
      desc: [
        "수랭, 팬 쿨러",
        "TDP: 350W",
        "A/S 기간: 5년+누수보상",
        "인텔 소켓: LGA1851, LGA1700, LGA1200, LGA115x",
        "AMD 소켓: AM5, AM4",
        "라디에이터: 3열, 길이 397mm, 두께 27mm",
        "호스 길이: 400mm",
        "팬 크기: 120mm",
        "팬 개수: 3개",
        "팬 두께: 25T",
        "팬 커넥터: 3-4핀",
        "베어링: Hydro(유체)",
        "최대 RPM: 2000 RPM",
        "최대 풍량: 69.12 CFM",
        "풍압(정압): 2.01mmH₂O",
        "최대 팬소음: 29.7dBA",
        "작동전압: 팬 12V, LED 5V",
        "LED: RGB, LED 라이트, 워터블록/로고 회전, 인디케이터",
        "LED 시스템: AURA SYNC, MYSTIC LIGHT, RGB FUSION, POLYCHROME",
        "PWM 지원: 지원",
        "써멀컴파운드(주사기형), 24년 12월 1851소켓 지원 추가"
      ]
    },
  
    "cooler5": {
      name: "3RSYS Socoool RC1900N 솔더링",
      category: "cooler",
      price: "₩72,590",
      image: "./img/cooler5.png",
      desc: [
        "공랭, 듀얼타워형, 팬 쿨러",
        "TDP: 280W",
        "A/S 기간: 3년",
        "인텔 소켓: LGA1700, LGA1200, LGA115x",
        "AMD 소켓: AM5, AM4",
        "크기: 132 x 140 x 157mm",
        "팬 크기: 130mm, 120mm",
        "팬 개수: 2개",
        "팬 두께: 25T, 28T",
        "팬 커넥터: 4핀",
        "베어링: FDB(유체)",
        "최대 RPM: 1600 RPM, 2200 RPM",
        "최대 풍량: 85 CFM, 70CFM",
        "풍압(정압): 2.0mmH₂O, 3.5mmH₂O",
        "최대 팬소음: 30dBA",
        "작동전압: 팬 12V",
        "PWM 지원: 지원",
        "LED: non-LED",
        "써멀컴파운드(주사기형), 열전도율 12.4W/(m·K), 25년 2월 제품 디자인 변경"
      ]
    }
};
  
const motherboardProducts = {
        "motherboard1": {
          name: "ASUS TUF Gaming B850M-PLUS WIFI STCOM",
          category: "motherboard",
          price: "₩278,860",
          image: "./img/motherboard1.png",
          desc: [
            "AMD(소켓AM5), AMD B850, DDR5",
            "VGA 연결: PCIe5.0 x16",
            "M-ATX (24.4x24.4cm)",
            "전원부: 14+2+1페이즈 (페이즈당 80A, Vcore 출력합계 1120A)",
            "메모리: 8000MHz (PC5-64000), 4개, 최대 192GB, XMP, EXPO",
            "확장슬롯: PCIe5.0, PCIe4.0 / PCIex16: 1개 / PCIex16(at x8): 1개 / PCIex1: 1개",
            "저장장치: M.2 3개(PCIe5.0/4.0/NVMe/PCIe 레인공유), SATA3 4개",
            "후면단자: HDMI, DP, USB3.x 20Gbps/10Gbps/5Gbps, USB 2.0, RJ-45, 오디오잭, BIOS플래시백",
            "USB A타입: 11개, USB C타입: 1개",
            "유선랜: Realtek 2.5Gbps, RJ-45 1개",
            "무선랜(Wi-Fi), 블루투스",
            "오디오: Realtek ALC1220P, 7.1채널(8ch)",
            "내부I/O: USB3.0/2.0 헤더, USB3.1 Type C 헤더, CPU추가팬(OPT) 헤더, 펌프전용 헤더, 시스템팬 4핀 3개, 프론트오디오AAFP 헤더, 침입감지 헤더, COM포트 헤더",
            "특징: DrMOS, 전원부 방열판, M.2 히트싱크, 일체형IO실드, LED라이트, UEFI"
          ]
        },
      
        "motherboard2": {
          name: "GIGABYTE B650M K 제이씨현",
          category: "motherboard",
          price: "₩142,830",
          image: "./img/motherboard2.png",
          desc: [
            "AMD(소켓AM5), AMD B650, DDR5",
            "VGA 연결: PCIe4.0 x16",
            "M-ATX (24.4x24.4cm)",
            "전원부: 8+2+2페이즈",
            "메모리: 8000MHz (PC5-64000), 4개, 최대 192GB, XMP3.0, EXPO",
            "확장슬롯: PCIe4.0, PCIe3.0 / PCIex16: 1개 / PCIex1: 1개",
            "저장장치: M.2 2개(PCIe4.0/NVMe), SATA3 4개",
            "후면단자: HDMI, DP, USB3.x 10Gbps/5Gbps, USB 2.0, RJ-45, 오디오잭, PS/2, BIOS플래시백",
            "USB A타입: 7개, USB C타입: 1개",
            "유선랜: Realtek 2.5Gbps, RJ-45 1개",
            "오디오: Realtek, 7.1채널(8ch)",
            "내부I/O: USB3.0/2.0 헤더, USB3.0 Type C 헤더, RGB 12V 4핀 헤더, ARGB 5V 3핀 헤더, 시스템팬 4핀 2개, TPM 헤더, 프론트오디오AAFP 헤더",
            "특징: 전원부 방열판, M.2 히트싱크, UEFI, 23년 12월 Rev 1.1 변경(전원부, 메모리, ARGB헤더 변경)"
          ]
        },
      
        "motherboard3": {
          name: "ASUS TUF Gaming B760M-PLUS II 코잇",
          category: "motherboard",
          price: "₩182,390",
          image: "./img/motherboard3.png",
          desc: [
            "인텔 B760, 인텔(소켓1700), DDR5",
            "VGA 연결: PCIe5.0 x16",
            "M-ATX (24.4x24.4cm)",
            "전원부: 12+1+1페이즈 (페이즈당 50A, Vcore 출력합계 600A)",
            "메모리: 7800MHz (PC5-62400), 4개, 최대 192GB, XMP",
            "확장슬롯: PCIe5.0/4.0/3.0 / PCIex16: 1개 / PCIex4: 1개 / PCIex1: 1개",
            "저장장치: M.2 3개(PCIe4.0/NVMe), SATA3 4개",
            "후면단자: HDMI, DP, USB3.x 20Gbps/10Gbps/5Gbps, USB 2.0, RJ-45, S/PDIF, 오디오잭",
            "USB A타입: 7개, USB C타입: 1개",
            "유선랜: Realtek 2.5Gbps, RJ-45 1개",
            "오디오: Realtek, 7.1채널(8ch)",
            "내부I/O: 썬더볼트4 헤더, USB4 헤더, USB3.0/2.0 헤더, USB3.1 Type C 헤더, RGB 12V 4핀 헤더, ARGB 5V 3핀 헤더, CPU추가팬(OPT) 헤더, 펌프전용 헤더, 시스템팬 4핀 3개, 디버그LED, 프론트오디오AAFP 헤더, 침입감지 헤더",
            "특징: DrMOS, 전원부 방열판, M.2 히트싱크, UEFI"
          ]
        },
      
        "motherboard4": {
          name: "MSI MAG B760M 박격포 II",
          category: "motherboard",
          price: "₩184,970",
          image: "./img/motherboard4.png",
          desc: [
            "인텔 B760, 인텔(소켓1700), DDR5",
            "VGA 연결: PCIe5.0 x16",
            "M-ATX (24.4x24.4cm)",
            "전원부: 12+1+1페이즈 (페이즈당 75A, Vcore 출력합계 900A)",
            "메모리: 7800MHz (PC5-62400), 4개, 최대 256GB, XMP3.0",
            "확장슬롯: PCIe5.0/3.0 / PCIex16: 1개 / PCIex4: 1개",
            "저장장치: M.2 3개(PCIe4.0/NVMe/SATA), SATA3 4개",
            "후면단자: HDMI, DP, USB3.x 20Gbps/10Gbps, USB 2.0, RJ-45, S/PDIF, 오디오잭",
            "USB A타입: 7개, USB C타입: 1개",
            "유선랜: Realtek 8125BG 2.5Gbps, RJ-45 1개",
            "오디오: Realtek ALC897, 7.1채널(8ch)",
            "내부I/O: USB3.0/2.0 헤더, USB3.1 Type C 헤더, RGB 12V 4핀 헤더, ARGB 5V 3핀 헤더, 펌프전용 헤더, 시스템팬 4핀 4개, TPM 헤더, 디버그LED, 프론트오디오AAFP 헤더",
            "특징: SPS(DrMOS), 전원부 방열판, M.2 히트싱크, UEFI"
          ]
        },
      
        "motherboard5": {
          name: "ASRock B650M Pro X3D 에즈윈",
          category: "motherboard",
          price: "₩193,670",
          image: "./img/motherboard5.png",
          desc: [
            "AMD(소켓AM5), AMD B650, DDR5",
            "VGA 연결: PCIe5.0 x16",
            "M-ATX (24.4x24.4cm)",
            "전원부: 8+2+1페이즈",
            "메모리: 8000MHz (PC5-64000), 4개, 최대 256GB, EXPO",
            "확장슬롯: PCIe5.0/4.0 / PCIex16: 1개 / PCIex4: 1개",
            "저장장치: M.2 3개(PCIe5.0/4.0/NVMe/PCIe 레인공유), SATA3 4개",
            "후면단자: HDMI, DP, USB3.x 10Gbps/5Gbps, USB 2.0, RJ-45, 오디오잭, BIOS플래시백",
            "USB A타입: 7개, USB C타입: 1개",
            "유선랜: Dragon RTL8125BG 2.5Gbps, RJ-45 1개",
            "M.2 Key-E(모듈별매)",
            "오디오: Realtek ALC897, 7.1채널(8ch)",
            "내부I/O: USB3.0/2.0 헤더, USB3.2 Type C 헤더, USB3.0 Type C 헤더, RGB 12V 4핀 헤더, ARGB 5V 3핀 헤더, CPU추가팬(OPT) 헤더, 시스템팬 4핀 3개, TPM 헤더, 프론트오디오AAFP 헤더",
            "특징: DrMOS, 전원부 방열판, M.2 히트싱크, 일체형IO실드, LED라이트, UEFI",
            "23년 11월부로 지원메모리 속도 및 용량 192GB로 확장"
          ]
        }

};
      
const ramProducts = {
    "ram1": {
  name: "삼성전자 DDR5-5600 (16GB)",
  category: "ram",
  price: "₩74,650",
  image: "./img/ram1.png",
  desc: [
    "데스크탑용",
    "DDR5",
    "5600MHz (PC5-44800)",
    "용량: 16GB (1개)",
    "램타이밍: 표준",
    "전압: 1.10V",
    "온다이ECC: 미지원",
    "히트싱크: 미포함",
    "높이: 표준",
    "모듈제조사: 삼성전자"
  ]
},

"ram2": {
  name: "TeamGroup DDR5-5600 CL46 Elite 서린 (16GB)",
  category: "ram",
  price: "₩63,450",
  image: "./img/ram2.png",
  desc: [
    "데스크탑용",
    "DDR5",
    "5600MHz (PC5-44800)",
    "용량: 16GB (1개)",
    "램타이밍: CL46-46-46-90",
    "전압: 1.10V",
    "온다이ECC: 지원",
    "히트싱크: 미포함",
    "높이: 32mm"
  ]
},

"ram3": {
  name: "ESSENCORE KLEVV DDR5-5600 CL46 파인인포 (16GB)",
  category: "ram",
  price: "₩125,230",
  image: "./img/ram3.png",
  desc: [
    "데스크탑용",
    "DDR5",
    "5600MHz (PC5-44800)",
    "용량: 16GB (1개)",
    "램타이밍: CL46-46-46-90",
    "전압: 1.10V",
    "온다이ECC: 지원",
    "히트싱크: 미포함",
    "높이: 31.25mm",
    "모듈제조사: SK하이닉스",
    "A다이 언락"
  ]
},

"ram4": {
  name: "마이크론 Crucial DDR4-3200 CL22 대원씨티에스 (16GB)",
  category: "ram",
  price: "₩38,000",
  image: "./img/ram4.png",
  desc: [
    "데스크탑용",
    "DDR4",
    "3200MHz (PC4-25600)",
    "용량: 16GB (1개)",
    "램타이밍: CL22",
    "전압: 1.20V",
    "온다이ECC: 미지원",
    "히트싱크: 미포함",
    "높이: 표준"
  ]
},

"ram5": {
  name: "G.SKILL DDR5-6000 CL32 TRIDENT Z5 NEO RGB J 패키지",
  category: "ram",
  price: "₩363,940",
  image: "./img/ram5.png",
  desc: [
    "데스크탑용",
    "DDR5",
    "6000MHz (PC5-48000)",
    "용량: 32GB (16GB x2)",
    "램타이밍: CL32-38-38-96",
    "전압: 1.40V",
    "온다이ECC: 지원",
    "히트싱크: 방열판(블랙)",
    "높이: 44mm",
    "LED: RGB",
    "LED 시스템: AURA SYNC, MYSTIC LIGHT, RGB FUSION, POLYCHROME",
    "EXPO 지원"
  ]
}

};

const ssdProducts = {
    "ssd1": {
  name: "삼성전자 980 M.2 NVMe (1TB)",
  category: "ssd",
  price: "₩119,890",
  image: "./img/ssd1.png",
  desc: [
    "M.2 (2280)",
    "PCIe3.0x4 (32GT/s)",
    "TLC(토글)",
    "컨트롤러: 삼성 Pablo",
    "순차읽기: 3,100MB/s",
    "순차쓰기: 2,600MB/s",
    "읽기IOPS: 400K",
    "쓰기IOPS: 470K",
    "TRIM, GC, SLC캐싱, S.M.A.R.T, DEVSLP, HMB, AES 암호화, 전용 S/W",
    "MTBF: 150만시간",
    "TBW: 300TB",
    "A/S기간: 5년, 제한보증",
    "방열판 미포함",
    "두께: 2.38mm",
    "무게: 8g"
  ]
},

"ssd2": {
  name: "SK하이닉스 Platinum P41 M.2 NVMe (1TB)",
  category: "ssd",
  price: "₩147,870",
  image: "./img/ssd2.png",
  desc: [
    "M.2 (2280)",
    "PCIe4.0x4 (64GT/s)",
    "TLC(토글)",
    "DRAM 탑재: DDR4 1GB",
    "컨트롤러: SK하이닉스 Aries",
    "순차읽기: 7,000MB/s",
    "순차쓰기: 6,500MB/s",
    "읽기IOPS: 1,400K",
    "쓰기IOPS: 1,300K",
    "TRIM, GC, SLC캐싱, S.M.A.R.T, DEVSLP, AES 암호화, 전용 S/W",
    "MTBF: 150만시간",
    "TBW: 750TB",
    "PS5 호환",
    "A/S기간: 5년, 제한보증",
    "방열판 미포함",
    "두께: 2.38mm",
    "무게: 7g"
  ]
},

"ssd3": {
  name: "Western Digital WD BLACK SN850X M.2 NVMe (1TB)",
  category: "ssd",
  price: "₩129,930",
  image: "./img/ssd3.png",
  desc: [
    "M.2 (2280)",
    "PCIe4.0x4 (64GT/s)",
    "TLC",
    "DRAM 탑재: DDR4 2GB",
    "컨트롤러: WD",
    "순차읽기: 7,300MB/s",
    "순차쓰기: 6,600MB/s",
    "읽기IOPS: 1,200K",
    "쓰기IOPS: 1,100K",
    "TRIM, SLC캐싱, S.M.A.R.T, 전용 S/W",
    "TBW: 1,200TB",
    "PS5 호환",
    "A/S기간: 5년, 제한보증",
    "방열판 미포함",
    "두께: 2.38mm",
    "무게: 7.5g"
  ]
},

"ssd4": {
  name: "솔리다임 P44 Pro M.2 NVMe 벌크",
  category: "ssd",
  price: "₩121,600",
  image: "./img/ssd4.png",
  desc: [
    "M.2 (2280)",
    "PCIe4.0x4 (64GT/s)",
    "TLC(토글)",
    "DRAM 탑재: DDR4 2GB",
    "컨트롤러: SK하이닉스 Aries",
    "순차읽기: 7,000MB/s",
    "순차쓰기: 6,500MB/s",
    "읽기IOPS: 1,400K",
    "쓰기IOPS: 1,300K",
    "TRIM, SLC캐싱, S.M.A.R.T, AES 암호화",
    "MTBF: 160만시간",
    "TBW: 1,200TB",
    "PS5 호환",
    "A/S기간: 3년, 제한보증",
    "방열판 미포함",
    "두께: 2.38mm",
    "무게: 7g"
  ]
},

"ssd5": {
  name: "ESSENCORE KLEVV CRAS C910 M.2 NVMe (1TB)",
  category: "ssd",
  price: "",
  image: "./img/ssd5.png",
  desc: [
    "M.2 (2280)",
    "PCIe4.0x4 (64GT/s)",
    "TLC",
    "컨트롤러: InnoGrit IG5220",
    "순차읽기: 5,000MB/s",
    "순차쓰기: 4,800MB/s",
    "읽기IOPS: 620K",
    "쓰기IOPS: 615K",
    "TRIM, SLC캐싱, S.M.A.R.T, ECC, HMB, AES 암호화, 전용 S/W",
    "TBW: 700TB",
    "A/S기간: 5년, 제한보증",
    "방열판 포함",
    "두께: 3.4mm",
    "무게: 10g"
  ]
}

};


const hddProducts = {
    "hdd1": {
  name: "Seagate BarraCuda 5400/256M (8TB)",
  category: "hdd",
  price: "₩199,260",
  image: "./img/hdd1.png",
  desc: [
    "HDD (PC용)",
    "8.9cm(3.5인치)",
    "8TB",
    "SATA3(6Gb/s)",
    "5,400RPM",
    "메모리 256MB",
    "최대전송속도: 190MB/s",
    "기록방식: SMR(PMR)",
    "두께: 26.11mm",
    "소음(유휴/탐색): 23/25dB",
    "A/S 정보: 2년",
    "다층캐싱(MTC)",
    "무게: 630g"
  ]
},

"hdd2": {
  name: "Western Digital WD Blue 5400/256M (6TB)",
  category: "hdd",
  price: "₩186,190",
  image: "./img/hdd2.png",
  desc: [
    "HDD (PC용)",
    "8.9cm(3.5인치)",
    "6TB",
    "SATA3(6Gb/s)",
    "5,400RPM",
    "메모리 256MB",
    "최대전송속도: 180MB/s",
    "기록방식: CMR(PMR)",
    "두께: 26.1mm",
    "소음(유휴/탐색): 23/27dB",
    "A/S 정보: 2년",
    "NoTouch 램프로드 기술"
  ]
},

"hdd3": {
  name: "Seagate BarraCuda 7200/256M (2TB)",
  category: "hdd",
  price: "₩85,310",
  image: "./img/hdd3.png",
  desc: [
    "HDD (PC용)",
    "8.9cm(3.5인치)",
    "2TB",
    "SATA3 (6Gb/s)",
    "7,200RPM",
    "메모리 256MB",
    "최대전송속도: 220MB/s",
    "기록방식: SMR(PMR)",
    "두께: 20.2mm",
    "A/S 정보: 2년",
    "다층캐싱(MTC)",
    "무게: 최대 490g"
  ]
},

"hdd4": {
  name: "Western Digital WD Blue 5640/256M (8TB)",
  category: "hdd",
  price: "₩195,070",
  image: "./img/hdd4.png",
  desc: [
    "HDD (PC용)",
    "8.9cm(3.5인치)",
    "8TB",
    "SATA3(6Gb/s)",
    "5,640RPM",
    "메모리 256MB",
    "최대전송속도: 215MB/s",
    "기록방식: CMR(PMR)",
    "두께: 26.1mm",
    "소음(유휴/탐색): 24/28dB",
    "A/S 정보: 2년"
  ]
},

"hdd5": {
  name: "Seagate IronWolf 5400/256M (8TB)",
  category: "hdd",
  price: "₩326,540",
  image: "./img/hdd5.png",
  desc: [
    "HDD (NAS용)",
    "8.9cm(3.5인치)",
    "8TB",
    "SATA3 (6Gb/s)",
    "5,400RPM",
    "메모리 256MB",
    "최대전송속도: 202MB/s",
    "기록방식: CMR(PMR)",
    "두께: 26.11mm",
    "RV센서",
    "S.M.A.R.T 지원",
    "사용보증: 100만시간",
    "소음(유휴/탐색): 25/26dB",
    "A/S 정보: 3년, 데이터 복구 3년",
    "무게: 630g"
  ]
}


};


const powerProducts = {
    "power1": {
  name: "마이크로닉스 Classic II 풀체인지 700W 80PLUS브론즈 ATX3.1",
  category: "power",
  price: "₩83,560",
  image: "./img/power1.png",
  desc: [
    "ATX 파워",
    "정격 700W",
    "80 PLUS 브론즈",
    "케이블연결: 케이블일체형",
    "ETA인증: BRONZE",
    "LAMBDA인증: STANDARD",
    "전압변동: ±0.3%",
    "+12V 싱글레일, +12V 가용률 100%",
    "액티브PFC, PF(역률): 99%",
    "120mm 팬, 깊이: 140mm",
    "무상 7년",
    "커넥터: 메인전원 24핀(20+4), 보조전원 8+4+4핀 1개, PCIe 16핀(12+4) 12V2x6 1개, PCIe 8핀(6+2) 2개, SATA 6개, IDE 4핀 4개",
    "팬리스모드, 자동 팬 조절, 대기전력 1W 미만, 플랫케이블"
  ]
},

"power2": {
  name: "잘만 GigaMax III 850W 80PLUS브론즈 모듈러 ATX3.1",
  category: "power",
  price: "₩91,220",
  image: "./img/power2.png",
  desc: [
    "ATX 파워",
    "정격 850W",
    "80 PLUS 브론즈",
    "케이블연결: 세미모듈러",
    "ETA인증: SILVER",
    "LAMBDA인증: STANDARD++",
    "+12V 싱글레일, +12V 가용률 100%",
    "액티브PFC, PF(역률): 99%",
    "120mm 팬, 깊이: 140mm",
    "무상 7년",
    "커넥터: 메인전원 24핀, 보조전원 8+4+4핀 1개, PCIe 16핀(12+4) 12V2x6 1개, PCIe 8핀(6+2) 4개, SATA 6개, IDE 4핀 3개",
    "대기전력 1W 미만, 플랫케이블"
  ]
},

"power3": {
  name: "darkFlash 퍼펙트모스트 850W 80PLUS골드 풀모듈러 ATX3.1 블랙",
  category: "power",
  price: "₩110,600",
  image: "./img/power3.png",
  desc: [
    "ATX 파워",
    "정격 850W",
    "80 PLUS 골드",
    "케이블연결: 풀모듈러",
    "+12V 싱글레일, +12V 가용률 100%",
    "액티브PFC, PF(역률): 99%",
    "120mm 팬, 깊이: 140mm",
    "무상 10년",
    "커넥터: 메인전원 24핀(20+4), 보조전원 8핀(4+4) 2개, PCIe 16핀(12+4) 12V2x6 1개, PCIe 8핀(6+2) 3개, SATA 7개, IDE 4핀 5개",
    "팬리스모드, 자동 팬 조절, 대기전력 1W 미만"
  ]
},

"power4": {
  name: "시소닉 NEW FOCUS V4 GX-1000 GOLD 풀모듈러 ATX3.1",
  category: "power",
  price: "₩244,980",
  image: "./img/power4.png",
  desc: [
    "ATX 파워",
    "정격 1000W",
    "80 PLUS 골드",
    "케이블연결: 풀모듈러",
    "ETA인증: GOLD",
    "LAMBDA인증: A-",
    "+12V 싱글레일, +12V 가용률 99%",
    "액티브PFC, PF(역률): 99%",
    "135mm 팬, 깊이: 140mm",
    "무상 10년",
    "커넥터: 메인전원 24핀(20+4), 보조전원 8핀(4+4) 2개, PCIe 16핀(12+4) 12V2x6 1개, PCIe 8핀(6+2) 3개, SATA 8개, IDE 4핀 3개",
    "팬리스모드, 자동 팬 조절, 대기전력 1W 미만"
  ]
},

"power5": {
  name: "마이크로닉스 Classic II 850W 80PLUS골드 풀모듈러 ATX3.1",
  category: "power",
  price: "₩168,960",
  image: "./img/power5.png",
  desc: [
    "ATX 파워",
    "정격 850W",
    "80 PLUS 골드",
    "케이블연결: 풀모듈러",
    "+12V 싱글레일",
    "액티브PFC, PF(역률): 99%",
    "120mm 팬, 깊이: 140mm",
    "무상 10년",
    "커넥터: 메인전원 24핀(20+4), 보조전원 8+4+4핀 1개, PCIe 16핀(12+4) 12V2x6 1개, PCIe 8핀(6+2) 2개, SATA 8개, IDE 4핀 4개, FDD 1개",
    "팬리스모드, 자동 팬 조절, 대기전력 1W 미만, 플랫케이블"
  ]
},

};



// 카테고리 매핑 객체 추가
const categoryMap = {    
    cpu: cpuProducts,
    cooler: coolerProducts,
    motherboard: motherboardProducts,
    ram: ramProducts,
    vga: vgaProducts,
    ssd: ssdProducts,
    hdd: hddProducts,
    power: powerProducts
};

function renderProducts(filterCategory, filters = {}) {
  const container = document.getElementById('product-list-container');
  if (!container) return;
  container.innerHTML = '';

  if (!categoryMap[filterCategory]) return;

  const allProducts = Object.entries(categoryMap[filterCategory]);
  
  // 1. 모든 필터 값을 하나의 배열로 추출 (중복 제거)
  const allFilterValues = Object.values(filters)
    .flat()
    .map(v => v.toLowerCase());

  // 2. 상품 필터링
  const filteredProducts = allProducts.filter(([id, product]) => {
    if (allFilterValues.length === 0) return true;

    // 3. 상품 정보 문자열화 (이름 + 설명)
    const productInfo = [
      product.name, 
      ...product.desc
    ].join(' ').toLowerCase();

    // 4. 모든 필터 값이 상품 정보에 포함되는지 확인 (AND 조건)
    return allFilterValues.every(filterValue => 
      productInfo.includes(filterValue)
    );
  });

  // 5. 필터링된 상품 렌더링
  filteredProducts.forEach(([id, product]) => {
    const descHtml = product.desc.join(" / ");
    const html = `
      <div class="product-list-item">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-main-info">
          <div class="product-title">
            <a href="product.html?id=${id}" class="product-link">
              ${product.name}
            </a>
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

