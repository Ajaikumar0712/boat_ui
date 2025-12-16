import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CameraFeed from './components/CameraFeed';
import MapView from './components/MapView';
import BoatStatus from './components/BoatStatus';
import PowerBattery from './components/PowerBattery';
import WasteCollection from './components/WasteCollection';
import AlertsPanel from './components/AlertsPanel';
import MissionControl from './components/MissionControl';
import WasteAnalytics from './components/WasteAnalytics';
import Settings from './components/Settings';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemOnline, setSystemOnline] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Render different views based on active navigation
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="content-grid">
            {/* Left Panel */}
            <div className="left-panel">
              <CameraFeed />
            </div>

            {/* Center Panel */}
            <div className="center-panel">
              <MapView />
              <MissionControl />
            </div>

            {/* Right Panel */}
            <div className="right-panel">
              <BoatStatus />
              <PowerBattery />
              <WasteCollection />
              <AlertsPanel />
            </div>
          </div>
        );

      case 'camera':
        return (
          <div className="content-grid single-view">
            <div className="full-width-panel">
              <CameraFeed fullScreen={true} />
              <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <BoatStatus />
                <AlertsPanel />
              </div>
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="content-grid">
            <div className="map-view-panel" style={{ gridColumn: '1 / -1' }}>
              <MapView fullScreen={true} />
            </div>
            <div className="left-panel">
              <BoatStatus />
              <MissionControl />
            </div>
            <div className="right-panel">
              <AlertsPanel />
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="content-grid">
            <div className="analytics-panel" style={{ gridColumn: '1 / -1' }}>
              <WasteAnalytics />
            </div>
          </div>
        );

      case 'power':
        return (
          <div className="content-grid">
            <div className="center-panel">
              <PowerBattery fullScreen={true} />
            </div>
            <div className="right-panel">
              <BoatStatus />
              <MissionControl />
              <AlertsPanel />
            </div>
          </div>
        );

      case 'alerts':
        return (
          <div className="content-grid">
            <div className="center-panel">
              <AlertsPanel fullScreen={true} />
            </div>
            <div className="right-panel">
              <BoatStatus />
              <PowerBattery />
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="content-grid single-view">
            <div className="full-width-panel">
              <Settings />
            </div>
          </div>
        );

      default:
        return renderView();
    }
  };

  return (
    <div className="dashboard">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <div className="main-content">
        <TopBar
          currentTime={currentTime}
          systemOnline={systemOnline}
          onEmergencyStop={() => alert('Emergency Stop Activated!')}
        />

        {renderView()}
      </div>
    </div>
  );
}

export default App;
