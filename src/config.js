// Configuration and Constants for Smart River Cleaning System Dashboard

export const DASHBOARD_CONFIG = {
    // System Information
    SYSTEM_NAME: 'Smart River Cleaning System',
    VERSION: '1.0.0',

    // API Endpoints (Replace with your actual endpoints)
    API: {
        BASE_URL: 'http://localhost:3000/api',
        BOAT_STATUS: '/boat/status',
        CAMERA_FEED: '/camera/stream',
        MISSION_DATA: '/mission/current',
        ALERTS: '/alerts',
        WASTE_DATA: '/waste/collection',
    },

    // Update Intervals (in milliseconds)
    UPDATE_INTERVALS: {
        BOAT_STATUS: 1000,       // 1 second
        MAP_POSITION: 500,       // 0.5 seconds
        BATTERY: 5000,           // 5 seconds
        ALERTS: 3000,            // 3 seconds
        MISSION_PROGRESS: 1000,  // 1 second
    },

    // Thresholds and Limits
    THRESHOLDS: {
        BATTERY_WARNING: 25,     // %
        BATTERY_CRITICAL: 10,    // %
        BIN_WARNING: 75,         // %
        BIN_CRITICAL: 90,        // %
        SIGNAL_WEAK: 40,         // %
    },

    // Map Configuration
    MAP: {
        DEFAULT_ZOOM: 1,
        MIN_ZOOM: 0.5,
        MAX_ZOOM: 2,
        ZOOM_STEP: 0.2,
    },

    // Camera Configuration
    CAMERA: {
        STREAM_URL: 'ws://localhost:8080/camera',
        DETECTION_CONFIDENCE: 0.7,
        FRAME_RATE: 30,
    },
};

// Alert Severity Levels
export const ALERT_SEVERITY = {
    INFO: 'info',
    WARNING: 'warning',
    CRITICAL: 'critical',
    SUCCESS: 'success',
};

// Operating Modes
export const BOAT_MODES = {
    MANUAL: 'Manual',
    AUTO: 'Auto',
    DOCKING: 'Docking',
    EMERGENCY: 'Emergency',
};

// Mission Status
export const MISSION_STATUS = {
    IDLE: 'idle',
    ACTIVE: 'active',
    PAUSED: 'paused',
    COMPLETED: 'completed',
    ABORTED: 'aborted',
};

// Waste Detection Categories
export const WASTE_CATEGORIES = {
    PLASTIC: 'Plastic Bottle',
    DEBRIS: 'Floating Debris',
    ORGANIC: 'Organic Waste',
    METAL: 'Metal Object',
    PAPER: 'Paper/Cardboard',
    UNKNOWN: 'Unidentified',
};

// Color Codes (matching CSS variables)
export const COLORS = {
    PRIMARY: '#0a0e1a',
    SECONDARY: '#131827',
    CARD: '#1a2035',
    TEAL: '#00d4d4',
    CYAN: '#00ffff',
    GREEN: '#00ff88',
    ORANGE: '#ff9800',
    RED: '#ff3b3b',
};

// Navigation Items Configuration
export const NAV_ITEMS = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', path: '/' },
    { id: 'camera', icon: '📹', label: 'Live Camera', path: '/camera' },
    { id: 'map', icon: '🗺️', label: 'Map View', path: '/map' },
    { id: 'analytics', icon: '📈', label: 'Waste Analytics', path: '/analytics' },
    { id: 'power', icon: '⚡', label: 'Power & Battery', path: '/power' },
    { id: 'alerts', icon: '🔔', label: 'Alerts', path: '/alerts' },
    { id: 'settings', icon: '⚙️', label: 'Settings', path: '/settings' },
];

// Utility Functions
export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const formatDistance = (meters) => {
    if (meters < 1000) {
        return `${meters.toFixed(0)} m`;
    }
    return `${(meters / 1000).toFixed(2)} km`;
};

export const getBatteryColor = (percentage) => {
    if (percentage > 50) return COLORS.GREEN;
    if (percentage > 25) return COLORS.ORANGE;
    return COLORS.RED;
};

export const getBatteryClass = (percentage) => {
    if (percentage > 50) return '';
    if (percentage > 25) return 'warning';
    return 'critical';
};

export const getAlertIcon = (severity) => {
    switch (severity) {
        case ALERT_SEVERITY.CRITICAL:
            return '🔴';
        case ALERT_SEVERITY.WARNING:
            return '⚠️';
        case ALERT_SEVERITY.SUCCESS:
            return '✅';
        default:
            return 'ℹ️';
    }
};

export const formatCoordinates = (lat, lon) => {
    const latDir = lat >= 0 ? 'N' : 'S';
    const lonDir = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lon).toFixed(4)}°${lonDir}`;
};

export const generateMissionId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `RC-${year}${month}${day}-${random}`;
};

export default DASHBOARD_CONFIG;
