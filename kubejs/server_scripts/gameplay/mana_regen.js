PlayerEvents.tick((event) => {
    const { player, server } = event;

    if (player.tickCount % 20 != 0 || player.isFake() || !player.isPlayer()) return;

    player.potionEffects.getActive().forEach((effect) => {
        if (effect.getDescriptionId() == 'effect.cold_sweat.warmth') {
            let potion = { id: 'ars_nouveau:mana_regen', amp: 1, duration: 4 * 20, ambient: false, particles: false };
            if (effect.getAmplifier() <= 5) potion.amp = 0;

            server.scheduleInTicks(2, () => {
                player.potionEffects.add(potion.id, potion.duration, potion.amp, potion.ambient, potion.particles);
            });
        }
    });
});
