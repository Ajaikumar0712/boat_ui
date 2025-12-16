const WasteCollection = () => {
    const wasteData = {
        collected: 12.4,
        binFillLevel: 62,
        efficiency: 87,
    };

    // Chart data for collection efficiency
    const chartData = [45, 62, 58, 73, 68, 82, 87, 78, 85, 89, 84, 87];

    return (
        <div className="card slide-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">🗑️</span>
                    Waste Collection
                </div>
            </div>

            <div className="card-body">
                <div className="metric-row">
                    <span className="metric-label">Trash Collected</span>
                    <span className="metric-value highlight">{wasteData.collected} kg</span>
                </div>

                <div className="metric-row">
                    <span className="metric-label">Bin Fill Level</span>
                    <span className="metric-value">{wasteData.binFillLevel}%</span>
                </div>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${wasteData.binFillLevel}%`,
                            background:
                                wasteData.binFillLevel > 80
                                    ? 'linear-gradient(90deg, #ff9800, #ff3b3b)'
                                    : 'linear-gradient(90deg, var(--accent-teal), var(--accent-cyan))',
                        }}
                    ></div>
                </div>

                {wasteData.binFillLevel > 75 && (
                    <div
                        style={{
                            marginTop: '12px',
                            padding: '8px 12px',
                            background: 'rgba(255, 152, 0, 0.1)',
                            border: '1px solid var(--accent-orange)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--accent-orange)',
                            textAlign: 'center',
                        }}
                    >
                        ⚠️ Bin nearly full - Return to dock soon
                    </div>
                )}

                <div style={{ marginTop: '16px' }}>
                    <div className="metric-label" style={{ marginBottom: '8px' }}>
                        Collection Efficiency
                    </div>
                    <div className="mini-chart">
                        {chartData.map((value, index) => (
                            <div
                                key={index}
                                className="chart-bar"
                                style={{ height: `${(value / 100) * 100}%` }}
                                title={`${value}%`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WasteCollection;
