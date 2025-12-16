const PowerBattery = () => {
    const batteryData = {
        percentage: 68,
        voltage: 24.3,
        estimatedRuntime: 142,
        chargingStatus: 'Not Charging',
    };

    // Calculate circle parameters for gauge
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
        circumference - (batteryData.percentage / 100) * circumference;

    // Determine color based on battery level
    const getGaugeColor = (percentage) => {
        if (percentage > 50) return 'var(--accent-green)';
        if (percentage > 25) return 'var(--accent-orange)';
        return 'var(--accent-red)';
    };

    const getGaugeClass = (percentage) => {
        if (percentage > 50) return '';
        if (percentage > 25) return 'warning';
        return 'critical';
    };

    return (
        <div className="card slide-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">⚡</span>
                    Power & Battery
                </div>
            </div>

            <div className="card-body">
                <div className="gauge-container">
                    <div className="circular-gauge">
                        <svg className="gauge-circle" width="140" height="140">
                            <circle
                                className="gauge-bg"
                                cx="70"
                                cy="70"
                                r={radius}
                            />
                            <circle
                                className={`gauge-progress ${getGaugeClass(batteryData.percentage)}`}
                                cx="70"
                                cy="70"
                                r={radius}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                style={{ stroke: getGaugeColor(batteryData.percentage) }}
                            />
                        </svg>
                        <div className="gauge-text">
                            <div className="gauge-value">{batteryData.percentage}%</div>
                            <div className="gauge-label">Battery</div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <div className="metric-row">
                        <span className="metric-label">Voltage</span>
                        <span className="metric-value">{batteryData.voltage}V</span>
                    </div>

                    <div className="metric-row">
                        <span className="metric-label">Est. Runtime</span>
                        <span className="metric-value highlight">
                            {batteryData.estimatedRuntime} min
                        </span>
                    </div>

                    <div className="metric-row">
                        <span className="metric-label">Charging Status</span>
                        <span className="metric-value">{batteryData.chargingStatus}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerBattery;
