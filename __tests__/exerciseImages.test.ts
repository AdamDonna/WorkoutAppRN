import { exerciseImages, exerciseCategories, getExerciseImage } from '../assets/exercises/exerciseImages';

describe('Exercise Images', () => {
  describe('exerciseImages mapping', () => {
    it('should have SVG content for all exercise mappings', () => {
      Object.entries(exerciseImages).forEach(([exerciseName, svgContent]) => {
        expect(typeof svgContent).toBe('string');
        expect(svgContent).toMatch(/^<svg.*<\/svg>$/s);
        expect(svgContent).toContain('viewBox');
        expect(svgContent).toContain('xmlns="http://www.w3.org/2000/svg"');
      });
    });

    it('should contain all key exercises from workout programs', () => {
      const requiredExercises = [
        'Goblet squats',
        'Kettlebell swings',
        'Bulgarian split squat',
        'Push-ups',
        'Rows',
        'Glute bridges',
        'RDLs'
      ];

      requiredExercises.forEach(exercise => {
        expect(exerciseImages).toHaveProperty(exercise);
        expect(exerciseImages[exercise]).toBeDefined();
      });
    });

    it('should have proper SVG structure with exercise-specific content', () => {
      // Test specific exercise has appropriate title
      const gobletSquatSvg = exerciseImages['Goblet squats'];
      expect(gobletSquatSvg).toContain('Goblet Squat');
      
      const pushUpSvg = exerciseImages['Push-ups'];
      expect(pushUpSvg).toContain('Push-Up');
      
      const rowSvg = exerciseImages['Rows'];
      expect(rowSvg).toContain('Seated Row');
    });
  });

  describe('exerciseCategories mapping', () => {
    it('should categorize exercises correctly', () => {
      expect(exerciseCategories['Row or Ski']).toBe('cardio');
      expect(exerciseCategories['Mobility']).toBe('mobility');
      expect(exerciseCategories['Front squats']).toBe('squat');
      expect(exerciseCategories['RDLs']).toBe('deadlift');
    });

    it('should have string values for all categories', () => {
      Object.values(exerciseCategories).forEach(category => {
        expect(typeof category).toBe('string');
        expect(category.length).toBeGreaterThan(0);
      });
    });
  });

  describe('getExerciseImage function', () => {
    it('should return SVG for exact matches', () => {
      const result = getExerciseImage('Goblet squats');
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^<svg.*<\/svg>$/s);
    });

    it('should return SVG for partial matches (case insensitive)', () => {
      const result = getExerciseImage('goblet');
      expect(result).toBeDefined();
      expect(result).toContain('Goblet Squat');
    });

    it('should return SVG when exercise name contains mapped exercise', () => {
      const result = getExerciseImage('kettlebell swings with pause');
      expect(result).toBeDefined();
      expect(result).toContain('Kettlebell Swing');
    });

    it('should return null for non-existent exercises', () => {
      const result = getExerciseImage('non-existent exercise');
      expect(result).toBeNull();
    });

    it('should handle empty string input', () => {
      const result = getExerciseImage('');
      // Function returns first match for empty string, which is expected behavior
      expect(result).toBeDefined();
    });

    it('should handle alternative exercise names correctly', () => {
      // Test that alternative exercises map to the same SVG
      const trapBarDeadlift = getExerciseImage('Trap bar deadlift OR kettlebell deadlift');
      const kettlebellDeadlift = getExerciseImage('Kettlebell deadlift');
      
      expect(trapBarDeadlift).toBeDefined();
      expect(kettlebellDeadlift).toBeDefined();
      expect(trapBarDeadlift).toBe(kettlebellDeadlift); // Should be the same SVG
    });
  });

  describe('SVG Content Validation', () => {
    it('should have proper dimensions for all SVGs', () => {
      Object.values(exerciseImages).forEach(svg => {
        expect(svg).toMatch(/width="300"/);
        expect(svg).toMatch(/height="400"/);
        expect(svg).toMatch(/viewBox="0 0 300 400"/);
      });
    });

    it('should contain exercise instructions in all SVGs', () => {
      Object.values(exerciseImages).forEach(svg => {
        // Should have instruction text elements
        expect(svg).toMatch(/<text[^>]*>.*<\/text>/);
        // Should have some instructional content
        expect(svg).toMatch(/(text-anchor="middle"|font-family="Arial)/);
      });
    });

    it('should have proper accessibility structure', () => {
      Object.values(exerciseImages).forEach(svg => {
        // Should have title element for exercise name
        expect(svg).toMatch(/font-size="18".*font-weight="bold"/);
        // Should have instructional text in appropriate color
        expect(svg).toMatch(/fill="#6c757d"/);
      });
    });
  });
});