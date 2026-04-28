# Prompt Atlas

이미지 생성 AI 프롬프트 100선을 공유하는 정적 HTML 페이지입니다. Cloudflare Pages에서 빌드 과정 없이 바로 서비스할 수 있습니다.

## Cloudflare Pages 배포

1. 이 저장소를 GitHub에 올립니다.
2. Cloudflare Pages에서 저장소를 연결합니다.
3. Build command는 비워둡니다.
4. Build output directory는 `/` 또는 프로젝트 루트로 설정합니다.

## AdSense 설정

`index.html`에서 아래 값을 본인 계정 값으로 교체하세요.

- `ca-pub-XXXXXXXXXXXXXXXX`: AdSense 게시자 ID
- `data-ad-slot="1111111111"`: 상단 광고 단위 ID
- `data-ad-slot="2222222222"`: 하단 광고 단위 ID

AdSense 승인 가능성을 높이려면 실제 운영 전에 개인정보처리방침, 문의처, 사이트 소개 페이지를 추가하는 것이 좋습니다.
