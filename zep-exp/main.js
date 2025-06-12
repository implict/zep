// 입장 맵의 Hash ID
const ENTRY_MAP_HASH_ID = "M0qJpZ"; // 실제 입장 맵의 Hash ID로 변경
const PLAY_MAP_HASH_ID = "mkRwAg";  // 실제 플레이 맵의 Hash ID로 변경

let _widget = null;
let _players = {}; // 플레이어 목록과 팀 정보를 저장
let _teamCounts = { RED: 0, BLUE: 0 }; // 각 팀의 현재 인원 수
let _teamPlayers = { RED: [], BLUE: [] }; // 각 팀의 플레이어 이름 목록
const _playersNearPortal = {}; // 플레이어별 포털 근처 상태 저장

// RED팀과 BLUE팀 포털의 ID
const RED_PORTAL_ID = "RED";
const BLUE_PORTAL_ID = "BLUE";
const MAX_TEAM_SIZE = 4; // 각 팀의 최대 인원 수

App.onStart.Add(function () {
   App.sayToAll("게임 시작");
});

// 플레이어가 입장할 때 실행
App.onJoinPlayer.Add(function (player) {
    App.sayToAll(`spaceHashID: ${App.spaceHashID}`); // spaceHashID: Ak42Xz
	App.sayToAll(`mapHashID: ${App.mapHashID}`) // mapHashId: 25g3RQ
    
    // 입장 맵에서만 메시지 표시
    if (App.mapHashID == ENTRY_MAP_HASH_ID) {
        App.sayToAll('Welcome to the Entry Map!');
        player.showCenterLabel("Welcome to the Entry Map!", 0x000000, 0xFFFF00, 20, 5000);
        player.sendMessage("포털을 통해 RED팀 또는 BLUE팀에 참여하세요!");
    } else if (App.mapHashID == PLAY_MAP_HASH_ID) {
       
    }
    // 초기 팀 설정
    _players[player.id] = { team: "NONE" };

    // 팀 정보를 좌측 상단에 표시
    player.showWidget("team_info.html", "top-left", 200, 100);
});

App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    App.sayToAll("onObjectTouched 이벤트 실행됨"); // 이벤트 실행 여부 확인
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
        }
    } else {
        App.sayToAll(`obj is null`, 0xFFFFFF);
    }
});

App.onAppObjectTouched.Add(function(sender, key, x, y ){
    App.sayToAll("onAppObjectTouched 이벤트 실행됨"); // 이벤트 실행 여부 확인
});

App.onTriggerObject.Add(function(player, layerID, x, y, key) {
    App.sayToAll("onTriggerObject 이벤트 실행됨"); // 이벤트 실행 여부 확인
    // key 값이 있으면 오브젝트 정보 
    if (key) {
        let obj = Map.getObjectWithKey(key);
        if (obj) {
            let name = (obj.npcProperty && obj.npcProperty.name) ? obj.npcProperty.name : "이름 없음";
            player.sendMessage(`이 오브젝트의 key: ${obj.key || "없음"}, 이름: ${name}`);
        } else {
            player.sendMessage("오브젝트 정보를 찾을 수 없습니다.");
        }
    } else {
        player.sendMessage("상호작용 가능한 오브젝트가 아닙니다.");
    }
});
