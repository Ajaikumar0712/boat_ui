import { useState } from 'react';

const AlertsPanel = () => {
    const [alerts, setAlerts] = useState([
        {
            id: 1,
            type: 'warning',
            icon: '⚠️',
            message: 'Waste bin 62% full',
            time: '2 min ago',
        },
        {
            id: 2,
            type: 'info',
            icon: 'ℹ️',
            message: 'High waste concentration detected ahead',
            time: '5 min ago',
        },
        {
            id: 3,
            type: 'warning',
            icon: '⚠️',
            message: 'Battery at 68% - Consider return path',
            time: '12 min ago',
        },
        {
            id: 4,
            type: 'success',
            icon: '✅',
            message: 'Mission waypoint 3 completed',
            time: '18 min ago',
        },
    ]);

    const handleAcknowledge = (id) => {
        setAlerts(alerts.filter((alert) => alert.id !== id));
    };

    const getAlertClass = (type) => {
        if (type === 'critical') return 'critical';
        if (type === 'warning') return 'warning';
        return '';
    };

    return (
        <div className="card slide-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">🔔</span>
                    System Alerts
                </div>
                <span
                    style={{
                        background: 'var(--accent-orange)',
                        color: 'var(--bg-primary)',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 600,
                    }}
                >
                    {alerts.length}
                </span>
            </div>

            <div className="card-body">
                <div className="alerts-list">
                    {alerts.length === 0 ? (
                        <div
                            style={{
                                textAlign: 'center',
                                color: 'var(--text-muted)',
                                padding: '20px',
                            }}
                        >
                            ✓ No active alerts
                        </div>
                    ) : (
                        alerts.map((alert) => (
                            <div
                                key={alert.id}
                                className={`alert-item ${getAlertClass(alert.type)}`}
                            >
                                <div className="alert-icon">{alert.icon}</div>
                                <div className="alert-content">
                                    <div className="alert-message">{alert.message}</div>
                                    <div className="alert-time">{alert.time}</div>
                                </div>
                                <div className="alert-actions">
                                    <button
                                        className="alert-btn"
                                        onClick={() => handleAcknowledge(alert.id)}
                                    >
                                        ✓
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlertsPanel;
