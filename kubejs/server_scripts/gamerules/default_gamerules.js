ServerEvents.loaded((event) => {
    const { server } = event;

    let gamerules = server.getGameRules();
    let pData = server.persistentData;

    default_rules.forEach((rule) => {
        if (!pData.getBoolean(rule.name)) {
            gamerules.set(rule.name, rule.value);
            console.log(`Default Gamerule Applied: ${rule.name} = ${String(rule.value)}`);
            pData.putBoolean(rule.name, true);
        }
    });
});
