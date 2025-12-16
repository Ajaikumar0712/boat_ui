# 🎯 Component Architecture Guide

## Overview
This document explains the component structure and data flow in the Smart River Cleaning System Dashboard.

## Component Hierarchy

```
App.jsx (Root Component)
│
├── Sidebar.jsx
│   ├── Logo Section
│   └── Navigation Menu (7 items)
│
├── TopBar.jsx
│   ├── System Status Indicator
│   ├── Connection Strength
│   ├── DateTime Display
│   ├── User Profile
│   └── Emergency Stop Button
│
└── Content Grid (3 Columns)
    │
    ├── Left Panel
    │   └── CameraFeed.jsx
    │       ├── Video Stream Area
    │       ├── AI Detection Overlays
    │       └── Control Buttons
    │
    ├── Center Panel
    │   ├── MapView.jsx
    │   │   ├── SVG Map Canvas
    │   │   ├── Boat Position Marker
    │   │   ├── Waste Hotspots
    │   │   ├── River Path
    │   │   ├── Legend
    │   │   └── Zoom Controls
    │   │
    │   └── MissionControl.jsx
    │       ├── Mission Metrics
    │       ├── Progress Bar
    │       └── Control Buttons
    │
    └── Right Panel
        ├── BoatStatus.jsx
        │   └── 5 Status Metrics
        │
        ├── PowerBattery.jsx
        │   ├── Circular Gauge (SVG)
        │   └── Battery Metrics
        │
        ├── WasteCollection.jsx
        │   ├── Collection Stats
        │   ├── Fill Level Bar
        │   └── Efficiency Chart
        │
        └── AlertsPanel.jsx
            └── Scrollable Alert List
```

## Data Flow

### State Management Pattern

```
App.jsx (Parent State)
  │
  ├── currentTime (updates every 1s)
  ├── systemOnline (boolean)
  └── sidebarCollapsed (boolean)
  │
  └── Props passed down ↓
      │
      ├── TopBar ← receives: currentTime, systemOnline
      ├── Sidebar ← receives: collapsed, onToggle
      │
      └── Child Components (Self-managed state)
          ├── CameraFeed → streaming (boolean)
          ├── MapView → zoomLevel (number)
          ├── MissionControl → missionActive, missionData
          └── AlertsPanel → alerts (array)
```

### Component State Examples

#### CameraFeed
```javascript
State:
  - streaming: boolean

Methods:
  - setStreaming(boolean)
  - handleStartStream()
  - handleCapture()

Data:
  - detections: Array<{id, label, x, y, width, height}>
```

#### MapView
```javascript
State:
  - zoomLevel: number

Methods:
  - handleZoomIn()
  - handleZoomOut()

Data:
  - riverPath: SVG path string
  - boatPosition: {x, y, angle}
  - wasteHotspots: Array<{x, y, severity}>
```

#### MissionControl
```javascript
State:
  - missionActive: boolean
  - missionData: {
      id: string,
      progress: number,
      timeElapsed: number,
      distanceCovered: number
    }

Methods:
  - handleStart()
  - handlePause()
  - handleAbort()

Effects:
  - Timer that increments time/progress when active
```

## Component Communication

### Parent → Child (Props)
```javascript
// App.jsx
<TopBar 
  currentTime={currentTime}
  systemOnline={systemOnline}
  onEmergencyStop={handleEmergencyStop}
/>
```

### Child → Parent (Callbacks)
```javascript
// Sidebar.jsx
<Sidebar 
  collapsed={sidebarCollapsed}
  onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
/>
```

### Sibling Communication (Future: Context/Redux)
For complex state sharing, consider:
```javascript
// Create context
const DashboardContext = createContext();

// Provider in App.jsx
<DashboardContext.Provider value={{...}}>
  {children}
</DashboardContext.Provider>

// Consume in components
const { boatData } = useContext(DashboardContext);
```

## Styling Architecture

### CSS Organization
```
index.css
├── :root (CSS Variables)
├── Global Reset
├── Layout Classes
│   ├── .dashboard
│   ├── .sidebar
│   ├── .main-content
│   └── .content-grid
├── Component Classes
│   ├── .card
│   ├── .metric-row
│   ├── .gauge-container
│   └── etc.
└── Animations & Media Queries
```

### Class Naming Convention
```css
/* Block */
.card { }

/* Block__Element */
.card-header { }
.card-body { }
.card-title { }

/* Block--Modifier */
.card.fade-in { }
.nav-item.active { }
.alert-item.critical { }
```

### Style Cascade
1. CSS Variables (colors, spacing, etc.)
2. Global styles (reset, body)
3. Layout styles (grid, flex)
4. Component styles (cards, buttons)
5. Utility styles (animations, responsive)

## Component Patterns

### Pure Presentational Components
Components that only render based on props:

```javascript
const BoatStatus = ({ data }) => {
  return (
    <div className="card">
      {/* Render data */}
    </div>
  );
};
```

### Stateful Container Components
Components that manage their own state:

```javascript
const MissionControl = () => {
  const [missionActive, setMissionActive] = useState(true);
  
  // State management logic
  
  return (
    <div className="card">
      {/* Render with state */}
    </div>
  );
};
```

### Components with Side Effects
Components that perform effects:

```javascript
const MissionControl = () => {
  useEffect(() => {
    // Timer, API calls, subscriptions
    const timer = setInterval(() => {
      // Update logic
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup
  }, [dependencies]);
  
  return <div>...</div>;
};
```

## Best Practices Used

### 1. Component Separation
- Each component has a single responsibility
- Components are reusable and composable
- Clear props interface

### 2. State Management
- State is kept as local as possible
- Lift state up only when needed
- Use effects for side operations

### 3. Prop Drilling Solutions
Current: Props passed 1-2 levels deep (manageable)
Future: Consider Context API or state management library if deeper

### 4. Performance Optimization

```javascript
// Memoization (when needed)
const ExpensiveComponent = React.memo(({ data }) => {
  // Only re-renders when data changes
});

// Callback optimization
const handleClick = useCallback(() => {
  // Function reference stays stable
}, [dependencies]);

// Computed values
const totalWaste = useMemo(() => {
  return wasteData.reduce((sum, item) => sum + item.kg, 0);
}, [wasteData]);
```

## Adding New Components

### Step-by-Step Guide

1. **Create Component File**
```bash
# In src/components/
touch NewComponent.jsx
```

2. **Basic Structure**
```javascript
const NewComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Event handlers
  const handleAction = () => {
    // Handle action
  };
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <span className="card-icon">🎯</span>
          Component Title
        </div>
      </div>
      <div className="card-body">
        {/* Content */}
      </div>
    </div>
  );
};

export default NewComponent;
```

3. **Import in App.jsx**
```javascript
import NewComponent from './components/NewComponent';
```

4. **Add to Layout**
```javascript
<div className="content-grid">
  <div className="left-panel">
    <NewComponent prop1={value1} />
  </div>
</div>
```

5. **Add Styles (if needed)**
```css
/* In index.css */
.new-component-specific-class {
  /* Styles */
}
```

## Component Testing Strategy

### Unit Tests
```javascript
import { render, screen } from '@testing-library/react';
import BoatStatus from './BoatStatus';

test('renders boat speed correctly', () => {
  render(<BoatStatus />);
  const speedElement = screen.getByText(/2.4 m\/s/i);
  expect(speedElement).toBeInTheDocument();
});
```

### Integration Tests
```javascript
test('mission control updates on button click', () => {
  render(<MissionControl />);
  const pauseButton = screen.getByText(/Pause/i);
  fireEvent.click(pauseButton);
  expect(screen.getByText(/Paused/i)).toBeInTheDocument();
});
```

## Future Architecture Considerations

### When to Introduce State Management
Consider Redux/Zustand when:
- 5+ components share the same state
- Complex state interactions
- Need for time-travel debugging
- Team preference for explicit state flow

### When to Add React Router
Add routing when:
- Multiple distinct pages/views
- Deep linking requirements
- Browser history management needed

### When to Consider Component Library
Use component library (MUI, Chakra) when:
- Need many complex UI components
- Team wants consistent design system
- Want to speed up development

## Performance Monitoring

### Key Metrics to Track
- Time to Interactive
- First Contentful Paint
- Component render count
- Bundle size
- Memory usage

### Tools
- React DevTools Profiler
- Chrome DevTools Performance
- Lighthouse
- Bundle Analyzer

---

**This architecture is designed to be:**
- 📦 Modular - Easy to modify individual parts
- 🔄 Maintainable - Clear patterns and structure  
- 📈 Scalable - Can grow with new features
- 🎯 Focused - Each component has one job
- 🚀 Performant - Optimized rendering

