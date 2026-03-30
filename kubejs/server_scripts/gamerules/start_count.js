ServerEvents.loaded((event) => {
    const { server } = event;
    let pData = server.persistentData;
    if (!pData.getInt('start_count')) {
        pData.putInt('start_count', 0);
    }
    pData.putInt('start_count', pData.getInt('start_count') + 1);
});
