async function initResults() {
    const { initCharts } = await import('./charts');

    initCharts();
}

export default initResults;