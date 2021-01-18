import * as PIXI from "pixi.js";
import {
    Room,
    Avatar,
    FloorFurniture,
    RoomCamera,
    Shroom,
    loadRoomTexture,
} from "@jankuss/shroom";
import * as index from '../index'

class RoomEngine {
    constructor() {
        var view = document.querySelector("#canva1");
        var application = new PIXI.Application({ view });
        this.shroom = Shroom.create({ application, resourcePath: "http://127.0.0.1:8081/resources" })
        this.appl = application
        this.room = null;
    }
    createRoom(tiles) {
        if(this.room != null){
            this.room.removeChildren()
        }
        this.room = Room.create(this.shroom, {
            tilemap: tiles
        })
        this.appl.stage.addChild(RoomCamera.forScreen(this.room));
    }
    addUser(){
        const avatar = new Avatar({
            look: "hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62",
            direction: 4,
            roomX: 0,
            roomY: 0,
            roomZ: 0,
          });
          this.room.addRoomObject(avatar)
    }

}

export default RoomEngine