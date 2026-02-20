const FTBChunksAPI = Java.loadClass('dev.ftb.mods.ftbchunks.api.FTBChunksAPI').api();
const FTBChunkDimPos = Java.loadClass('dev.ftb.mods.ftblibrary.math.ChunkDimPos');

OritechEvents.particleCollided((event) => {
    const { level, pos, controller, collisionPos, itemA, itemB, speed, recipeId, recipe } = event;
    const dimension = String(level.getDimension());
    const execute = `execute in ${dimension} run`;
    const server = level.getServer();
    const source = server.createCommandSourceStack();

    if (recipeId == null) return;

    if (String(recipeId).includes('gate_pearl')) {
        let entity = level.getBlock(collisionPos).createEntity('minecraft:item');
        entity.item = recipe.results[0];
        entity.setY(collisionPos.y + 1);
        entity.spawn();

        event.cancel();
    }

    if (String(recipeId).includes('essence_continuity')) {
        let dayTime = level.getDayTime();
        let day = Math.floor(dayTime / 24000);
        let time = dayTime % 24000;
        let newTime = dayTime + 18000 - time;
        let moonPhase = (day % 8) + 1;
        let nextNewMoon = moonPhase < 5 ? 5 - moonPhase : 13 - moonPhase;
        let radius = 1000;

        let commands = [];
        // Pause Time
        commands.push({ parameters: `${execute} gamerule doDaylightCycle false`, delay: 1 });
        // Set to Midnight
        commands.push({ parameters: `${execute} time set ${newTime}t`, delay: 1 });
        // Advance to next New Moon
        for (let i = 1; i <= nextNewMoon; i++) {
            commands.push({ parameters: `${execute} time add 24000t`, delay: i * 20 });
        }

        // Resume Time
        commands.push({ parameters: `${execute} gamerule doDaylightCycle true`, delay: 40 * 20 });

        commands.forEach((command) => {
            server.scheduleInTicks(command.delay, () => {
                server.runCommandSilent(`${command.parameters}`);
                // console.log(command.parameters);
            });
        });

        // Somebody set up us the bomb
        let entity = level.getBlock(collisionPos).createEntity('industrialforegoing:infinity_nuke');
        entity.mergeNbt({ Radius: radius, Exploding: true, Armed: true, NoGravity: true });
        entity.setY(collisionPos.y - 50);
        entity.spawn();

        let points = Math.floor(radius / 16);
        let positions = getCoordinateGrid(points, collisionPos.x, collisionPos.z, 16);

        positions.forEach((position) => {
            let gridPos = new BlockPos(position.x, 0, position.z);
            let claimPos = FTBChunkDimPos(level, gridPos);
            let chunk = FTBChunksAPI.manager.getChunk(claimPos);

            if (chunk) {
                // console.log(chunk);
                chunk.unclaim(source, true);
            }
        });
    }
});
