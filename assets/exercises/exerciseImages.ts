// Exercise image mapping - SVG exercise demonstration files as strings
const gobletSquatSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="380" width="300" height="20" fill="#e9ecef"/>
  <circle cx="150" cy="80" r="18" fill="#fdbcb4"/>
  <rect x="140" y="98" width="20" height="50" rx="10" fill="#007bff"/>
  <rect x="130" y="120" width="15" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="155" y="120" width="15" height="35" rx="7" fill="#fdbcb4"/>
  <circle cx="145" cy="140" r="8" fill="#fdbcb4"/>
  <circle cx="155" cy="140" r="8" fill="#fdbcb4"/>
  <ellipse cx="150" cy="150" rx="15" ry="8" fill="#495057"/>
  <rect x="135" y="148" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(-15 142 165.5)"/>
  <rect x="151" y="148" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(15 158 165.5)"/>
  <rect x="130" y="180" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="156" y="180" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <ellipse cx="130" cy="225" rx="12" ry="6" fill="#2c2c2c"/>
  <ellipse cx="170" cy="225" rx="12" ry="6" fill="#2c2c2c"/>
  <path d="M190 150 L190 120 L185 125 M190 120 L195 125" stroke="#007bff" stroke-width="3" fill="none"/>
  <text x="200" y="135" fill="#007bff" font-family="Arial, sans-serif" font-size="12" font-weight="bold">UP</text>
  <path d="M190 120 L190 150 L185 145 M190 150 L195 145" stroke="#28a745" stroke-width="2" fill="none"/>
  <text x="200" y="165" fill="#28a745" font-family="Arial, sans-serif" font-size="12">DOWN</text>
  <ellipse cx="150" cy="165" rx="8" ry="12" fill="none" stroke="#dc3545" stroke-width="2"/>
  <text x="95" y="160" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Core tight</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Goblet Squat</text>
  <text x="150" y="280" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Hold weight close to chest</text>
  <text x="150" y="295" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Squat down keeping knees out</text>
  <text x="150" y="310" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Drive through heels to stand</text>
</svg>`;

const kettlebellSwingSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="380" width="300" height="20" fill="#e9ecef"/>
  <circle cx="150" cy="90" r="16" fill="#fdbcb4"/>
  <rect x="140" y="106" width="20" height="45" rx="10" fill="#007bff" transform="rotate(10 150 128.5)"/>
  <rect x="125" y="140" width="12" height="40" rx="6" fill="#fdbcb4" transform="rotate(45 131 160)"/>
  <rect x="163" y="140" width="12" height="40" rx="6" fill="#fdbcb4" transform="rotate(-45 169 160)"/>
  <circle cx="145" cy="185" r="6" fill="#fdbcb4"/>
  <circle cx="155" cy="185" r="6" fill="#fdbcb4"/>
  <ellipse cx="150" cy="190" rx="15" ry="10" fill="#2c2c2c"/>
  <rect x="135" y="151" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(-10 142 168.5)"/>
  <rect x="151" y="151" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(10 158 168.5)"/>
  <rect x="130" y="185" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="156" y="185" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <ellipse cx="130" cy="230" rx="12" ry="6" fill="#2c2c2c"/>
  <ellipse cx="170" cy="230" rx="12" ry="6" fill="#2c2c2c"/>
  <path d="M80 120 L80 80 L75 85 M80 80 L85 85" stroke="#007bff" stroke-width="3" fill="none"/>
  <text x="30" y="100" fill="#007bff" font-family="Arial, sans-serif" font-size="12" font-weight="bold">SWING</text>
  <ellipse cx="150" cy="140" rx="8" ry="12" fill="none" stroke="#dc3545" stroke-width="2"/>
  <text x="75" y="135" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Hip hinge</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Kettlebell Swing</text>
  <text x="150" y="280" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Hinge at hips, not knees</text>
  <text x="150" y="295" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Drive hips forward explosively</text>
  <text x="150" y="310" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Let kettlebell float to shoulder height</text>
</svg>`;

const bulgarianSplitSquatSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="380" width="300" height="20" fill="#e9ecef"/>
  <rect x="200" y="340" width="80" height="30" rx="5" fill="#e9ecef"/>
  <circle cx="120" cy="80" r="16" fill="#fdbcb4"/>
  <rect x="110" y="96" width="20" height="45" rx="10" fill="#007bff"/>
  <rect x="100" y="115" width="15" height="30" rx="7" fill="#fdbcb4"/>
  <rect x="125" y="115" width="15" height="30" rx="7" fill="#fdbcb4"/>
  <circle cx="105" cy="130" r="6" fill="#fdbcb4"/>
  <circle cx="135" cy="130" r="6" fill="#fdbcb4"/>
  <rect x="105" y="141" width="14" height="40" rx="7" fill="#fdbcb4"/>
  <rect x="120" y="141" width="14" height="40" rx="7" fill="#fdbcb4"/>
  <rect x="105" y="180" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="120" y="180" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <ellipse cx="105" cy="225" rx="10" ry="5" fill="#2c2c2c"/>
  <ellipse cx="130" cy="225" rx="10" ry="5" fill="#2c2c2c"/>
  <rect x="170" y="330" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(-30 177 347.5)"/>
  <ellipse cx="190" cy="350" rx="8" ry="4" fill="#2c2c2c" transform="rotate(-30 190 350)"/>
  <path d="M170 150 L170 120 L165 125 M170 120 L175 125" stroke="#007bff" stroke-width="2" fill="none"/>
  <text x="180" y="135" fill="#007bff" font-family="Arial, sans-serif" font-size="12">Up</text>
  <path d="M170 120 L170 150 L165 145 M170 150 L175 145" stroke="#28a745" stroke-width="2" fill="none"/>
  <text x="180" y="165" fill="#28a745" font-family="Arial, sans-serif" font-size="12">Down</text>
  <ellipse cx="120" cy="160" rx="8" ry="12" fill="none" stroke="#dc3545" stroke-width="2"/>
  <text x="60" y="155" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">90° angles</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Bulgarian Split Squat</text>
  <text x="150" y="290" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Rear foot elevated on bench</text>
  <text x="150" y="305" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Lower into lunge position</text>
  <text x="150" y="320" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Push through front heel to return</text>
</svg>`;

const deadliftSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="380" width="300" height="20" fill="#e9ecef"/>
  <rect x="100" y="310" width="100" height="8" rx="4" fill="#2c2c2c"/>
  <rect x="90" y="300" width="20" height="28" rx="3" fill="#495057"/>
  <rect x="190" y="300" width="20" height="28" rx="3" fill="#495057"/>
  <circle cx="150" cy="100" r="18" fill="#fdbcb4"/>
  <rect x="140" y="118" width="20" height="55" rx="10" fill="#007bff" transform="rotate(20 150 145.5)"/>
  <rect x="130" y="140" width="12" height="40" rx="6" fill="#fdbcb4" transform="rotate(45 136 160)"/>
  <rect x="158" y="140" width="12" height="40" rx="6" fill="#fdbcb4" transform="rotate(-45 164 160)"/>
  <circle cx="145" cy="180" r="5" fill="#fdbcb4"/>
  <circle cx="155" cy="180" r="5" fill="#fdbcb4"/>
  <rect x="135" y="170" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(-15 142 187.5)"/>
  <rect x="151" y="170" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(15 158 187.5)"/>
  <rect x="130" y="200" width="14" height="30" rx="7" fill="#fdbcb4"/>
  <rect x="156" y="200" width="14" height="30" rx="7" fill="#fdbcb4"/>
  <ellipse cx="130" cy="240" rx="12" ry="6" fill="#2c2c2c"/>
  <ellipse cx="170" cy="240" rx="12" ry="6" fill="#2c2c2c"/>
  <path d="M220 200 L220 150 L215 155 M220 150 L225 155" stroke="#007bff" stroke-width="3" fill="none"/>
  <text x="230" y="175" fill="#007bff" font-family="Arial, sans-serif" font-size="12" font-weight="bold">LIFT</text>
  <path d="M125 130 L175 150" stroke="#dc3545" stroke-width="2" fill="none"/>
  <text x="85" y="125" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Neutral spine</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Deadlift</text>
  <text x="150" y="280" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Hip hinge pattern</text>
  <text x="150" y="295" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Keep back neutral, chest up</text>
  <text x="150" y="310" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Drive through heels</text>
</svg>`;

const pushUpSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="280" width="300" height="120" fill="#e9ecef"/>
  <circle cx="80" cy="150" r="16" fill="#fdbcb4"/>
  <rect x="95" y="145" width="60" height="18" rx="9" fill="#007bff"/>
  <rect x="60" y="155" width="30" height="12" rx="6" fill="#fdbcb4"/>
  <rect x="155" y="155" width="30" height="12" rx="6" fill="#fdbcb4"/>
  <circle cx="55" cy="170" r="8" fill="#fdbcb4"/>
  <circle cx="190" cy="170" r="8" fill="#fdbcb4"/>
  <rect x="155" y="150" width="45" height="14" rx="7" fill="#fdbcb4"/>
  <rect x="200" y="148" width="35" height="14" rx="7" fill="#fdbcb4"/>
  <rect x="235" y="155" width="15" height="10" rx="5" fill="#2c2c2c"/>
  <path d="M150 120 L150 90 L145 95 M150 90 L155 95" stroke="#007bff" stroke-width="2" fill="none"/>
  <text x="160" y="100" fill="#007bff" font-family="Arial, sans-serif" font-size="12">Up</text>
  <path d="M150 90 L150 120 L145 115 M150 120 L155 115" stroke="#28a745" stroke-width="2" fill="none"/>
  <text x="160" y="135" fill="#28a745" font-family="Arial, sans-serif" font-size="12">Down</text>
  <line x1="80" y1="155" x2="240" y2="155" stroke="#dc3545" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="120" y="140" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Straight line</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Push-Up</text>
  <text x="150" y="320" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Maintain plank position</text>
  <text x="150" y="335" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Lower chest to floor</text>
  <text x="150" y="350" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Push back to starting position</text>
</svg>`;

const rowSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="380" width="300" height="20" fill="#e9ecef"/>
  <rect x="200" y="320" width="80" height="40" rx="5" fill="#6c757d"/>
  <line x1="200" y1="340" x2="160" y2="180" stroke="#2c2c2c" stroke-width="3"/>
  <circle cx="120" cy="140" r="16" fill="#fdbcb4"/>
  <rect x="115" y="155" width="18" height="45" rx="9" fill="#007bff" transform="rotate(-10 124 177.5)"/>
  <rect x="100" y="165" width="30" height="12" rx="6" fill="#fdbcb4" transform="rotate(-5 115 171)"/>
  <rect x="130" y="165" width="25" height="12" rx="6" fill="#fdbcb4"/>
  <circle cx="155" cy="175" r="6" fill="#fdbcb4"/>
  <rect x="155" y="170" width="15" height="8" rx="4" fill="#495057"/>
  <rect x="108" y="195" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="122" y="195" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="108" y="225" width="14" height="30" rx="7" fill="#fdbcb4"/>
  <rect x="122" y="225" width="14" height="30" rx="7" fill="#fdbcb4"/>
  <ellipse cx="110" cy="265" rx="12" ry="6" fill="#2c2c2c"/>
  <ellipse cx="130" cy="265" rx="12" ry="6" fill="#2c2c2c"/>
  <path d="M170 180 L140 180 L145 175 M140 180 L145 185" stroke="#007bff" stroke-width="3" fill="none"/>
  <text x="75" y="175" fill="#007bff" font-family="Arial, sans-serif" font-size="12">Pull</text>
  <ellipse cx="130" cy="165" rx="8" ry="12" fill="none" stroke="#dc3545" stroke-width="2"/>
  <text x="60" y="150" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Squeeze shoulder blades</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Seated Row</text>
  <text x="150" y="320" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Pull handle to abdomen</text>
  <text x="150" y="335" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Squeeze shoulder blades together</text>
  <text x="150" y="350" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Control the return</text>
</svg>`;

const gluteBridgeSvg = `<svg width="300" height="400" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="400" fill="#f8f9fa"/>
  <rect x="0" y="280" width="300" height="120" fill="#e9ecef"/>
  <circle cx="80" cy="260" r="16" fill="#fdbcb4"/>
  <rect x="70" y="265" width="30" height="15" rx="7" fill="#007bff"/>
  <rect x="50" y="270" width="20" height="12" rx="6" fill="#fdbcb4"/>
  <rect x="100" y="270" width="20" height="12" rx="6" fill="#fdbcb4"/>
  <circle cx="45" cy="285" r="5" fill="#fdbcb4"/>
  <circle cx="125" cy="285" r="5" fill="#fdbcb4"/>
  <rect x="75" y="220" width="20" height="45" rx="10" fill="#007bff" transform="rotate(-25 85 242.5)"/>
  <ellipse cx="120" cy="200" rx="15" ry="10" fill="#dc3545"/>
  <text x="140" y="205" fill="#dc3545" font-family="Arial, sans-serif" font-size="10" font-weight="bold">Glutes!</text>
  <rect x="105" y="190" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(45 112 207.5)"/>
  <rect x="125" y="190" width="14" height="35" rx="7" fill="#fdbcb4" transform="rotate(45 132 207.5)"/>
  <rect x="140" y="220" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <rect x="160" y="220" width="14" height="35" rx="7" fill="#fdbcb4"/>
  <ellipse cx="140" cy="270" rx="12" ry="6" fill="#2c2c2c"/>
  <ellipse cx="170" cy="270" rx="12" ry="6" fill="#2c2c2c"/>
  <path d="M150 180 L150 150 L145 155 M150 150 L155 155" stroke="#007bff" stroke-width="3" fill="none"/>
  <text x="160" y="165" fill="#007bff" font-family="Arial, sans-serif" font-size="12" font-weight="bold">LIFT</text>
  <path d="M150 150 L150 180 L145 175 M150 180 L155 175" stroke="#28a745" stroke-width="2" fill="none"/>
  <text x="160" y="195" fill="#28a745" font-family="Arial, sans-serif" font-size="12">Lower</text>
  <line x1="147" y1="240" x2="167" y2="240" stroke="#dc3545" stroke-width="2"/>
  <text x="100" y="235" fill="#dc3545" font-family="Arial, sans-serif" font-size="10">Knees aligned</text>
  <text x="150" y="30" text-anchor="middle" fill="#2c2c2c" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Glute Bridge</text>
  <text x="150" y="320" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Squeeze glutes to lift hips</text>
  <text x="150" y="335" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Keep core tight, knees aligned</text>
  <text x="150" y="350" text-anchor="middle" fill="#6c757d" font-family="Arial, sans-serif" font-size="12">Lower with control</text>
</svg>`;

export const exerciseImages: Record<string, string> = {
  'Goblet squats': gobletSquatSvg,
  'Kettlebell swings': kettlebellSwingSvg,
  'Bulgarian split squat': bulgarianSplitSquatSvg,
  'Trap bar deadlift OR kettlebell deadlift': deadliftSvg,
  'Kettlebell deadlift': deadliftSvg,
  'Push-ups': pushUpSvg,
  'Floor press or push-ups': pushUpSvg,
  'Rows': rowSvg,
  'Landmine row': rowSvg,
  'Pull-ups or inverted rows': rowSvg,
  'Inverted rows': rowSvg,
  'Glute bridges': gluteBridgeSvg,
  'Kettlebell snatches': kettlebellSwingSvg,
  'Front squats': gobletSquatSvg,
  'Push presses': pushUpSvg,
  'RDLs': deadliftSvg,
};

// Generic exercise categories for fallbacks
export const exerciseCategories: Record<string, string> = {
  'Row or Ski': 'cardio',
  'Ski erg': 'cardio',
  'Row or Ski Erg': 'cardio',
  'Mobility': 'mobility',
  'Glute bridges': 'glutes',
  'Band pull-aparts': 'shoulders',
  'Scap push-ups': 'shoulders',
  'Kettlebell halos': 'shoulders',
  'Landmine push press': 'shoulders',
  'Bulgarian bag clean': 'power',
  'Kettlebell snatches': 'power',
  'Landmine clean or box jump': 'power',
  'Box jump': 'power',
  'RDLs': 'deadlift',
  'Front squats': 'squat',
  'Push presses': 'shoulders',
  'Bulgarian bag carry circuit': 'carry',
};

export function getExerciseImage(exerciseName: string): any | null {
  // Direct match
  if (exerciseImages[exerciseName]) {
    return exerciseImages[exerciseName];
  }
  
  // Partial matches
  const lowerName = exerciseName.toLowerCase();
  for (const [key, image] of Object.entries(exerciseImages)) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return image;
    }
  }
  
  return null;
}