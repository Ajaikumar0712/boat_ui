const WasteAnalytics = () => {
    // Sample data for analytics
    const weeklyData = [
        { day: 'Mon', plastic: 6.5, organic: 3.2, metal: 1.2, paper: 0.8 },
        { day: 'Tue', plastic: 7.2, organic: 4.1, metal: 1.5, paper: 1.1 },
        { day: 'Wed', plastic: 5.8, organic: 2.9, metal: 1.0, paper: 0.6 },
        { day: 'Thu', plastic: 8.1, organic: 4.5, metal: 1.8, paper: 1.3 },
        { day: 'Fri', plastic: 6.8, organic: 3.2, metal: 1.5, paper: 0.9 },
        { day: 'Sat', plastic: 9.2, organic: 5.1, metal: 2.1, paper: 1.5 },
        { day: 'Sun', plastic: 7.5, organic: 3.8, metal: 1.6, paper: 1.0 },
    ];

    const totalByType = {
        plastic: 51.1,
        organic: 26.8,
        metal: 10.7,
        paper: 7.2,
    };

    const totalWaste = Object.values(totalByType).reduce((sum, val) => sum + val, 0);

    return (
        <div className="card fade-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">📈</span>
                    Waste Analytics Dashboard
                </div>
            </div>

            <div className="card-body">
                {/* Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginBottom: '8px' }}>Total Collected</div>
                        <div style={{ fontSize: 'var(--font-size-xxl)', fontWeight: '700', color: 'var(--accent-teal)' }}>{totalWaste.toFixed(1)}<span style={{ fontSize: 'var(--font-size-md)', marginLeft: '4px' }}>kg</span></div>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginBottom: '8px' }}>Most Common</div>
                        <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '600', color: 'var(--accent-orange)' }}>Plastic</div>
                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>{((totalByType.plastic / totalWaste) * 100).toFixed(1)}%</div>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginBottom: '8px' }}>Weekly Average</div>
                        <div style={{ fontSize: 'var(--font-size-xxl)', fontWeight: '700', color: 'var(--accent-green)' }}>{(totalWaste / 7).toFixed(1)}<span style={{ fontSize: 'var(--font-size-md)', marginLeft: '4px' }}>kg/day</span></div>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginBottom: '8px' }}>Efficiency</div>
                        <div style={{ fontSize: 'var(--font-size-xxl)', fontWeight: '700', color: 'var(--accent-cyan)' }}>87<span style={{ fontSize: 'var(--font-size-md)', marginLeft: '4px' }}>%</span></div>
                    </div>
                </div>

                {/* Weekly Collection Chart */}
                <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600' }}>Weekly Collection by Type</h3>
                    <div style={{ display: 'flex', gap: '12px', height: '200px', alignItems: 'flex-end' }}>
                        {weeklyData.map((day, index) => (
                            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end', gap: '2px' }}>
                                    <div
                                        style={{
                                            height: `${(day.plastic / 10) * 100}%`,
                                            background: '#ff9800',
                                            borderRadius: '4px 4px 0 0',
                                            transition: 'all 0.3s ease',
                                        }}
                                        title={`Plastic: ${day.plastic}kg`}
                                    ></div>
                                    <div
                                        style={{
                                            height: `${(day.organic / 10) * 100}%`,
                                            background: '#00ff88',
                                            transition: 'all 0.3s ease',
                                        }}
                                        title={`Organic: ${day.organic}kg`}
                                    ></div>
                                    <div
                                        style={{
                                            height: `${(day.metal / 10) * 100}%`,
                                            background: '#a0aec0',
                                            transition: 'all 0.3s ease',
                                        }}
                                        title={`Metal: ${day.metal}kg`}
                                    ></div>
                                    <div
                                        style={{
                                            height: `${(day.paper / 10) * 100}%`,
                                            background: '#00d4d4',
                                            borderRadius: '0 0 4px 4px',
                                            transition: 'all 0.3s ease',
                                        }}
                                        title={`Paper: ${day.paper}kg`}
                                    ></div>
                                </div>
                                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>{day.day}</div>
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div style={{ display: 'flex', gap: '20px', marginTop: '16px', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '16px', height: '16px', background: '#ff9800', borderRadius: '3px' }}></div>
                            <span style={{ fontSize: 'var(--font-size-sm)' }}>Plastic</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '16px', height: '16px', background: '#00ff88', borderRadius: '3px' }}></div>
                            <span style={{ fontSize: 'var(--font-size-sm)' }}>Organic</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '16px', height: '16px', background: '#a0aec0', borderRadius: '3px' }}></div>
                            <span style={{ fontSize: 'var(--font-size-sm)' }}>Metal</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '16px', height: '16px', background: '#00d4d4', borderRadius: '3px' }}></div>
                            <span style={{ fontSize: 'var(--font-size-sm)' }}>Paper</span>
                        </div>
                    </div>
                </div>

                {/* Waste Composition */}
                <div>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600' }}>Waste Composition (This Week)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        {Object.entries(totalByType).map(([type, amount]) => (
                            <div key={type} style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ fontSize: 'var(--font-size-md)', fontWeight: '600', textTransform: 'capitalize' }}>{type}</span>
                                    <span style={{ fontSize: 'var(--font-size-md)', fontWeight: '600', color: 'var(--accent-teal)' }}>{amount.toFixed(1)} kg</span>
                                </div>
                                <div className="progress-bar" style={{ height: '10px' }}>
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: `${(amount / totalWaste) * 100}%`,
                                            background: type === 'plastic' ? '#ff9800' : type === 'organic' ? '#00ff88' : type === 'metal' ? '#a0aec0' : '#00d4d4'
                                        }}
                                    ></div>
                                </div>
                                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: '6px' }}>
                                    {((amount / totalWaste) * 100).toFixed(1)}% of total
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WasteAnalytics;
