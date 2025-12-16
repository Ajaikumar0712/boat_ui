const BoatStatus = () => {
    const boatData = {
        speed: 2.4,
        heading: 127,
        gpsLat: 28.6139,
        gpsLon: 77.2090,
        mode: 'Auto',
        signalStrength: 85,
    };

    return (
        <div className="card slide-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">⚙️</span>
                    Boat Status
                </div>
            </div>

            <div className="card-body">
                <div className="metric-row">
                    <span className="metric-label">Speed</span>
                    <span className="metric-value highlight">{boatData.speed} m/s</span>
                </div>

                <div className="metric-row">
                    <span className="metric-label">Heading</span>
                    <span className="metric-value">{boatData.heading}°</span>
                </div>

                <div className="metric-row">
                    <span className="metric-label">GPS Coordinates</span>
                    <span className="metric-value" style={{ fontSize: '12px' }}>
                        {boatData.gpsLat.toFixed(4)}°N, {boatData.gpsLon.toFixed(4)}°E
                    </span>
                </div>

                <div className="metric-row">
                    <span className="metric-label">Mode</span>
                    <span className="metric-value highlight">{boatData.mode}</span>
                </div>

                <div className="metric-row">
                    <span className="metric-label">Signal Strength</span>
                    <span className="metric-value">{boatData.signalStrength}%</span>
                </div>
            </div>
        </div>
    );
};

export default BoatStatus;
