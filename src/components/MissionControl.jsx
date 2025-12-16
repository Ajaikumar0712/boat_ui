import { useState, useEffect } from 'react';

const MissionControl = () => {
    const [missionActive, setMissionActive] = useState(true);
    const [missionData, setMissionData] = useState({
        id: 'RC-2024-001',
        progress: 67,
        timeElapsed: 2847, // seconds
        distanceCovered: 1.34, // km
    });

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Simulate mission progress
    useEffect(() => {
        if (!missionActive) return;

        const timer = setInterval(() => {
            setMissionData((prev) => ({
                ...prev,
                timeElapsed: prev.timeElapsed + 1,
                progress: Math.min(prev.progress + 0.1, 100),
                distanceCovered: prev.distanceCovered + 0.001,
            }));
        }, 1000);

        return () => clearInterval(timer);
    }, [missionActive]);

    const handleStart = () => setMissionActive(true);
    const handlePause = () => setMissionActive(false);
    const handleAbort = () => {
        if (window.confirm('Are you sure you want to abort the mission?')) {
            setMissionActive(false);
            setMissionData((prev) => ({ ...prev, progress: 0 }));
        }
    };

    return (
        <div className="card fade-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">🎛️</span>
                    Mission Control
                </div>
                <span
                    style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--text-muted)',
                        fontFamily: 'monospace',
                    }}
                >
                    ID: {missionData.id}
                </span>
            </div>

            <div className="card-body">
                <div className="metric-row">
                    <span className="metric-label">Mission Progress</span>
                    <span className="metric-value highlight">
                        {missionData.progress.toFixed(1)}%
                    </span>
                </div>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${missionData.progress}%` }}
                    ></div>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <div className="metric-row">
                        <span className="metric-label">Time Elapsed</span>
                        <span className="metric-value" style={{ fontFamily: 'monospace' }}>
                            {formatTime(missionData.timeElapsed)}
                        </span>
                    </div>

                    <div className="metric-row">
                        <span className="metric-label">Distance Covered</span>
                        <span className="metric-value highlight">
                            {missionData.distanceCovered.toFixed(2)} km
                        </span>
                    </div>

                    <div className="metric-row">
                        <span className="metric-label">Status</span>
                        <span
                            className="metric-value"
                            style={{
                                color: missionActive ? 'var(--accent-green)' : 'var(--accent-orange)',
                            }}
                        >
                            {missionActive ? '🟢 Active' : '⏸️ Paused'}
                        </span>
                    </div>
                </div>

                <div className="mission-controls">
                    {!missionActive ? (
                        <button className="control-btn start" onClick={handleStart}>
                            ▶️ Start
                        </button>
                    ) : (
                        <button className="control-btn pause" onClick={handlePause}>
                            ⏸️ Pause
                        </button>
                    )}
                    <button className="control-btn abort" onClick={handleAbort}>
                        ⏹️ Abort
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MissionControl;
