import { useState } from 'react';

const CameraFeed = () => {
    const [streaming, setStreaming] = useState(false);

    // mock detection data - replace with actual AI detections later
    const detections = [
        { id: 1, label: 'Plastic Bottle', x: 25, y: 30, width: 15, height: 20 },
        { id: 2, label: 'Floating Debris', x: 55, y: 45, width: 20, height: 15 },
        { id: 3, label: 'Organic Waste', x: 70, y: 25, width: 18, height: 18 }
    ];

    return (
        <div className="card fade-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">📹</span>
                    Front Camera – AI Waste Detection
                </div>
            </div>

            <div className="card-body">
                <div className="camera-container">
                    <div className="camera-feed">
                        {streaming ? (
                            <>
                                {/* simulated camera view */}
                                <svg width="100%" height="100%"
                                    style={{ background: 'linear-gradient(180deg, #1a2332 0%, #0f1419 100%)' }}>
                                    {/* water surface effects */}
                                    <ellipse cx="50%" cy="60%" rx="40%" ry="15%" fill="rgba(0, 212, 212, 0.1)" />
                                    <ellipse cx="30%" cy="45%" rx="25%" ry="10%" fill="rgba(0, 212, 212, 0.08)" />
                                    <ellipse cx="70%" cy="50%" rx="30%" ry="12%" fill="rgba(0, 212, 212, 0.06)" />
                                </svg>

                                {/* detection overlay boxes */}
                                {detections.map((detection) => (
                                    <div key={detection.id}
                                        className="detection-box"
                                        style={{
                                            left: `${detection.x}%`,
                                            top: `${detection.y}%`,
                                            width: `${detection.width}%`,
                                            height: `${detection.height}%`
                                        }}>
                                        <div className="detection-label">{detection.label}</div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="camera-overlay">
                                <div>📹 Camera Stream Offline</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="camera-controls">
                    <button className="camera-btn"
                        onClick={() => setStreaming(!streaming)}>
                        {streaming ? '⏸️ Stop Stream' : '▶️ Start Stream'}
                    </button>
                    <button className="camera-btn">📸 Capture Snapshot</button>
                </div>
            </div>
        </div>
    );
};

export default CameraFeed;
