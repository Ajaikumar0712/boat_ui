// mock data for testing dashboard
// TODO: replace with real API calls

export const SAMPLE_BOAT_STATUS = {
    speed: 2.4,
    heading: 127,
    gpsLat: 28.6139,
    gpsLon: 77.2090,
    mode: 'Auto',
    signalStrength: 85,
    timestamp: new Date().toISOString()
};

export const SAMPLE_BATTERY_DATA = {
    percentage: 68,
    voltage: 24.3,
    current: 3.2,
    temperature: 28,
    estimatedRuntime: 142,
    chargingStatus: 'Not Charging',
    cycleCount: 47,
    health: 94,
};

export const SAMPLE_WASTE_DATA = {
    collected: 12.4,
    binFillLevel: 62,
    efficiency: 87,
    categories: {
        plastic: 6.8,
        organic: 3.2,
        metal: 1.5,
        paper: 0.9
    },
    collectionsToday: 3,
    totalCollections: 127
};

export const SAMPLE_MISSION_DATA = {
    id: 'RC-2024-001',
    status: 'active',
    progress: 67,
    timeElapsed: 2847,
    timeEstimated: 4200,
    distanceCovered: 1.34,
    distanceTotal: 2.1,
    startTime: '2024-12-15T23:30:00Z',
    waypoints: [
        { id: 1, lat: 28.6100, lon: 77.2050, status: 'completed' },
        { id: 2, lat: 28.6120, lon: 77.2070, status: 'completed' },
        { id: 3, lat: 28.6139, lon: 77.2090, status: 'current' },
        { id: 4, lat: 28.6160, lon: 77.2110, status: 'pending' },
        { id: 5, lat: 28.6180, lon: 77.2130, status: 'pending' },
    ],
};

export const SAMPLE_ALERTS = [
    {
        id: 1,
        type: 'warning',
        icon: '⚠️',
        message: 'Waste bin 62% full',
        time: '2 min ago',
        timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
        acknowledged: false,
    },
    {
        id: 2,
        type: 'info',
        icon: 'ℹ️',
        message: 'High waste concentration detected ahead',
        time: '5 min ago',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        acknowledged: false,
    },
    {
        id: 3,
        type: 'warning',
        icon: '⚠️',
        message: 'Battery at 68% - Consider return path',
        time: '12 min ago',
        timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
        acknowledged: false,
    },
    {
        id: 4,
        type: 'success',
        icon: '✅',
        message: 'Mission waypoint 3 completed',
        time: '18 min ago',
        timestamp: new Date(Date.now() - 18 * 60 * 1000).toISOString(),
        acknowledged: false,
    },
];

export const SAMPLE_DETECTIONS = [
    {
        id: 1,
        label: 'Plastic Bottle',
        confidence: 0.94,
        x: 25,
        y: 30,
        width: 15,
        height: 20,
        category: 'plastic',
    },
    {
        id: 2,
        label: 'Floating Debris',
        confidence: 0.87,
        x: 55,
        y: 45,
        width: 20,
        height: 15,
        category: 'debris',
    },
    {
        id: 3,
        label: 'Organic Waste',
        confidence: 0.91,
        x: 70,
        y: 25,
        width: 18,
        height: 18,
        category: 'organic',
    },
];

export const SAMPLE_MAP_DATA = {
    riverPath: "M 50 20 Q 30 40, 40 60 T 60 100 T 80 140 T 70 180 T 50 220",
    boatPosition: { x: 60, y: 100, angle: 45 },
    wasteHotspots: [
        { id: 1, x: 35, y: 55, severity: 'high', count: 23 },
        { id: 2, x: 62, y: 105, severity: 'medium', count: 12 },
        { id: 3, x: 75, y: 150, severity: 'low', count: 5 },
    ],
    obstacles: [
        { id: 1, x: 45, y: 80, type: 'rock', size: 'small' },
    ],
    cleanedAreas: [
        { path: "M 50 20 Q 30 40, 40 60 T 60 100" },
    ],
};

export const SAMPLE_SYSTEM_STATUS = {
    online: true,
    lastHeartbeat: new Date().toISOString(),
    connectionStrength: 'strong',
    signalBars: 3,
    systemHealth: 95,
    errorCount: 0,
    warningCount: 2,
};

export const SAMPLE_WEATHER = {
    temperature: 24,
    humidity: 62,
    windSpeed: 8,
    windDirection: 'NE',
    waterTemperature: 19,
    visibility: 8.5,
    condition: 'Clear',
};

export const SAMPLE_ANALYTICS = {
    dailyCollection: [
        { date: '2024-12-10', kg: 15.2 },
        { date: '2024-12-11', kg: 18.7 },
        { date: '2024-12-12', kg: 14.3 },
        { date: '2024-12-13', kg: 21.4 },
        { date: '2024-12-14', kg: 19.8 },
        { date: '2024-12-15', kg: 12.4 },
    ],
    wasteComposition: {
        plastic: 55,
        organic: 26,
        metal: 12,
        paper: 7,
    },
    operationalHours: 847,
    totalDistance: 342.7,
    efficiencyScore: 89,
};

// random data generators for testing
export const generateRandomBoatData = () => ({
    speed: (Math.random() * 3 + 1).toFixed(1),
    heading: Math.floor(Math.random() * 360),
    gpsLat: (28.6139 + (Math.random() - 0.5) * 0.01).toFixed(6),
    gpsLon: (77.2090 + (Math.random() - 0.5) * 0.01).toFixed(6),
    mode: ['Auto', 'Manual', 'Docking'][Math.floor(Math.random() * 3)],
    signalStrength: Math.floor(Math.random() * 30 + 70)
});

export const generateRandomBatteryData = () => ({
    percentage: Math.floor(Math.random() * 40 + 50),
    voltage: (Math.random() * 2 + 23).toFixed(1),
    current: (Math.random() * 2 + 2).toFixed(1),
    temperature: Math.floor(Math.random() * 10 + 25),
    estimatedRuntime: Math.floor(Math.random() * 100 + 100),
    chargingStatus: Math.random() > 0.8 ? 'Charging' : 'Not Charging'
});

export default {
    SAMPLE_BOAT_STATUS,
    SAMPLE_BATTERY_DATA,
    SAMPLE_WASTE_DATA,
    SAMPLE_MISSION_DATA,
    SAMPLE_ALERTS,
    SAMPLE_DETECTIONS,
    SAMPLE_MAP_DATA,
    SAMPLE_SYSTEM_STATUS,
    SAMPLE_WEATHER,
    SAMPLE_ANALYTICS,
};
