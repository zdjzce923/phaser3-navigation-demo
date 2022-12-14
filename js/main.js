const game = new Phaser.Game({
  // 初始化地图配置
  type: Phaser.WEBGL,
  parent: "game-container",
  width: 1500,
  height: 875,
  backgroundColor: "#fff",
  pixelArt: false,
  plugins: {
    scene: [
      {
        // PhaserNavMeshPlugin 为自动寻路库 已在index.html中引入
        key: "NavMeshPlugin", // 指定库名
        plugin: PhaserNavMeshPlugin,
        mapping: "navMeshPlugin", // 属性名
        start: true,
      },
    ],
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: 0,
    },
  },
  preload() {
    const renderer = this.game.renderer;
    this.customPipeline = renderer.addPipeline(
      "Custom",
      new CustomPipeline(this.game)
    )
  },
});
// 添加场景、绑定函数
game.scene.add("load", Load);
game.scene.add("start", Start);
game.scene.start("load");
