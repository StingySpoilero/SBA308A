import { displayPlayerStats } from './display.mjs';

const fetchStatsBtn = document.getElementById('fetchStatsBtn');
const stats = document.getElementById('stats');

fetchStatsBtn.addEventListener('click', () => {
    displayPlayerStats(stats);
});

// Fetch initial stats on page load
document.addEventListener('DOMContentLoaded', () => {
    displayPlayerStats(stats);
});