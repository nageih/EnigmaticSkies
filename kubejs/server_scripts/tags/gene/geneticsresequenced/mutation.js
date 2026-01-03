ServerEvents.tags('geneticsresequenced:gene', (event) => {
    let additions = ['geneticsresequenced:wilden_4'];

    event.get('geneticsresequenced:mutation').add(additions);
});
