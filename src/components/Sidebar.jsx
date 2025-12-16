import { useState } from 'react';

const Sidebar = ({ collapsed, onToggle, activeView, onViewChange }) => {
    const navItems = [
        { id: 'dashboard', icon: '📊', label: 'Dashboard' },
        { id: 'camera', icon: '📹', label: 'Live Camera' },
        { id: 'map', icon: '🗺️', label: 'Map View' },
        { id: 'analytics', icon: '📈', label: 'Waste Analytics' },
        { id: 'power', icon: '⚡', label: 'Power & Battery' },
        { id: 'alerts', icon: '🔔', label: 'Alerts' },
        { id: 'settings', icon: '⚙️', label: 'Settings' },
    ];


    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-logo">
                {/* Hamburger Menu Button */}
                <button className="hamburger-menu" onClick={onToggle} title={collapsed ? 'Expand Menu' : 'Collapse Menu'}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className="logo-icon">🌊</div>
                <div className="logo-text">Smart River Cleaning</div>
            </div>


            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                        onClick={() => onViewChange(item.id)}
                    >

                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
