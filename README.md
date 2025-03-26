# Curve Clothing Countdown Web App Documentation

## Overview
Live Link: [Curve Clothing Countdown Web App](https://coundown-project-two.vercel.app/)
The Curve Clothing Countdown Web App is a simple yet visually appealing website that features a countdown timer for an upcoming sale, an image slider showcasing products, and a brand collaboration section with rotating brand quotes.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and animations
- **JavaScript**: Functionalities like countdown timer, image slider, and dynamic brand quotes
- **Bootstrap 5.3.3**: Responsive design and layout

## Features
### 1. Countdown Timer
- Displays the remaining time before the sale starts.
- Updates in real-time every second.

### 2. Image Slider
- A carousel displaying product images.
- Automatically cycles through images every 2 seconds.

### 3. Brand Collaboration Quotes
- Displays a random brand with its tagline.
- Updates every 2 seconds or when the "Change Brand" button is clicked.

## File Structure
```
/CurveClothing
│── index.html          # Main HTML file
│── /css
│   ├── style.css       # Custom styling
│── /javascript
│   ├── script.js       # JavaScript logic
│── /images             # Folder for images
```

## Code Breakdown
### 1. **index.html** (Structure)
- Contains a heading for "Curve Clothing"
- Countdown timer inside a `div` with ID `timer`
- Bootstrap carousel for the image slider
- A card component for displaying brand collaborations
- Includes external scripts for Bootstrap and custom JavaScript

### 2. **style.css** (Styling)
- Gradient background for a modern look
- Styled countdown timer with animations
- Carousel images styled for uniformity
- Card component designed with a glassmorphism effect

### 3. **script.js** (Functionality)
#### Countdown Timer
- `saleTime = 86400;` (24 hours in seconds)
- `Timer()` updates the countdown every second

#### Image Slider
- `nextSlide()` changes images every 2 seconds
- Uses `setInterval(nextSlide, 2000);`

#### Brand Collaboration Section
- `brands[]` array stores brand names and taglines
- `changeQuote()` randomly selects a brand and tagline every 2 seconds

## How to Use
1. Open `index.html` in a browser.
2. Observe the countdown timer decreasing in real time.
3. Watch the automatic image slider cycle through products.
4. Click the "Change Brand" button to view different brand taglines.

## Future Enhancements
- Add user input to set custom countdown times.
- Include navigation arrows for the image slider.
- Integrate an API to fetch real-time sales and brand collaborations.

## Conclusion
This web app provides an engaging interface for showcasing an upcoming sale with a real-time countdown, dynamic product display, and brand partnership promotions.

