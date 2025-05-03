// App.onJoinPlayer.Add(function(player){
// 	App.showCenterLabel(`${player.name}님이 입장하셨습니다.`, 0x000000, 0xFFFF00, 200, 2000); // 노란색 배경, 검정색 글씨로 표시하기

//     player.title = "학생";  // 플레이어의 타이틀을 "학생"으로 설정 
//     player.sendMessage("타이틀이 학생으로 설정되었습니다."); // 플레이어에게 메시지 전송
//     player.setTitle("학생"); // 플레이어의 타이틀을 "학생"으로 설정
//     player.setTitleColor("#FF0000"); // 플레이어의 타이틀 색상을 빨간색으로 설정
//     player.setTitleBackgroundColor("#00FF00"); // 플레이어의 타이틀 배경 색상을 초록색으로 설정
//     player.setTitleFontSize(20); // 플레이어의 타이틀 글꼴 크기를 20으로 설정
//     player.setTitleFontFamily("Arial"); // 플레이어의 타이틀 글꼴을 Arial로 설정
//     player.setTitleFontStyle("bold"); // 플레이어의 타이틀 글꼴 스타일을 굵게 설정
//     player.setTitleFontWeight("bold"); // 플레이어의 타이틀 글꼴 두께를 굵게 설정
//     player.setTitleFontStyle("italic"); // 플레이어의 타이틀 글꼴 스타일을 기울임꼴로 설정
// });

App.onStart.Add(function(){
    App.sayToAll("Hello, Zep!");
    App.showCenterLabel("Hello, Zep!", 0x000000, 0xFFFF00, 0, 2000); // 노란색 배경, 검정색 글씨로 표시하기
})

// //UI가 노출될 위치(정렬, 가로, 세로) 값을 변수로 사전에 제작
// let position = 'middle';
// let width = 400;
// let height = 400;

// // my.html로 state라는 태그를 만들어 hello라는 값을 전달
// let _widget1 = App.showWidget('my.html', position, width, height);
// _widget1.sendMessage({
// 	state: "hello",
// }); 

// let _widget = null;
// App.onJoinPlayer.Add(function (player) {
//     _widget = App.showWidget("my.html", "top", 200, 300); // 화면 상단, 200x300 영역에 위젯을 보여줌
//     _widget.sendMessage({
//         state: "hello",
//     });
// });

let _widget = null;
let _players = App.players; // 현재 플레이어 목록을 가져옴
// 플레이어가 입장할 때 실행
App.onJoinPlayer.Add(function (player) {
	_widget = App.showWidget("widget.html", "top", 200, 300); // 화면 상단, 200x300 영역에 위젯을 보여줌
	_widget.sendMessage({
        state: "hello",
	});


});
