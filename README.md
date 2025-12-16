# 🌊 Smart River Cleaning System - Control Dashboard

A modern, high-tech web-based control dashboard for monitoring and controlling autonomous cleaning boats equipped with cameras, AI waste detection, GPS navigation, and battery management.

## 🎯 Overview

This dashboard provides a professional, mission-critical interface suitable for Smart City, Government, and Research applications. It features real-time monitoring of autonomous river cleaning boats with advanced AI-powered waste detection.

## ✨ Features

### 🎨 Visual Design
- **Dark Mode UI** with deep navy/charcoal background
- **Color-coded Status Indicators**:
  - 🔵 Teal/Cyan for active systems
  - 🟢 Green for normal operation
  - 🟠 Orange for warnings
  - 🔴 Red for critical alerts
- Flat design with soft shadows and rounded cards (8-12px radius)
- Clean typography using Inter font family
- Subtle glowing highlights for active states

### 🧩 Dashboard Layout

#### Left Sidebar
- Logo and system branding
- Navigation menu:
  - 📊 Dashboard
  - 📹 Live Camera
  - 🗺️ Map View
  - 📈 Waste Analytics
  - ⚡ Power & Battery
  - 🔔 Alerts
  - ⚙️ Settings
- Collapsible sidebar functionality

#### Top Status Bar
- System status indicator (Online/Offline)
- Connection strength visualization
- Real-time date and time
- User profile
- Emergency Stop button

#### Main Content Area

**Left Panel:**
- 📹 **Live Camera Feed**
  - AI waste detection with bounding boxes
  - Real-time object labels (Plastic Bottle, Floating Debris, Organic Waste)
  - Stream controls (Start/Stop, Capture Snapshot)

**Center Panel:**
- 🗺️ **Interactive Map View**
  - River path visualization
  - Boat position with direction indicator
  - Cleaning path trail
  - Waste hotspot markers with animated pulses
  - Color-coded legend
  - Zoom in/out controls
  - Grid overlay for precision

- 🎛️ **Mission Control**
  - Mission ID and progress tracking
  - Real-time elapsed time
  - Distance covered
  - Start/Pause/Abort controls
  - Progress visualization

**Right Panel:**
- ⚙️ **Boat Status**
  - Current speed (m/s)
  - Heading (degrees)
  - GPS coordinates
  - Operating mode (Manual/Auto/Docking)
  - Signal strength

- ⚡ **Power & Battery**
  - Circular gauge for battery percentage
  - Voltage display
  - Estimated runtime
  - Charging status
  - Color-coded battery levels

- 🗑️ **Waste Collection**
  - Total trash collected (kg)
  - Bin fill level with progress bar
  - Collection efficiency chart
  - Auto-warning when bin is nearly full

- 🔔 **System Alerts**
  - Scrollable alert list
  - Severity-based categorization
  - Acknowledge/Reset functionality
  - Real-time notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd e:\boat_ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

## 🏗️ Project Structure

```
boat_ui/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Sidebar.jsx
│   │   ├── TopBar.jsx
│   │   ├── CameraFeed.jsx
│   │   ├── MapView.jsx
│   │   ├── BoatStatus.jsx
│   │   ├── PowerBattery.jsx
│   │   ├── WasteCollection.jsx
│   │   ├── AlertsPanel.jsx
│   │   └── MissionControl.jsx
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles & design system
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette
```css
--bg-primary: #0a0e1a
--bg-secondary: #131827
--bg-card: #1a2035

--accent-teal: #00d4d4
--accent-cyan: #00ffff
--accent-green: #00ff88
--accent-orange: #ff9800
--accent-red: #ff3b3b
```

### Typography
- Font Family: Inter
- Sizes: xs(11px), sm(13px), md(15px), lg(18px), xl(24px), xxl(32px)

### Components
- Cards with hover effects
- Circular gauges for metrics
- Progress bars
- Interactive SVG maps
- Real-time data visualization

## 🔧 Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling with CSS custom properties
- **SVG** - Interactive map and gauge visualizations

## 📊 Features in Detail

### Real-Time Updates
- Time updates every second
- Mission progress simulation
- Animated map markers
- Live battery monitoring

### Interactive Elements
- Clickable navigation
- Toggleable camera stream
- Zoomable map
- Acknowledge alerts
- Mission controls

### Responsive Design
- Desktop-first approach
- Adapts to different screen sizes
- Collapsible sidebar for smaller screens

## 🎯 Use Cases

- **Smart Cities**: Municipal water body cleaning operations
- **Government**: Environmental monitoring and cleanup
- **Research**: Water quality and pollution studies
- **Commercial**: Industrial waterway maintenance

## 🔐 Safety Features

- Emergency Stop button
- Alert system with severity levels
- System status monitoring
- Battery level warnings
- Bin full notifications

## 🌟 Future Enhancements

- Historical data analytics dashboard
- Multi-boat fleet management
- Advanced AI model integration
- Real-time video streaming
- Weather integration
- Route optimization
- Cloud data synchronization
- Mobile responsive version

## 📝 License

This project is built for demonstration and educational purposes.

## 👥 Support

For issues or questions, please refer to the project documentation or contact your system administrator.

---

**Built with ❤️ for cleaner waterways**
