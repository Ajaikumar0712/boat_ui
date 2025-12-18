const TopBar = ({ currentTime, systemOnline, onEmergencyStop }) => {
    // format time display
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="system-status">
                    <div className={`status-indicator ${systemOnline ? 'online' : 'offline'}`}></div>
                    <span className="status-text">
                        {systemOnline ? 'System Online' : 'System Offline'}
                    </span>
                </div>

                <div className="connection-strength">
                    <div className="signal-bars">
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                        <div className="signal-bar"></div>
                    </div>
                    <span>Strong</span>
                </div>
            </div>

            <div className="top-bar-right">
                <div className="datetime">
                    <div>{formatDate(currentTime)}</div>
                    <div style={{ fontWeight: 600, fontSize: '15px' }}>{formatTime(currentTime)}</div>
                </div>

                

                <button className="emergency-stop" onClick={onEmergencyStop}>
                    EMERGENCY STOP
                </button>
            </div>
        </div>
    );
};

export default TopBar;
