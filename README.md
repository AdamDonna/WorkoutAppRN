# Workout Execution App

A timer-driven workout application for a 3-day strength + conditioning program, built with React Native and Expo. This app acts as a session conductor, guiding users through structured workouts with automatic timing and minimal interaction.

## 🎯 Features

### Core Functionality
- **Timer-driven execution** with automatic progression through exercises
- **4 timer types**: Countdown, Interval, EMOM, Rest
- **5 block types**: Warmup, Power, Circuit, EMOM, Finisher  
- **Audio & haptic feedback** for transitions and warnings
- **Offline-first design** - no network required
- **Pause/Resume/Skip controls** for minimal interaction during training

### Workout Program
- **Day 1**: Lower Body Power + Engine (40-45 min)
- **Day 2**: Upper Body Power + Conditioning (40-45 min)  
- **Day 3**: Full Body Engine (40-45 min)

## 🚀 Quick Start

### Prerequisites
- Node.js 20.8.0 or higher
- npm or yarn
- (Optional) Expo Go app on your mobile device

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd WorkoutAppRN

# Install dependencies
npm install

# Install web dependencies
npx expo install react-dom react-native-web

# Start the development server
npm run web
```

### Running the App

#### Option 1: Web Browser (Recommended for testing)
```bash
npm run web
```
Then open http://localhost:8081 in your browser

#### Option 2: Development Mode (Requires internet)
```bash
npm start
```
Scan the QR code with your camera (iOS) or Expo Go app (Android)

#### Option 3: Offline Mobile App (Production-like)
Build a standalone app for your phone that works completely offline:

```bash
# Login to Expo (required for builds)
eas login

# Build for iPhone
eas build --profile development --platform ios

# Build for Android
eas build --profile development --platform android
```

The build will be available for download once complete. Install it directly on your device:
- **iOS**: Install via TestFlight link or direct installation  
- **Android**: Download and install the .apk file

#### Option 4: iOS Simulator (macOS only)
```bash
npm run ios
```

## 📱 How to Use

### Home Screen
1. Select from the 3-day workout program
2. Each card shows workout duration and block types
3. Color-coded chips indicate block types:
   - 🟠 **Warmup** - Mobility and movement prep
   - 🔴 **Power** - Explosive strength work
   - 🔵 **Circuit** - Multi-exercise sequences
   - 🟣 **EMOM** - Every Minute on the Minute
   - 🟢 **Finisher** - Conditioning work

### Workout Execution
1. **Tap a workout card** to start
2. **Timer begins automatically** - large countdown display
3. **Follow exercise instructions** shown on screen
4. **Use controls only when needed**:
   - ⏸️/▶️ Pause/Resume
   - ⏭️ Skip current exercise
   - ⏹️ End workout

### Timer Features
- **5-second warning**: Timer turns orange with "Get Ready!" message
- **Automatic progression** through exercises and rounds
- **Haptic feedback** on mobile devices
- **Visual progress tracking** with progress bar

## 🏋️ Workout Specifications

### Day 1 - Lower Body Power + Engine
**Warm-up** (5 min)
- Row or Ski (2 min)
- Mobility exercises
- Goblet squats
- Glute bridges

**Power Block** (8-10 min)
- Trap bar deadlift OR kettlebell deadlift
- 4-5 sets × 3 reps
- 90 sec rest between sets
- Explosive concentric movement

**Circuit** (4 rounds, ~60 sec rest)
- Bulgarian split squat (8/leg)
- Kettlebell swings (20 reps)
- Landmine row (10/side)
- Ski erg (45 sec)

**Finisher** (5 rounds)
- Row or Ski Erg intervals
- 30 sec hard, 30 sec easy

### Day 2 - Upper Body Power + Conditioning
**Warm-up**
- Band pull-aparts
- Scap push-ups
- Kettlebell halos

**Power Block**
- Landmine push press
- 5 sets × 3-5 reps
- 90 sec rest

**Circuit** (4 rounds)
- Pull-ups or inverted rows (8-10)
- Floor press or push-ups (12)
- Bulgarian bag clean (10)
- Ski erg (30 sec)

**Finisher - EMOM × 5**
- Minute 1: Kettlebell snatches (10)
- Minute 2: Push-ups (10)

### Day 3 - Full Body Engine
**Warm-up**
- Row + mobility work

**Power Block**
- Landmine clean or box jump
- 5 sets × 3 reps

**Circuit** (5 rounds, 90 sec rest)
- Complex: RDL → Row → Front squat → Push press
- 6 reps each exercise
- No rest within round

**Finisher** (5-6 min continuous)
- Bulgarian bag carry circuit
- Bear hug carry, over-shoulder toss, front carry march

## 🛠️ Technical Details

### Tech Stack
- **React Native** with Expo SDK 54
- **TypeScript** for type safety
- **Expo Audio** for sound feedback
- **Expo Haptics** for tactile feedback
- **React Native Web** for browser support

### Project Structure
```
WorkoutAppRN/
├── App.tsx              # Main app component with all logic
├── assets/              # App icons and splash screens
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

### Design Principles
1. **No modifications** to workout structure
2. **Preserve exercise order** exactly as specified
3. **Timer-driven** progression with minimal manual interaction
4. **Offline-first** operation
5. **Session conductor** role (not a coach)

## 🧪 Testing

### Manual Testing Checklist
- [ ] Home screen displays 3 workout cards
- [ ] Workout cards show correct duration and block types
- [ ] Timer starts automatically when workout is selected
- [ ] Timer counts down correctly (MM:SS format)
- [ ] 5-second warning appears (orange timer + "Get Ready!")
- [ ] Automatic progression through exercises
- [ ] Pause/resume functionality works
- [ ] Skip button advances to next exercise
- [ ] End workout returns to home screen
- [ ] Progress bar updates correctly
- [ ] Haptic feedback works on mobile devices

### Performance Testing
- App should start quickly (< 3 seconds)
- Timer should be accurate to the second
- UI should remain responsive during workouts
- Memory usage should remain stable

## 📋 Scripts

```bash
# Development
npm start          # Start Expo development server
npm run web        # Start web development server
npm run ios        # Start iOS simulator (macOS only)
npm run android    # Start Android emulator

# Dependencies
npm install                              # Install all dependencies
npx expo install react-dom react-native-web  # Add web support
```

## 🔧 Troubleshooting

### Common Issues

**"Web support dependencies missing"**
```bash
npx expo install react-dom react-native-web
```

**Timer not working on web**
- Ensure browser tab is active (background tabs may throttle timers)
- Check browser console for JavaScript errors

**App won't start**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`
- Ensure Node.js version is 20.8.0 or higher

**Haptic feedback not working**
- Only works on physical mobile devices, not web or simulators
- Ensure device has haptic feedback enabled in settings

### Development Notes
- Timer precision may vary in development mode
- Production builds will have more consistent timing
- Web version has limited haptic feedback (none)
- Audio feedback requires user interaction on web browsers

## 🚫 Constraints

This app is designed with strict adherence to the original workout specifications:

- ❌ **No exercise substitutions** or modifications
- ❌ **No reordering** of workouts or exercises  
- ❌ **No AI decisions** during workouts
- ❌ **No optimization** beyond original spec
- ✅ **Exact preservation** of workout structure
- ✅ **Timer-driven** experience with minimal interaction
- ✅ **Session conductor** role only

## 📝 License

This project is for fitness training purposes. All workout specifications are preserved exactly as provided.

## 🤝 Contributing

This app follows strict specifications. Any changes must:
1. Preserve exact workout structure
2. Maintain timer-driven experience  
3. Keep minimal interaction design
4. Follow offline-first principles

---

Built with ❤️ for effective strength and conditioning training.