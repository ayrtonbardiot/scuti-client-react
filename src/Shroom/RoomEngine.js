import * as PIXI from "pixi.js";
import {
    Room,
    Avatar,
    FloorFurniture,
    RoomCamera,
    Shroom,
    loadRoomTexture,
} from "@jankuss/shroom";
import Emitter from '../Emitter'


class RoomEngine {
    constructor() {
        var view = document.querySelector("#canva1");
        var application = new PIXI.Application({ view, resizeTo: window });
        this.shroom = Shroom.create({ application, resourcePath: "http://127.0.0.1:8081/resources" })
        this.appl = application
        this.room = null;
        this.avatar = null;
    }
    createRoom(tiles) {
        if(this.room != null){
            this.room.removeChildren()
        }
        Emitter.emit('ROOM_CREATING', 999999999)
        this.room = Room.create(this.shroom, {
            tilemap: tiles
        })
        this.room.onTileClick = (pos) => {
            this.avatar.move(pos.roomX, pos.roomY, pos.roomZ)
        }
        this.addUser()
        this.appl.stage.addChild(RoomCamera.forScreen(this.room));
    }
    addUser(){
        this.avatar = new Avatar({
            look: "hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62",
            direction: 4,
            roomX: 5,
            roomY: 22,
            roomZ: 0,
          });
          this.room.addRoomObject(this.avatar)
    }

}

export default RoomEngine