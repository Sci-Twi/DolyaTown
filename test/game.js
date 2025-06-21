// 游戏配置
const config = {
    blockSize: 16, // 每个方块的大小
    worldWidth: 50, // 世界宽度（方块数）
    worldHeight: 30, // 世界高度（方块数）
    renderDistance: 20 // 渲染距离（方块数）
};

// 游戏状态
const gameState = {
    blocks: [], // 世界方块数组
    player: { x: 0, y: 0 }, // 玩家位置
    camera: { x: 0, y: 0 }, // 相机位置
    sprites: {} // 存储加载的精灵图
};

// 方块类型定义
const BlockType = {
    EMPTY: 0,
    GRASS: 1,
    DIRT: 2,
    STONE: 3,
    WATER: 4
};

// 初始化游戏
function initGame() {
    const canvas = document.getElementById('gameCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    gameState.ctx = canvas.getContext('2d');
    gameState.canvas = canvas;
    
    // 初始化世界
    generateWorld();
    
    // 加载精灵图
    loadSprites();
    
    // 设置玩家初始位置
    gameState.player.x = Math.floor(config.worldWidth / 2) * config.blockSize;
    gameState.player.y = Math.floor(config.worldHeight / 2) * config.blockSize;
    
    // 开始游戏循环
    window.requestAnimationFrame(gameLoop);
    
    // 事件监听
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleClick);
}

// 生成世界
function generateWorld() {
    gameState.blocks = [];
    for (let y = 0; y < config.worldHeight; y++) {
        gameState.blocks[y] = [];
        for (let x = 0; x < config.worldWidth; x++) {
            // 简单的地形生成逻辑
            if (y === Math.floor(config.worldHeight * 0.7)) {
                gameState.blocks[y][x] = BlockType.GRASS;
            } else if (y > Math.floor(config.worldHeight * 0.7)) {
                gameState.blocks[y][x] = BlockType.DIRT;
            } else if (y > Math.floor(config.worldHeight * 0.8)) {
                gameState.blocks[y][x] = BlockType.STONE;
            } else if (y > Math.floor(config.worldHeight * 0.9)) {
                gameState.blocks[y][x] = BlockType.WATER;
            } else {
                gameState.blocks[y][x] = BlockType.EMPTY;
            }
        }
    }
}

// 加载精灵图
function loadSprites() {
    // 这里应该是加载实际的精灵图
    // 示例中使用彩色方块代替
    gameState.sprites[BlockType.GRASS] = createColoredSprite('#4CAF50');
    gameState.sprites[BlockType.DIRT] = createColoredSprite('#795548');
    gameState.sprites[BlockType.STONE] = createColoredSprite('#9E9E9E');
    gameState.sprites[BlockType.WATER] = createColoredSprite('#2196F3');
}

// 创建彩色方块（实际项目中替换为真实精灵图）
function createColoredSprite(color) {
    const canvas = document.createElement('canvas');
    canvas.width = config.blockSize;
    canvas.height = config.blockSize;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, config.blockSize, config.blockSize);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(0, 0, config.blockSize, config.blockSize);
    return canvas;
}

// 游戏主循环
function gameLoop(timestamp) {
    update(timestamp);
    render();
    window.requestAnimationFrame(gameLoop);
}

// 更新游戏状态
function update(timestamp) {
    // 更新相机位置（跟随玩家）
    gameState.camera.x = gameState.player.x - gameState.canvas.width / 2;
    gameState.camera.y = gameState.player.y - gameState.canvas.height / 2;
}

// 渲染游戏
function render() {
    const { ctx, canvas } = gameState;
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 计算可见区域
    const startX = Math.max(0, Math.floor(gameState.camera.x / config.blockSize));
    const startY = Math.max(0, Math.floor(gameState.camera.y / config.blockSize));
    const endX = Math.min(config.worldWidth, startX + Math.ceil(canvas.width / config.blockSize) + 1);
    const endY = Math.min(config.worldHeight, startY + Math.ceil(canvas.height / config.blockSize) + 1);
    
    // 渲染方块
    for (let y = startY; y < endY; y++) {
        for (let x = startX; x < endX; x++) {
            const blockType = gameState.blocks[y][x];
            if (blockType !== BlockType.EMPTY && gameState.sprites[blockType]) {
                const renderX = x * config.blockSize - gameState.camera.x;
                const renderY = y * config.blockSize - gameState.camera.y;
                ctx.drawImage(
                    gameState.sprites[blockType],
                    renderX,
                    renderY,
                    config.blockSize,
                    config.blockSize
                );
            }
        }
    }
    
    // 渲染玩家
    ctx.fillStyle = '#FF5722';
    const playerRenderX = gameState.player.x - gameState.camera.x;
    const playerRenderY = gameState.player.y - gameState.camera.y;
    ctx.fillRect(playerRenderX - 8, playerRenderY - 16, 16, 32);
}

// 事件处理
function handleResize() {
    gameState.canvas.width = window.innerWidth;
    gameState.canvas.height = window.innerHeight;
}

function handleKeyDown(e) {
    const speed = 5;
    switch (e.key) {
        case 'ArrowUp':
            gameState.player.y -= speed;
            break;
        case 'ArrowDown':
            gameState.player.y += speed;
            break;
        case 'ArrowLeft':
            gameState.player.x -= speed;
            break;
        case 'ArrowRight':
            gameState.player.x += speed;
            break;
    }
}

function handleClick(e) {
    // 获取点击的世界坐标
    const worldX = e.clientX + gameState.camera.x;
    const worldY = e.clientY + gameState.camera.y;
    
    // 转换为方块坐标
    const blockX = Math.floor(worldX / config.blockSize);
    const blockY = Math.floor(worldY / config.blockSize);
    
    // 确保坐标在范围内
    if (blockX >= 0 && blockX < config.worldWidth && blockY >= 0 && blockY < config.worldHeight) {
        // 切换方块类型
        gameState.blocks[blockY][blockX] = 
            gameState.blocks[blockY][blockX] === BlockType.EMPTY ? BlockType.GRASS : BlockType.EMPTY;
    }
}

// 启动游戏
window.onload = initGame;