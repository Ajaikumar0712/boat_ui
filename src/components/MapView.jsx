import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline, Circle } from '@react-google-maps/api';

// TODO: maybe move this to a separate config file?
const MapView = ({ fullScreen }) => {
    const [map, setMap] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(15);

    // Default center - Delhi coords
    const center = {
        lat: 28.6139,
        lng: 77.2090,
    };

    const containerStyle = {
        width: '100%',
        height: fullScreen ? '700px' : '500px',
    };

    // simulating river path here
    const riverPath = [
        { lat: 28.6100, lng: 77.2050 },
        { lat: 28.6120, lng: 77.2070 },
        { lat: 28.6139, lng: 77.2090 },
        { lat: 28.6160, lng: 77.2110 },
        { lat: 28.6180, lng: 77.2130 },
    ];

    const boatPosition = { lat: 28.6139, lng: 77.2090 };

    // detected waste locations
    const wasteHotspots = [
        { id: 1, lat: 28.6105, lng: 77.2055, severity: 'high', count: 23 },
        { id: 2, lat: 28.6145, lng: 77.2095, severity: 'medium', count: 12 },
        { id: 3, lat: 28.6170, lng: 77.2120, severity: 'low', count: 5 },
    ];

    const mapOptions = {
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        mapTypeId: 'satellite',
    };

    const onLoad = useCallback((map) => {
        console.log('Map loaded successfully');
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    // helper function for severity colors
    function getSeverityColor(severity) {
        // could use a map object here but switch works fine
        switch (severity) {
            case 'high': return '#ff3b3b';
            case 'medium': return '#ff9800';
            case 'low': return '#ffeb3b';
            default: return '#00d4d4';
        }
    }

    const googleMapsApiKey = "AIzaSyDzd5-JJ7nJYfgQkgksIHFPcqgezzWv8y0"; // API key

    return (
        <div className="card fade-in">
            <div className="card-header">
                <div className="card-title">
                    <span className="card-icon">🗺️</span>
                    Map View
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="map-control-btn"
                        onClick={() => map && map.setZoom(map.getZoom() + 1)}
                        title="Zoom In">
                        +
                    </button>
                    <button className="map-control-btn"
                        onClick={() => map && map.setZoom(map.getZoom() - 1)}
                        title="Zoom Out">
                        −
                    </button>
                </div>
            </div>

            <div className="card-body">
                {googleMapsApiKey === "YOUR_GOOGLE_MAPS_API_KEY" ? (
                    <div style={{
                        height: containerStyle.height,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-md)',
                        padding: '40px',
                        textAlign: 'center',
                    }}>
                        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🗺️</div>
                        <h3 style={{ color: 'var(--accent-orange)', marginBottom: '12px' }}>
                            Google Maps API Key Required
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '600px' }}>
                            To enable Google Maps integration, you need to add your API key.
                        </p>
                        <div style={{
                            background: 'var(--bg-card)',
                            padding: '20px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            textAlign: 'left',
                            marginBottom: '20px',
                        }}>
                            <div style={{ fontSize: 'var(--font-size-sm)', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                                <strong>Steps to get your API key:</strong>
                            </div>
                            <ol style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', paddingLeft: '20px' }}>
                                <li>Go to <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-teal)' }}>Google Cloud Console</a></li>
                                <li>Create a new project (or select existing one)</li>
                                <li>Enable "Maps JavaScript API"</li>
                                <li>Go to "Credentials" and create an API key</li>
                                <li>Copy the API key</li>
                                <li>Open <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '3px', color: 'var(--accent-cyan)' }}>src/components/MapView.jsx</code></li>
                                <li>Replace <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '3px', color: 'var(--accent-cyan)' }}>YOUR_GOOGLE_MAPS_API_KEY</code> with your actual key</li>
                            </ol>
                        </div>
                        <div style={{
                            padding: '12px 16px',
                            background: 'rgba(255, 152, 0, 0.1)',
                            border: '1px solid var(--accent-orange)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--accent-orange)',
                        }}>
                            💡 <strong>Tip:</strong> Google Maps offers $200 free credit per month!
                        </div>
                    </div>
                ) : (
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={zoomLevel}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={mapOptions}>
                            {/* river path overlay */}
                            <Polyline
                                path={riverPath}
                                options={{
                                    strokeColor: '#00d4d4',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 4,
                                    geodesic: true
                                }}
                            />

                            {/* cleaned section */}
                            <Polyline
                                path={riverPath.slice(0, 3)}
                                options={{
                                    strokeColor: '#00ff88',
                                    strokeOpacity: 0.6,
                                    strokeWeight: 3,
                                    geodesic: true,
                                    strokePattern: [10, 5]
                                }}
                            />

                            {/* boat location marker */}
                            <Marker
                                position={boatPosition}
                                icon={{
                                    path: window.google?.maps?.SymbolPath?.FORWARD_CLOSED_ARROW || 0,
                                    fillColor: '#00d4d4',
                                    fillOpacity: 1,
                                    strokeColor: '#00ffff',
                                    strokeWeight: 2,
                                    scale: 6,
                                    rotation: 45
                                }}
                                title="Cleaning Boat"
                                animation={window.google?.maps?.Animation?.BOUNCE}
                            />

                            {wasteHotspots.map((hotspot) => (
                                <div key={hotspot.id}>
                                    <Marker
                                        position={{ lat: hotspot.lat, lng: hotspot.lng }}
                                        icon={{
                                            path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
                                            fillColor: getSeverityColor(hotspot.severity),
                                            fillOpacity: 0.9,
                                            strokeColor: '#ffffff',
                                            strokeWeight: 2,
                                            scale: 8
                                        }}
                                        title={`Waste Hotspot: ${hotspot.count} items (${hotspot.severity})`}
                                    />
                                    <Circle
                                        center={{ lat: hotspot.lat, lng: hotspot.lng }}
                                        radius={50}
                                        options={{
                                            fillColor: getSeverityColor(hotspot.severity),
                                            fillOpacity: 0.2,
                                            strokeColor: getSeverityColor(hotspot.severity),
                                            strokeOpacity: 0.5,
                                            strokeWeight: 1
                                        }}
                                    />
                                </div>
                            ))}
                        </GoogleMap>
                    </LoadScript>
                )}

                {/* legend */}
                <div style={{ marginTop: '16px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)' }}>
                        <div style={{ width: '12px', height: '12px', background: '#00d4d4', borderRadius: '50%' }}></div>
                        <span>Active Boat</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)' }}>
                        <div style={{ width: '12px', height: '12px', background: '#00ff88', borderRadius: '3px' }}></div>
                        <span>Cleaned Path</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)' }}>
                        <div style={{ width: '12px', height: '12px', background: '#ff3b3b', borderRadius: '50%' }}></div>
                        <span>High Waste</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)' }}>
                        <div style={{ width: '12px', height: '12px', background: '#ff9800', borderRadius: '50%' }}></div>
                        <span>Medium Waste</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)' }}>
                        <div style={{ width: '12px', height: '12px', background: '#ffeb3b', borderRadius: '50%' }}></div>
                        <span>Low Waste</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapView;
