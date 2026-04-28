const prompts = [
  { category: "실사", title: "도시 야경 인물 사진", model: "공통", text: "비 오는 밤 서울 도심의 네온사인을 배경으로 한 인물 사진, 젖은 아스팔트 반사, 85mm 렌즈, 얕은 심도, 자연스러운 표정, 시네마틱 조명, 고해상도" },
  { category: "실사", title: "아침 카페 라이프스타일", model: "공통", text: "햇살이 들어오는 작은 카페에서 노트북으로 일하는 사람, 따뜻한 자연광, 실제 잡지 화보 느낌, 부드러운 색감, 현실적인 피부 질감" },
  { category: "실사", title: "해변 러닝 장면", model: "공통", text: "일출 시간 해변을 달리는 러너, 역광, 모래 입자, 운동복 디테일, 생동감 있는 동작, 다큐멘터리 사진 스타일" },
  { category: "실사", title: "전문가 프로필", model: "공통", text: "차분한 회색 배경 앞의 전문가 헤드샷, 신뢰감 있는 표정, 단정한 의상, 부드러운 스튜디오 조명, 링크드인 프로필 사진 스타일" },
  { category: "실사", title: "가족 피크닉", model: "공통", text: "봄날 공원에서 피크닉을 즐기는 가족, 자연스러운 웃음, 돗자리와 과일 바구니, 따뜻한 컬러 그레이딩, 현실적인 스냅 사진" },
  { category: "실사", title: "산악 캠핑", model: "공통", text: "별이 가득한 산 정상 캠핑 장면, 텐트 안에서 새어 나오는 따뜻한 빛, 은하수, 장노출 사진, 선명한 자연 풍경" },
  { category: "실사", title: "전통시장 음식", model: "공통", text: "한국 전통시장의 길거리 음식 클로즈업, 김이 나는 떡볶이와 어묵, 활기찬 배경, 식욕을 돋우는 색감, 사실적인 질감" },
  { category: "실사", title: "홈 오피스", model: "공통", text: "정돈된 홈 오피스 책상, 노트북, 식물, 커피잔, 오전 자연광, 생산적인 분위기, 인테리어 매거진 사진" },
  { category: "실사", title: "겨울 여행 스냅", model: "공통", text: "눈 내리는 작은 마을 골목을 걷는 여행자, 코트와 목도리, 따뜻한 창문 불빛, 영화 같은 겨울 감성" },
  { category: "실사", title: "셰프의 손", model: "공통", text: "고급 레스토랑 주방에서 셰프가 플레이팅하는 손 클로즈업, 접시 위 소스 디테일, 전문적인 조리 공간, 사실적인 음식 사진" },

  { category: "제품", title: "미니멀 화장품", model: "공통", text: "무광 유리 용기의 스킨케어 제품, 깨끗한 흰 배경, 물방울 디테일, 부드러운 그림자, 프리미엄 브랜드 광고 사진" },
  { category: "제품", title: "스마트워치 광고", model: "공통", text: "검은색 스마트워치 제품 렌더, 화면에 건강 데이터 UI, 금속 질감, 어두운 배경의 림 라이트, 고급 테크 광고 스타일" },
  { category: "제품", title: "커피 원두 패키지", model: "공통", text: "크래프트 종이 커피 원두 패키지와 원두가 흩어진 장면, 따뜻한 스튜디오 조명, 자연 친화적인 브랜드 무드" },
  { category: "제품", title: "운동화 상세컷", model: "공통", text: "새로운 러닝화의 측면 제품 사진, 공중에 살짝 떠 있는 구성, 먼지 입자와 역동적인 조명, 선명한 소재 질감" },
  { category: "제품", title: "향수 병", model: "공통", text: "투명한 향수 병이 물결 반사 위에 놓인 장면, 파스텔 배경, 유리 굴절, 럭셔리 뷰티 캠페인 이미지" },
  { category: "제품", title: "친환경 텀블러", model: "공통", text: "스테인리스 텀블러와 재사용 가능한 빨대, 나무 테이블, 초록 식물 배경, 지속가능한 라이프스타일 제품 사진" },
  { category: "제품", title: "무선 이어폰", model: "공통", text: "흰색 무선 이어폰 케이스가 열려 있는 장면, 깨끗한 반사면, 부드러운 그림자, 애플 스타일의 미니멀 제품 촬영" },
  { category: "제품", title: "수제 비누", model: "공통", text: "천연 수제 비누 여러 개와 말린 허브, 린넨 천, 부드러운 자연광, 아늑한 공방 브랜드 이미지" },
  { category: "제품", title: "게이밍 키보드", model: "공통", text: "RGB 조명이 켜진 기계식 게이밍 키보드 클로즈업, 어두운 책상, 선명한 키캡 질감, 사이버펑크 분위기" },
  { category: "제품", title: "초콜릿 박스", model: "공통", text: "고급 수제 초콜릿 선물 박스, 벨벳 리본, 따뜻한 갈색 배경, 달콤하고 프리미엄한 광고 이미지" },

  { category: "캐릭터", title: "판타지 마법사", model: "공통", text: "푸른 망토를 입은 젊은 마법사 캐릭터, 빛나는 수정 지팡이, 고대 도서관 배경, 섬세한 의상, 게임 콘셉트 아트" },
  { category: "캐릭터", title: "사이버 닌자", model: "공통", text: "네온 도시 옥상에 선 사이버 닌자, 검은 전투복과 발광 회로, 비 오는 밤, 역동적인 포즈, 미래적 캐릭터 디자인" },
  { category: "캐릭터", title: "동화 속 탐험가", model: "공통", text: "작은 가방을 멘 어린 탐험가 캐릭터, 숲속 지도와 랜턴, 따뜻한 그림책 일러스트 스타일, 호기심 많은 표정" },
  { category: "캐릭터", title: "우주 파일럿", model: "공통", text: "헬멧을 든 우주 파일럿, 반짝이는 우주선 격납고, 실용적인 슈트 디자인, SF 영화 포스터 느낌" },
  { category: "캐릭터", title: "요리사 마스코트", model: "공통", text: "친근한 요리사 마스코트 캐릭터, 큰 모자와 앞치마, 밝은 미소, 음식 배달 앱에 어울리는 3D 스타일" },
  { category: "캐릭터", title: "중세 기사", model: "공통", text: "은빛 갑옷을 입은 중세 기사, 성문 앞에서 검을 든 자세, 현실적인 금속 반사, 장엄한 판타지 분위기" },
  { category: "캐릭터", title: "아이돌 콘셉트", model: "공통", text: "미래적인 무대 의상을 입은 K-pop 아이돌 콘셉트 캐릭터, 화려한 조명, 자신감 있는 포즈, 앨범 커버 스타일" },
  { category: "캐릭터", title: "로봇 조수", model: "공통", text: "작고 귀여운 가정용 로봇 조수, 둥근 형태, LED 표정, 깨끗한 주방 배경, 친근한 3D 렌더" },
  { category: "캐릭터", title: "탐정 캐릭터", model: "공통", text: "긴 코트를 입은 탐정 캐릭터, 안개 낀 골목과 가로등, 빈티지 누아르 분위기, 날카로운 눈빛" },
  { category: "캐릭터", title: "힐러 캐릭터", model: "공통", text: "빛의 마법을 사용하는 힐러 캐릭터, 흰색과 금색 의상, 떠 있는 문양, 부드럽고 신성한 판타지 일러스트" },

  { category: "SNS", title: "인스타 감성 브런치", model: "공통", text: "인스타그램 피드용 브런치 테이블 사진, 팬케이크와 과일, 밝은 자연광, 위에서 내려다본 구도, 깔끔한 라이프스타일 무드" },
  { category: "SNS", title: "릴스 썸네일 여행", model: "공통", text: "여행 릴스 썸네일 이미지, 파란 하늘과 바다 앞에 선 여행자, 중앙에 여백, 밝고 선명한 색감, 클릭을 부르는 구성" },
  { category: "SNS", title: "운동 전후 콘셉트", model: "공통", text: "피트니스 계정용 운동 전후 콘셉트 이미지, 헬스장 거울 앞, 건강하고 긍정적인 분위기, 과장 없는 현실적 스타일" },
  { category: "SNS", title: "책 추천 포스트", model: "공통", text: "책 추천 카드뉴스 첫 장에 어울리는 이미지, 열린 책과 따뜻한 조명, 차분한 책상, 텍스트를 넣을 넓은 여백" },
  { category: "SNS", title: "뷰티 루틴", model: "공통", text: "아침 뷰티 루틴을 보여주는 욕실 선반, 스킨케어 제품과 수건, 깨끗한 색감, 숏폼 커버 이미지" },
  { category: "SNS", title: "홈카페", model: "공통", text: "홈카페 라떼아트와 디저트, 창가 테이블, 부드러운 빛, 아늑하고 공유하고 싶은 분위기" },
  { category: "SNS", title: "공부 자극", model: "공통", text: "밤늦게 공부하는 책상, 스탠드 조명, 노트와 필기구, 집중감 있는 분위기, 스터디그램 이미지" },
  { category: "SNS", title: "반려동물 상품", model: "공통", text: "반려동물 용품 홍보용 소셜 이미지, 깨끗한 거실과 귀여운 강아지 장난감, 밝고 신뢰감 있는 사진" },
  { category: "SNS", title: "패션 데일리룩", model: "공통", text: "도시 골목에서 촬영한 데일리룩 스트리트 패션, 자연스러운 포즈, 트렌디한 색감, 모바일 피드에 어울리는 세로 구도" },
  { category: "SNS", title: "명언 배경", model: "공통", text: "짧은 명언을 넣기 좋은 미니멀 배경 이미지, 새벽 하늘과 잔잔한 호수, 넓은 중앙 여백, 평온한 분위기" },

  { category: "광고", title: "여름 음료 광고", model: "공통", text: "차가운 과일 탄산음료 광고 이미지, 얼음과 물방울, 상큼한 과일 조각, 강렬한 여름 햇빛, 제품 중심 구성" },
  { category: "광고", title: "온라인 강의 배너", model: "공통", text: "온라인 강의 홍보 배너용 이미지, 노트북 화면과 학습 노트, 전문적이고 깔끔한 분위기, 오른쪽 텍스트 여백" },
  { category: "광고", title: "부동산 분양", model: "공통", text: "고급 아파트 단지 광고 이미지, 해질녘 외관과 조경, 따뜻한 실내 불빛, 신뢰감 있는 프리미엄 분위기" },
  { category: "광고", title: "헬스장 프로모션", model: "공통", text: "헬스장 프로모션 광고 이미지, 운동기구와 역동적인 조명, 강한 에너지, 텍스트를 넣을 어두운 여백" },
  { category: "광고", title: "여행 패키지", model: "공통", text: "휴양지 여행 패키지 광고, 투명한 바다와 리조트 수영장, 밝은 하늘, 예약을 유도하는 시원한 구성" },
  { category: "광고", title: "모바일 앱 출시", model: "공통", text: "모바일 앱 출시 캠페인 이미지, 스마트폰 목업과 다채로운 UI 카드, 현대적이고 신뢰감 있는 테크 브랜드 무드" },
  { category: "광고", title: "치과 클리닉", model: "공통", text: "치과 클리닉 광고 이미지, 밝고 청결한 진료실, 친절한 의료진 분위기, 과도하게 무섭지 않은 신뢰 중심 구성" },
  { category: "광고", title: "프리미엄 침구", model: "공통", text: "고급 침구 브랜드 광고, 아침 햇살이 들어오는 침실, 깨끗한 흰 이불 질감, 편안함과 품질을 강조한 사진" },
  { category: "광고", title: "친환경 캠페인", model: "공통", text: "친환경 브랜드 캠페인 이미지, 재활용 소재 제품과 싱그러운 식물, 자연광, 정직하고 투명한 브랜드 인상" },
  { category: "광고", title: "블랙프라이데이", model: "공통", text: "블랙프라이데이 세일 배너 배경, 검은 쇼핑백과 금색 조명, 강한 대비, 중앙에 큰 할인 문구를 넣을 여백" },

  { category: "배경", title: "모바일 배경화면", model: "공통", text: "스마트폰 배경화면용 추상 이미지, 부드러운 유리 질감과 색상 흐름, 차분하지만 선명한 색감, 세로 구도, 텍스트 없음" },
  { category: "배경", title: "우주 성운", model: "공통", text: "깊은 우주의 성운 배경, 보라색과 청록색 가스 구름, 별빛 디테일, 8K 배경화면, 웅장한 스케일" },
  { category: "배경", title: "숲속 안개", model: "공통", text: "이른 아침 안개 낀 숲길, 부드러운 빛줄기, 고요한 분위기, 데스크톱 배경화면, 자연스럽고 선명한 풍경" },
  { category: "배경", title: "일본 골목", model: "공통", text: "비 오는 밤 일본식 좁은 골목, 작은 간판과 우산, 젖은 바닥 반사, 애니메이션 배경화면 스타일" },
  { category: "배경", title: "미래 도시", model: "공통", text: "고층 빌딩과 공중 교통이 있는 미래 도시 전경, 노을 하늘, 넓은 파노라마 구도, SF 콘셉트 아트" },
  { category: "배경", title: "명상 공간", model: "공통", text: "조용한 명상 공간 배경, 낮은 나무 플랫폼과 물, 은은한 햇살, 차분한 자연 색감, 앱 배경에 적합" },
  { category: "배경", title: "사막 도로", model: "공통", text: "끝없이 이어지는 사막 도로, 붉은 바위산, 맑은 하늘, 영화 같은 로드트립 배경화면" },
  { category: "배경", title: "눈 덮인 산맥", model: "공통", text: "눈 덮인 산맥과 푸른 새벽 하늘, 깨끗한 공기감, 넓은 원경, 고해상도 자연 배경" },
  { category: "배경", title: "로파이 방", model: "공통", text: "비 오는 창밖을 바라보는 로파이 작업방, 책상 조명과 음반, 차분한 밤 분위기, 일러스트 배경" },
  { category: "배경", title: "화이트 스튜디오", model: "공통", text: "제품 촬영용 흰색 스튜디오 배경, 부드러운 그림자와 곡면 벽, 깨끗한 공간감, 상품 합성에 적합" },

  { category: "음식", title: "수제 버거", model: "공통", text: "육즙이 살아 있는 수제 버거 클로즈업, 녹은 치즈와 신선한 채소, 어두운 배경, 식욕을 자극하는 광고 사진" },
  { category: "음식", title: "파스타 플레이팅", model: "공통", text: "화이트 접시에 담긴 토마토 파스타, 바질과 파마산 치즈, 고급 레스토랑 플레이팅, 자연스러운 증기" },
  { category: "음식", title: "딸기 케이크", model: "공통", text: "생딸기 케이크 한 조각, 부드러운 크림 질감, 밝은 파스텔 배경, 디저트 카페 홍보 이미지" },
  { category: "음식", title: "초밥 세트", model: "공통", text: "신선한 초밥 세트, 나무 접시와 간장 종지, 미니멀한 일본식 테이블, 선명한 생선 질감" },
  { category: "음식", title: "한국식 한상", model: "공통", text: "정갈한 한국식 한상 차림, 밥과 국, 여러 반찬, 위에서 내려다본 구도, 따뜻하고 건강한 느낌" },
  { category: "음식", title: "라멘", model: "공통", text: "진한 국물의 라멘 한 그릇, 반숙 계란과 차슈, 김이 올라오는 장면, 일본 라멘집 분위기" },
  { category: "음식", title: "비건 샐러드", model: "공통", text: "컬러풀한 비건 샐러드 볼, 아보카도와 병아리콩, 신선한 채소, 밝고 건강한 푸드 사진" },
  { category: "음식", title: "크루아상", model: "공통", text: "갓 구운 크루아상과 커피, 바삭한 결이 보이는 클로즈업, 프랑스 베이커리 감성" },
  { category: "음식", title: "칵테일", model: "공통", text: "바 카운터 위 시그니처 칵테일, 투명한 얼음과 과일 장식, 어두운 무드 조명, 고급스러운 주류 광고" },
  { category: "음식", title: "빙수", model: "공통", text: "여름 카페의 망고 빙수, 차가운 얼음 결정과 과일 토핑, 밝고 시원한 색감, 메뉴판용 사진" },

  { category: "인테리어", title: "미니멀 거실", model: "공통", text: "밝은 미니멀 거실 인테리어, 패브릭 소파와 원목 테이블, 큰 창문 자연광, 잡지 화보 스타일" },
  { category: "인테리어", title: "호텔 침실", model: "공통", text: "부티크 호텔 침실, 고급 침구와 간접 조명, 차분한 색상, 여행 예약 사이트에 어울리는 사진" },
  { category: "인테리어", title: "작은 서재", model: "공통", text: "작지만 효율적인 홈 서재, 벽면 책장과 작업 책상, 따뜻한 조명, 현실적인 아파트 인테리어" },
  { category: "인테리어", title: "카페 공간", model: "공통", text: "감성적인 동네 카페 내부, 나무 가구와 식물, 낮은 조도, 편안하고 오래 머물고 싶은 분위기" },
  { category: "인테리어", title: "모던 주방", model: "공통", text: "깔끔한 모던 주방 인테리어, 흰색 상판과 스테인리스 가전, 정돈된 수납, 부동산 매물 사진 스타일" },
  { category: "인테리어", title: "키즈룸", model: "공통", text: "아이 방 인테리어, 낮은 침대와 책장, 부드러운 색상, 안전하고 창의적인 놀이 공간" },
  { category: "인테리어", title: "욕실", model: "공통", text: "스파 같은 욕실 인테리어, 대리석 타일과 원형 거울, 은은한 조명, 프리미엄 리모델링 이미지" },
  { category: "인테리어", title: "오피스 라운지", model: "공통", text: "스타트업 오피스 라운지, 편안한 소파와 협업 테이블, 자연광, 일하기 좋은 현대적 공간" },
  { category: "인테리어", title: "한옥 스테이", model: "공통", text: "현대적으로 리모델링한 한옥 스테이 내부, 목재 구조와 낮은 가구, 따뜻한 조명, 전통과 현대의 조화" },
  { category: "인테리어", title: "드레스룸", model: "공통", text: "정돈된 드레스룸, 옷과 가방이 색상별로 정리된 선반, 부드러운 조명, 라이프스타일 매거진 사진" },

  { category: "일러스트", title: "수채화 마을", model: "공통", text: "언덕 위 작은 마을을 그린 수채화 일러스트, 빨간 지붕과 푸른 하늘, 따뜻하고 평화로운 분위기" },
  { category: "일러스트", title: "우주 고래", model: "공통", text: "별 사이를 헤엄치는 거대한 우주 고래, 몽환적인 색감, 판타지 일러스트, 포스터에 어울리는 구도" },
  { category: "일러스트", title: "고양이 서점", model: "공통", text: "고양이가 운영하는 작은 서점, 책장과 따뜻한 조명, 귀엽고 세밀한 그림책 일러스트" },
  { category: "일러스트", title: "마법 숲 지도", model: "공통", text: "판타지 게임에 나오는 마법 숲 지도, 손그림 느낌, 강과 산, 작은 아이콘, 고풍스러운 종이 질감" },
  { category: "일러스트", title: "레트로 우주 포스터", model: "공통", text: "1970년대 레트로 SF 포스터 스타일, 우주선과 행성, 굵은 색면, 빈티지 인쇄 질감" },
  { category: "일러스트", title: "도시 산책", model: "공통", text: "비 온 뒤 도시를 산책하는 사람, 우산과 반사된 불빛, 감성적인 디지털 일러스트, 부드러운 선" },
  { category: "일러스트", title: "동물 밴드", model: "공통", text: "여러 동물이 재즈 밴드로 연주하는 장면, 작은 클럽 무대, 유쾌한 캐릭터 일러스트" },
  { category: "일러스트", title: "식물 도감", model: "공통", text: "허브 식물을 설명하는 빈티지 식물 도감 스타일 일러스트, 세밀한 잎맥, 깨끗한 흰 배경" },
  { category: "일러스트", title: "판타지 항구", model: "공통", text: "하늘을 나는 배가 정박한 판타지 항구, 활기찬 시장과 등불, 웅장한 세계관 콘셉트 아트" },
  { category: "일러스트", title: "감정 캐릭터", model: "공통", text: "기쁨, 슬픔, 놀람을 표현하는 귀여운 감정 캐릭터 세트, 둥근 형태, 앱 온보딩에 어울리는 일러스트" },

  { category: "패션", title: "봄 룩북", model: "공통", text: "봄 시즌 여성복 룩북 촬영, 밝은 거리 배경, 트렌치코트와 로퍼, 자연스러운 포즈, 패션 매거진 스타일" },
  { category: "패션", title: "아웃도어 재킷", model: "공통", text: "산악 환경에서 촬영한 아웃도어 재킷 광고, 바람에 날리는 원단, 기능성 소재 강조, 역동적인 구도" },
  { category: "패션", title: "주얼리 클로즈업", model: "공통", text: "손가락에 낀 섬세한 반지와 팔찌 클로즈업, 부드러운 피부 톤, 고급스러운 빛 반사, 주얼리 광고 사진" },
  { category: "패션", title: "스니커즈 스트리트", model: "공통", text: "스니커즈 중심의 스트리트 패션 사진, 낮은 앵글, 콘크리트 배경, 젊고 에너지 있는 브랜드 무드" },
  { category: "패션", title: "수트 캠페인", model: "공통", text: "도시 비즈니스 지구에서 촬영한 남성 수트 캠페인, 절제된 포즈, 선명한 재단, 신뢰감 있는 사진" },
  { category: "패션", title: "빈티지 데님", model: "공통", text: "빈티지 데님 재킷과 청바지 룩, 필름 카메라 색감, 오래된 벽돌 건물 배경, 자연스러운 스트리트 화보" },
  { category: "패션", title: "가방 제품 컷", model: "공통", text: "가죽 토트백 제품 사진, 매끄러운 질감과 스티치 디테일, 따뜻한 스튜디오 조명, 프리미엄 잡화 광고" },
  { category: "패션", title: "한복 화보", model: "공통", text: "현대적으로 해석한 한복 패션 화보, 고궁 돌담 배경, 우아한 포즈, 전통 색감과 현대적 구도" },
  { category: "패션", title: "스포츠웨어", model: "공통", text: "러닝 트랙에서 촬영한 스포츠웨어 캠페인, 움직임이 느껴지는 포즈, 선명한 원단 텍스처, 건강한 에너지" },
  { category: "패션", title: "선글라스", model: "공통", text: "여름 해변에서 착용한 선글라스 클로즈업, 렌즈 반사에 바다가 보이는 장면, 시원하고 세련된 광고 이미지" }
];

const grid = document.querySelector("#promptGrid");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const resultCount = document.querySelector("#resultCount");
const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll("[data-view]");

function initAds() {
  const adSlots = document.querySelectorAll(".adsbygoogle");
  adSlots.forEach(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      // Ad blockers or missing AdSense approval can prevent ad initialization.
    }
  });
}

function fillCategories() {
  const categories = [...new Set(prompts.map((prompt) => prompt.category))];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function makeCard(prompt, index) {
  const article = document.createElement("article");
  article.className = "prompt-card";
  article.innerHTML = `
    <header>
      <h3>${index + 1}. ${prompt.title}</h3>
      <span class="badge">${prompt.category}</span>
    </header>
    <p class="prompt-text">${prompt.text}</p>
    <div class="card-actions">
      <span class="model">${prompt.model}</span>
      <button class="copy-button" type="button" data-encoded="true" data-prompt="${encodeURIComponent(prompt.text)}">복사</button>
    </div>
  `;
  return article;
}

function renderPrompts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const filtered = prompts.filter((prompt) => {
    const matchesCategory = category === "all" || prompt.category === category;
    const haystack = `${prompt.category} ${prompt.title} ${prompt.text}`.toLowerCase();
    return matchesCategory && haystack.includes(keyword);
  });

  grid.replaceChildren(...filtered.map(makeCard));
  resultCount.textContent = `${filtered.length}개 프롬프트 표시 중`;
}

async function copyPrompt(button) {
  const text = button.dataset.encoded === "true"
    ? decodeURIComponent(button.dataset.prompt)
    : button.dataset.prompt;
  await navigator.clipboard.writeText(text);
  button.textContent = "완료";
  button.classList.add("copied");
  setTimeout(() => {
    button.textContent = "복사";
    button.classList.remove("copied");
  }, 1200);
}

function showView(viewName) {
  const nextView = document.querySelector(`[data-view="${viewName}"]`) ? viewName : "home";
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === nextView);
  });
  viewLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewLink === nextView);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getViewFromHash() {
  return window.location.hash.replace("#", "") || "home";
}

fillCategories();
renderPrompts();
initAds();
showView(getViewFromHash());

searchInput.addEventListener("input", renderPrompts);
categorySelect.addEventListener("change", renderPrompts);
document.addEventListener("click", (event) => {
  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) {
    event.preventDefault();
    const viewName = viewLink.dataset.viewLink;
    history.pushState(null, "", `#${viewName}`);
    showView(viewName);
    return;
  }

  const button = event.target.closest(".copy-button");
  if (!button) return;
  copyPrompt(button).catch(() => {
    button.textContent = "실패";
    setTimeout(() => {
      button.textContent = "복사";
    }, 1200);
  });
});

window.addEventListener("hashchange", () => {
  showView(getViewFromHash());
});
