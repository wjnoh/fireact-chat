# Fireact Chat

리액트에 파이어베이스를 연결해 백엔드 없이 만든 간단한 채팅 서비스입니다. 메인 페이지에서 이름을 설정하면 채팅방에 입장할 수 있으며, 메뉴에서 원하는 채팅방을 찾아 들어가거나 직접 새로운 채팅방을 생성할 수 있습니다. 주소 맨 뒤에 /채팅방 이름을 붙여 원하는 채팅방에 바로 들어갈 수도 있습니다.

## Tech Stack

HTML, CSS, JS, React, react-router, Firebase(Realtime DB), Responsive Design, SPA

## Progress

12/07 - 공인 IP를 기반으로 익명 사용자를 구분할 수 있게 바꾸었다.<br>
12/11 - 사용자의 접속 상태를 확인할 수 있게 했다.

## Issue

첫 접속시 스크롤 가장 하단으로 이동하질 못한다. 메시지 받아오는 속도가 더 느려서 그런듯.<br>
단순 연결 상태가 아닌 해당 방에 접속했는지를 보여줄 필요가 있을 것 같다.<br>
연결 해제시 Can't call setState (or forceUpdate) on an unmounted component. 문제 발생.
