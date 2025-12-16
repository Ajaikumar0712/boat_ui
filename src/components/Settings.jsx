import { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        autoMode: true,
        notifications: true,
        soundAlerts: false,
        dataLogging: true,
        apiEndpoint: 'http://localhost:3000/api',
        updateInterval: 1000,
        mapRefreshRate: 500,
        batteryWarningLevel: 25,
        binWarningLevel: 75,
    });

    const handleToggle = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    const handleNumberChange = (key, value) => {
        setSettings({ ...settings, [key]: parseInt(value) });
    };

    const handleTextChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
    };

    return (
        <div className="card fade-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">⚙️</span>
                    System Settings
                </div>
            </div>

            <div className="card-body">
                {/* System Configuration */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600', color: 'var(--accent-teal)' }}>
                        System Configuration
                    </h3>

                    <div className="metric-row" style={{ border: 'none', paddingBottom: '16px' }}>
                        <div>
                            <div style={{ fontSize: 'var(--font-size-md)', fontWeight: '500', marginBottom: '4px' }}>Auto Mode</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Enable autonomous operation</div>
                        </div>
                        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                            <input
                                type="checkbox"
                                checked={settings.autoMode}
                                onChange={() => handleToggle('autoMode')}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    cursor: 'pointer',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: settings.autoMode ? 'var(--accent-green)' : 'var(--bg-secondary)',
                                    transition: '0.3s',
                                    borderRadius: '24px',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        content: '',
                                        height: '18px',
                                        width: '18px',
                                        left: settings.autoMode ? '29px' : '3px',
                                        bottom: '3px',
                                        backgroundColor: 'white',
                                        transition: '0.3s',
                                        borderRadius: '50%',
                                    }}
                                ></span>
                            </span>
                        </label>
                    </div>

                    <div className="metric-row" style={{ border: 'none', paddingBottom: '16px' }}>
                        <div>
                            <div style={{ fontSize: 'var(--font-size-md)', fontWeight: '500', marginBottom: '4px' }}>Notifications</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Receive system notifications</div>
                        </div>
                        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                            <input
                                type="checkbox"
                                checked={settings.notifications}
                                onChange={() => handleToggle('notifications')}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    cursor: 'pointer',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: settings.notifications ? 'var(--accent-green)' : 'var(--bg-secondary)',
                                    transition: '0.3s',
                                    borderRadius: '24px',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        content: '',
                                        height: '18px',
                                        width: '18px',
                                        left: settings.notifications ? '29px' : '3px',
                                        bottom: '3px',
                                        backgroundColor: 'white',
                                        transition: '0.3s',
                                        borderRadius: '50%',
                                    }}
                                ></span>
                            </span>
                        </label>
                    </div>

                    <div className="metric-row" style={{ border: 'none', paddingBottom: '16px' }}>
                        <div>
                            <div style={{ fontSize: 'var(--font-size-md)', fontWeight: '500', marginBottom: '4px' }}>Sound Alerts</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Play sound for critical alerts</div>
                        </div>
                        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                            <input
                                type="checkbox"
                                checked={settings.soundAlerts}
                                onChange={() => handleToggle('soundAlerts')}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    cursor: 'pointer',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: settings.soundAlerts ? 'var(--accent-green)' : 'var(--bg-secondary)',
                                    transition: '0.3s',
                                    borderRadius: '24px',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        content: '',
                                        height: '18px',
                                        width: '18px',
                                        left: settings.soundAlerts ? '29px' : '3px',
                                        bottom: '3px',
                                        backgroundColor: 'white',
                                        transition: '0.3s',
                                        borderRadius: '50%',
                                    }}
                                ></span>
                            </span>
                        </label>
                    </div>

                    <div className="metric-row" style={{ border: 'none', paddingBottom: '16px' }}>
                        <div>
                            <div style={{ fontSize: 'var(--font-size-md)', fontWeight: '500', marginBottom: '4px' }}>Data Logging</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Log all system data</div>
                        </div>
                        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                            <input
                                type="checkbox"
                                checked={settings.dataLogging}
                                onChange={() => handleToggle('dataLogging')}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    cursor: 'pointer',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: settings.dataLogging ? 'var(--accent-green)' : 'var(--bg-secondary)',
                                    transition: '0.3s',
                                    borderRadius: '24px',
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        content: '',
                                        height: '18px',
                                        width: '18px',
                                        left: settings.dataLogging ? '29px' : '3px',
                                        bottom: '3px',
                                        backgroundColor: 'white',
                                        transition: '0.3s',
                                        borderRadius: '50%',
                                    }}
                                ></span>
                            </span>
                        </label>
                    </div>
                </div>

                {/* API Configuration */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600', color: 'var(--accent-teal)' }}>
                        API Configuration
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                            API Endpoint
                        </label>
                        <input
                            type="text"
                            value={settings.apiEndpoint}
                            onChange={(e) => handleTextChange('apiEndpoint', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        />
                    </div>
                </div>

                {/* Performance Settings */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600', color: 'var(--accent-teal)' }}>
                        Performance Settings
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                            Update Interval (ms)
                        </label>
                        <input
                            type="number"
                            value={settings.updateInterval}
                            onChange={(e) => handleNumberChange('updateInterval', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                            Map Refresh Rate (ms)
                        </label>
                        <input
                            type="number"
                            value={settings.mapRefreshRate}
                            onChange={(e) => handleNumberChange('mapRefreshRate', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        />
                    </div>
                </div>

                {/* Alert Thresholds */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '16px', fontWeight: '600', color: 'var(--accent-teal)' }}>
                        Alert Thresholds
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                            Battery Warning Level (%)
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={settings.batteryWarningLevel}
                            onChange={(e) => handleNumberChange('batteryWarningLevel', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                            Bin Warning Level (%)
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={settings.binWarningLevel}
                            onChange={(e) => handleNumberChange('binWarningLevel', e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button
                        className="control-btn"
                        style={{ flex: '0 0 auto', padding: '12px 24px' }}
                        onClick={() => alert('Settings saved!')}
                    >
                        💾 Save Settings
                    </button>
                    <button
                        className="control-btn abort"
                        style={{ flex: '0 0 auto', padding: '12px 24px' }}
                        onClick={() => window.location.reload()}
                    >
                        🔄 Reset to Default
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
