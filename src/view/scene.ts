class Scene {
  private readonly nft: string;
  private readonly anim: string;
  constructor(nft: string, anim: string) {
    this.nft = nft;
    this.anim = anim;
  }
  render() {
    return `
      <a-scene
        id="scene"
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-nft
          id="nft"
          type="nft"
          url="nft/${this.nft}"         
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-video
            id="video"
            src="anim/${this.anim}.mp4"
            scale="1 -1 1"
            position="100 0 -200" 
            rotation="90 0 0" 
            side="back" 
            autoplay
            width="200" 
            height="200"
          ></a-video>
        </a-nft>
        <a-camera 
          far="101"  
          near="1" 
          position="0 0 0"
          rotation="0 0 0"
          look-controls-enabled="false"
          reverse-mouse-drag="false" 
          wasd-controls-enabled="false"
        ></a-camera>
      </a-scene>
    `;

    // <a-entity position="100 0 -150" rotation="0 0 0">
    //   <a-video
    // id="video"
    // src="anim/${this.anim}.mp4"
    // scale="1 -1"
    // position="0 0 0"
    // rotation="90 0 0"
    // side="back"
    // autoplay
    // width="100"
    // height="100"
    //   ></a-video>
    //   </a-entity>
    //   </a-nft>
    //   <a-camera
    // far="10"
    // near="1"
    // position="0 0 0"
    // look-controls-enabled="false"
    // reverse-mouse-drag="false"
    // wasd-controls-enabled="false"
    //   ></a-camera>
  }
}

export default Scene;
