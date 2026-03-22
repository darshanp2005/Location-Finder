# Location-Finder

A lightweight, browser-based geolocation web application that retrieves and displays user coordinates with integrated Google Maps integration.

## Overview

Location-Finder is a simple yet powerful web application designed to retrieve user geolocation data with a single click. The application leverages the HTML5 Geolocation API to access device coordinates and provides seamless integration with Google Maps for real-time location visualization.

Built with vanilla JavaScript, this project demonstrates core web APIs and modern front-end development practices without external dependencies.

## Features

- **One-Click Location Retrieval**: Instantly fetch precise latitude and longitude coordinates
- **Google Maps Integration**: Directly open your location in Google Maps for detailed navigation
- **Error Handling**: Comprehensive error handling for common geolocation issues
- **Responsive Design**: Mobile-friendly interface that works across all device types
- **User-Friendly Interface**: Intuitive UI with clear call-to-action buttons
- **Real-Time Coordinates**: Display exact geographic coordinates to users
- **No Dependencies**: Pure HTML, CSS, and JavaScript implementation

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| APIs | HTML5 Geolocation API, Google Maps API |
| Fonts | Google Fonts (Anton) |
| Styling | CSS3 (Responsive, Modern) |
| Hosting | Static site ready |

## Project Structure

```
Location-Finder/
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic for geolocation
├── style.css           # Styling and responsive design
└── readme.md           # Project documentation
```

### File Descriptions

- **index.html**: Contains the DOM structure with buttons and display elements for coordinates
- **script.js**: Implements geolocation retrieval and error handling logic
- **style.css**: Provides responsive styling and visual design
- **readme.md**: Complete project documentation

## Quick Start

### Installation

1. Clone or download the repository:
```bash
git clone https://github.com/yourusername/Location-Finder.git
cd Location-Finder
```

2. Open in your browser:
   - **Using VS Code Live Server**: Right-click `index.html` → "Open with Live Server"
   - **Using Python**: 
     ```bash
     python -m http.server 8000
     # Open http://localhost:8000 in browser
     ```
   - **Using Node.js**:
     ```bash
     npx http-server
     # Open http://localhost:8080 in browser
     ```
   - **Direct**: Simply open `index.html` in your web browser

3. Grant location permissions when prompted

4. Click "FIND ME" button to retrieve coordinates

## How It Works

### Step-by-Step Workflow

```
User Click
    ↓
Check Browser Geolocation Support
    ↓
Request Location Permission
    ↓
Device GPS/WiFi Triangulation
    ↓
Retrieve Coordinates (Latitude/Longitude)
    ↓
Display on Screen
    ↓
Optional: Open in Google Maps
```

### JavaScript Logic Flow

```javascript
// 1. User clicks "FIND ME" button
getLocation()
  ↓
// 2. Browser requests permission (if not already granted)
navigator.geolocation.getCurrentPosition()
  ↓
// 3. Success callback executes
showPosition(position)
  ├─ Extract latitude from position.coords.latitude
  ├─ Extract longitude from position.coords.longitude
  └─ Display on page
  ↓
// 4. User can click "LOCATE IN MAP"
openMap()
  ├─ Validate coordinates exist
  └─ Open Google Maps with coordinates
```

## API Reference

### JavaScript Functions

#### `getLocation()`
Initiates geolocation request and handles browser compatibility.

```javascript
getLocation()
```

**Behavior:**
- Checks if `navigator.geolocation` is available
- Requests user permission to access location
- Calls `showPosition()` on success
- Calls `showError()` on failure

#### `showPosition(position)`
Processes successful geolocation response.

```javascript
showPosition(position)
// position object contains:
// - position.coords.latitude (number)
// - position.coords.longitude (number)
// - position.coords.accuracy (number in meters)
// - position.timestamp (milliseconds)
```

**Parameters:**
- `position` (object): Geolocation Position object

**Side Effects:**
- Updates `latitude` global variable
- Updates `longitude` global variable
- Displays coordinates on page

#### `openMap()`
Opens Google Maps with retrieved coordinates.

```javascript
openMap()
```

**Behavior:**
- Validates that coordinates have been retrieved
- Constructs Google Maps URL: `https://www.google.com/maps?q=<latitude>,<longitude>`
- Opens link in new browser tab
- Shows alert if coordinates unavailable

#### `showError(error)`
Handles geolocation errors gracefully.

```javascript
showError(error)
```

**Error Codes:**
- `1`: PERMISSION_DENIED - User denied location access
- `2`: POSITION_UNAVAILABLE - Location information unavailable
- `3`: TIMEOUT - Request exceeded time limit
- Other: Unknown error occurred

---

**Important**: Most browsers require HTTPS for geolocation API access. HTTP is only allowed for `localhost`.

## Usage

### Basic Usage

1. **Retrieve Location**
   - Open application in browser
   - Click "FIND ME" button
   - Grant location permission when prompted
   - Coordinates display on screen

2. **View on Map**
   - After retrieving coordinates, click "LOCATE IN MAP"
   - Google Maps opens in new tab showing your location

### Example Output

```
Latitude: 37.7749
Longitude: -122.4194
```

Then opening map directs to: `https://www.google.com/maps?q=37.7749,-122.4194`

## Permissions

### Required Permissions

The application requires the following browser permissions:

| Permission | Purpose | Requirement |
|-----------|---------|------------|
| Geolocation | Access device location | User must grant explicitly |
| HTTPS | Secure connection | Required for geolocation API |








