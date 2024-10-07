export const fetchPlayerData = async () => {
    try {
        const response = await fetch('http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataAdvancedPlayoffs/name/Kyrie%20Irving');
        const data = await response.json();
        return data; // Return the array of player stats
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
};