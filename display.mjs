import { fetchPlayerData } from './api.mjs';

export const displayPlayerStats = async (statsElement) => {
    const playerStats = await fetchPlayerData();
    if (playerStats && playerStats.length > 0) {
        statsElement.innerHTML = ''; // Clear previous stats
        playerStats.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.classList.add('stat');
            statDiv.innerHTML = `
                <h3>Season: ${stat.season}</h3>
                <p>Games Played: ${stat.games}</p>
                <p>Minutes Played: ${stat.minutesPlayed}</p>
                <p>Points per Game (PER): ${stat.per}</p>
                <p>True Shooting Percentage: ${(stat.tsPercent * 100).toFixed(2)}%</p>
                <p>Team: ${stat.team}</p>
            `;
            statsElement.appendChild(statDiv);
        });
    } else {
        statsElement.innerHTML = '<p>No data available.</p>';
    }
};