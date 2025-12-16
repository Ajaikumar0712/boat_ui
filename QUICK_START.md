# 🚀 Quick Start Guide - Smart River Cleaning System Dashboard

## Running the Application

### Option 1: Development Mode (Recommended)
```bash
cd e:\boat_ui
npm run dev
```
Then open: **http://localhost:5173/**

### Option 2: Production Build
```bash
npm run build
npm run preview
```

## 🎮 Dashboard Features & Controls

### Navigation (Left Sidebar)
- Click any menu item to highlight it (currently for display)
- Sidebar shows current active section
- All icons are clearly labeled

### Top Bar Controls
- **System Status**: Green dot = Online, Red dot = Offline
- **Emergency Stop**: Click to trigger emergency shutdown (shows alert)
- **Current Time**: Updates every second
- **User Profile**: Access user settings (placeholder)

### Main Panels

#### 📹 Camera Feed (Left Panel)
1. **Start Stream**: Click to activate simulated camera view
2. **Stop Stream**: Deactivate camera feed
3. **Capture Snapshot**: Take a screenshot (placeholder)
4. **AI Detection**: When streaming, see bounding boxes around detected waste items

#### 🗺️ Map View (Center Top)
1. **Zoom Controls**: Use + and - buttons (bottom right)
2. **Boat Tracking**: Cyan boat icon shows current position
3. **Legend**: Top-left shows color codes:
   - Blue = Active boat
   - Green = Cleaned area
   - Orange = Waste detected
   - Red = Obstacle/alert
4. **Animated Markers**: Waste hotspots pulse to indicate severity

#### 🎛️ Mission Control (Center Bottom)
1. **Start/Pause**: Toggle mission status
2. **Abort**: Stop mission (with confirmation)
3. **Live Metrics**:
   - Progress percentage
   - Time elapsed (HH:MM:SS)
   - Distance covered (km)

#### Right Panel Cards

**⚙️ Boat Status**
- Real-time speed and heading
- GPS coordinates
- Operating mode
- Signal strength

**⚡ Power & Battery**
- Circular gauge shows battery %
- Color changes: Green (>50%), Orange (25-50%), Red (<25%)
- Voltage and runtime estimates
- Charging status

**🗑️ Waste Collection**
- Total trash collected (kg)
- Bin fill level with progress bar
- Auto-warning at 75%+ capacity
- Efficiency chart (hover bars for values)

**🔔 System Alerts**
- Scrollable alert list
- Click ✓ to acknowledge/dismiss alerts
- Color-coded by severity
- Shows timestamp for each alert

## 🎨 Customization Tips

### Changing Colors
Edit `src/index.css` and modify CSS variables:
```css
:root {
  --accent-teal: #00d4d4;    /* Change to your color */
  --accent-green: #00ff88;
  --accent-orange: #ff9800;
  --accent-red: #ff3b3b;
}
```

### Adding New Components
1. Create component in `src/components/YourComponent.jsx`
2. Import in `src/App.jsx`
3. Add to appropriate panel in the content grid

### Modifying Layout
Edit the grid in `src/index.css`:
```css
.content-grid {
  grid-template-columns: 1fr 2fr 1fr; /* Adjust column widths */
}
```

## 📊 Data Integration

### Connecting Real APIs
Replace simulation data with real API calls:

**Example for Boat Status:**
```javascript
// In BoatStatus.jsx
useEffect(() => {
  fetch('your-api-endpoint/boat-status')
    .then(res => res.json())
    .then(data => setBoatData(data));
}, []);
```

### WebSocket Integration
For real-time updates:
```javascript
useEffect(() => {
  const ws = new WebSocket('ws://your-server');
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Update state with real-time data
  };
  return () => ws.close();
}, []);
```

## 🐛 Troubleshooting

### Dashboard not loading?
1. Ensure dev server is running: `npm run dev`
2. Check for errors in browser console (F12)
3. Verify all components are imported correctly

### Styles not applying?
1. Clear browser cache (Ctrl + Shift + R)
2. Check `index.css` is imported in `main.jsx`
3. Ensure no conflicting styles in `App.css`

### Components not updating?
1. Check React DevTools for state changes
2. Verify useEffect dependencies
3. Ensure proper prop passing

## 🔧 Development Tips

### Hot Module Replacement (HMR)
- Changes to components auto-refresh
- CSS updates apply instantly
- No need to restart server

### Browser DevTools
- Use React DevTools extension
- Inspect component state and props
- Monitor performance

### File Watching
Vite watches these files automatically:
- All `.jsx` files
- `.css` files
- Assets in `public/`

## 📱 Making it Responsive

Add breakpoints in `index.css`:
```css
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
Output goes to `dist/` folder

### Deploy to Hosting
Upload `dist/` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 💡 Pro Tips

1. **Performance**: Use React.memo() for components that don't change often
2. **State Management**: Consider Redux/Zustand for complex state
3. **Animations**: All animations use CSS for better performance
4. **Accessibility**: Add ARIA labels for screen readers
5. **Testing**: Write tests for critical components

## 📞 Need Help?

- Check the main README.md for feature details
- Review component code for implementation examples
- Browser console shows helpful error messages

---

**Happy Monitoring! 🌊**
