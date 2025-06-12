const ENTRY_MAP_HASH_ID = "VqwQwv";
const SCHOOL_MAP_HASH_ID = "5rk7mQ";

let touchCounts = {};

const onjectSettings = {
    "objKey1": [
        { map: SCHOOL_MAP_HASH_ID, x: 6, y: 75}
    ]
        
}

App.onStart.Add(function () {
    App.sayToAll("게임 시작");
 });

 App.onJoinPlayer.Add(function (player) {   
    App.sayToAll(`spaceHashID: ${App.spaceHashID}`); // spaceHashID: Ak42Xz
    App.sayToAll(`mapHashID: ${App.mapHashID}`) // mapHashId: 25g3RQ
    App.sayToAll(`id: ${player.id} name: ${player.name}`); 
    player.tag = {
		alive: true,
        score: 0
	};
	player.sendUpdated();
    player.storage = player.tag;

	App.sayToAll(`name: ${player.name} life: ${player.tag.score}`);

    if (App.mapHashID == SCHOOL_MAP_HASH_ID) {
        App.sayToAll(`School map: ${App.mapHashID}`);
        player.sendMessage("School map");
    }
 });

 App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFF0000);
        }
    } else {
        App.sayToAll(`obj is null`, 0xFFFFFF);
    }
});
