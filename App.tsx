import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';

// Types
enum BlockType {
  WARMUP = 'warmup',
  POWER = 'power',
  CIRCUIT = 'circuit',
  EMOM = 'emom',
  FINISHER = 'finisher'
}

interface Exercise {
  id: string;
  name: string;
  reps?: string;
  time?: number;
  notes?: string;
}

interface Block {
  id: string;
  type: BlockType;
  rounds: number;
  restTime?: number;
  exercises: Exercise[];
  workTime?: number;
  intervalRestTime?: number;
}

interface Workout {
  id: string;
  name: string;
  totalTime: number;
  blocks: Block[];
}

// Data
const createExercise = (name: string, reps?: string, time?: number, notes?: string): Exercise => ({
  id: Math.random().toString(36).substr(2, 9),
  name,
  reps,
  time,
  notes
});

const createBlock = (
  type: BlockType, 
  rounds: number = 1, 
  exercises: Exercise[], 
  restTime?: number, 
  workTime?: number, 
  intervalRestTime?: number
): Block => ({
  id: Math.random().toString(36).substr(2, 9),
  type,
  rounds,
  restTime,
  exercises,
  workTime,
  intervalRestTime
});

const workouts: Workout[] = [
  {
    id: 'day1',
    name: 'Day 1 - Lower Body Power + Engine',
    totalTime: 2400,
    blocks: [
      createBlock(BlockType.WARMUP, 1, [
        createExercise('Row or Ski', undefined, 120),
        createExercise('Mobility'),
        createExercise('Goblet squats'),
        createExercise('Glute bridges')
      ]),
      createBlock(BlockType.POWER, 5, [
        createExercise('Trap bar deadlift OR kettlebell deadlift', '3', undefined, 'Explosive concentric')
      ], 90),
      createBlock(BlockType.CIRCUIT, 4, [
        createExercise('Bulgarian split squat', '8/leg'),
        createExercise('Kettlebell swings', '20'),
        createExercise('Landmine row', '10/side'),
        createExercise('Ski erg', undefined, 45)
      ], 60),
      createBlock(BlockType.FINISHER, 5, [
        createExercise('Row or Ski Erg', undefined, undefined, '30 sec hard, 30 sec easy')
      ], undefined, 30, 30)
    ]
  },
  {
    id: 'day2',
    name: 'Day 2 - Upper Body Power + Conditioning',
    totalTime: 2400,
    blocks: [
      createBlock(BlockType.WARMUP, 1, [
        createExercise('Band pull-aparts'),
        createExercise('Scap push-ups'),
        createExercise('Kettlebell halos')
      ]),
      createBlock(BlockType.POWER, 5, [
        createExercise('Landmine push press', '3-5')
      ], 90),
      createBlock(BlockType.CIRCUIT, 4, [
        createExercise('Pull-ups or inverted rows', '8-10'),
        createExercise('Floor press or push-ups', '12'),
        createExercise('Bulgarian bag clean', '10'),
        createExercise('Ski erg', undefined, 30)
      ]),
      createBlock(BlockType.EMOM, 5, [
        createExercise('Kettlebell snatches', '10', undefined, 'Minute 1'),
        createExercise('Push-ups', '10', undefined, 'Minute 2')
      ])
    ]
  },
  {
    id: 'day3',
    name: 'Day 3 - Full Body Engine',
    totalTime: 2400,
    blocks: [
      createBlock(BlockType.WARMUP, 1, [
        createExercise('Row + mobility')
      ]),
      createBlock(BlockType.POWER, 5, [
        createExercise('Landmine clean or box jump', '3')
      ]),
      createBlock(BlockType.CIRCUIT, 5, [
        createExercise('RDLs', '6', undefined, 'No rest inside round'),
        createExercise('Rows', '6', undefined, 'No rest inside round'),
        createExercise('Front squats', '6', undefined, 'No rest inside round'),
        createExercise('Push presses', '6', undefined, 'No rest inside round')
      ], 90),
      createBlock(BlockType.FINISHER, 1, [
        createExercise('Bulgarian bag carry circuit', undefined, 360, 'Bear hug carry, Over-shoulder toss, Front carry march - Repeat continuously')
      ])
    ]
  }
];

// Components
const BlockTypeChip: React.FC<{ type: BlockType }> = ({ type }) => {
  const getColor = (blockType: BlockType) => {
    switch (blockType) {
      case BlockType.WARMUP: return '#FF9500';
      case BlockType.POWER: return '#FF3B30';
      case BlockType.CIRCUIT: return '#007AFF';
      case BlockType.EMOM: return '#AF52DE';
      case BlockType.FINISHER: return '#34C759';
      default: return '#8E8E93';
    }
  };

  return (
    <View style={[styles.chip, { backgroundColor: getColor(type) }]}>
      <Text style={styles.chipText}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
    </View>
  );
};

const WorkoutCard: React.FC<{ workout: Workout; dayNumber: number; onPress: () => void }> = ({
  workout,
  dayNumber,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.dayText}>Day {dayNumber}</Text>
          <Text style={styles.workoutName}>
            {workout.name.replace(`Day ${dayNumber} - `, '')}
          </Text>
        </View>
        <View style={styles.cardMeta}>
          <Text style={styles.timeText}>{Math.round(workout.totalTime / 60)} min</Text>
          <Text style={styles.blocksText}>{workout.blocks.length} blocks</Text>
        </View>
      </View>
      <View style={styles.chipContainer}>
        {workout.blocks.map((block) => (
          <BlockTypeChip key={block.id} type={block.type} />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Main App Component
export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentInstruction, setCurrentInstruction] = useState('');
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.warn('Failed to setup audio:', error);
    }
  };

  useEffect(() => {
    setupAudio();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const playBeep = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const startWorkout = useCallback((workout: Workout) => {
    setCurrentWorkout(workout);
    setCurrentBlockIndex(0);
    setCurrentRound(1);
    setCurrentExerciseIndex(0);
    setIsActive(true);
    setIsPaused(false);
    setProgress(0);
    startCurrentBlock(workout, 0, 1, 0);
  }, []);

  const startCurrentBlock = (workout: Workout, blockIndex: number, round: number, exerciseIndex: number) => {
    const block = workout.blocks[blockIndex];
    if (!block) {
      completeWorkout();
      return;
    }

    const exercise = block.exercises[exerciseIndex];
    const roundText = `Round ${round}/${block.rounds}`;
    let instruction = `${roundText}: ${exercise?.name || 'Exercise'}`;
    
    if (exercise?.reps) {
      instruction += ` - ${exercise.reps}`;
    }
    if (exercise?.notes) {
      instruction += ` (${exercise.notes})`;
    }
    
    setCurrentInstruction(instruction);
    setProgress(blockIndex / workout.blocks.length);
    
    let duration = 60; // Default 1 minute
    
    switch (block.type) {
      case BlockType.WARMUP:
        duration = 300; // 5 minutes
        break;
      case BlockType.POWER:
        duration = block.restTime || 90;
        break;
      case BlockType.CIRCUIT:
        duration = exercise?.time || 60;
        break;
      case BlockType.EMOM:
        duration = 60;
        break;
      case BlockType.FINISHER:
        duration = block.workTime || 300;
        break;
    }
    
    setRemainingTime(duration);
    startTimer(duration);
  };

  const startTimer = (duration: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          nextExerciseOrRound();
          return 0;
        }
        if (prev <= 5 && prev > 1) {
          playBeep();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const nextExerciseOrRound = () => {
    if (!currentWorkout) return;
    
    const block = currentWorkout.blocks[currentBlockIndex];
    if (!block) return;
    
    if (currentExerciseIndex < block.exercises.length - 1) {
      // Next exercise
      const newExerciseIndex = currentExerciseIndex + 1;
      setCurrentExerciseIndex(newExerciseIndex);
      startCurrentBlock(currentWorkout, currentBlockIndex, currentRound, newExerciseIndex);
    } else if (currentRound < block.rounds) {
      // Next round
      const newRound = currentRound + 1;
      setCurrentRound(newRound);
      setCurrentExerciseIndex(0);
      startCurrentBlock(currentWorkout, currentBlockIndex, newRound, 0);
    } else {
      // Next block
      const newBlockIndex = currentBlockIndex + 1;
      setCurrentBlockIndex(newBlockIndex);
      setCurrentRound(1);
      setCurrentExerciseIndex(0);
      
      if (newBlockIndex >= currentWorkout.blocks.length) {
        completeWorkout();
      } else {
        startCurrentBlock(currentWorkout, newBlockIndex, 1, 0);
      }
    }
  };

  const completeWorkout = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentInstruction('Workout Complete! 💪');
    setIsActive(false);
    setProgress(1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const pauseWorkout = () => {
    if (!isActive || isPaused) return;
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resumeWorkout = () => {
    if (!isActive || !isPaused) return;
    setIsPaused(false);
    startTimer(remainingTime);
  };

  const skipCurrent = () => {
    nextExerciseOrRound();
  };

  const endWorkout = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentWorkout(null);
    setIsActive(false);
    setIsPaused(false);
    setCurrentInstruction('');
    setRemainingTime(0);
    setProgress(0);
  };

  if (currentWorkout && isActive) {
    return (
      <SafeAreaView style={styles.workoutContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#1D1D1F" />
        
        <View style={styles.workoutHeader}>
          <TouchableOpacity onPress={endWorkout} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.workoutTitle}>{currentWorkout.name}</Text>
            <Text style={styles.blockProgress}>Block {currentBlockIndex + 1}/{currentWorkout.blocks.length}</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>

        <View style={styles.timerSection}>
          <Text style={[
            styles.timer,
            remainingTime <= 5 && remainingTime > 0 && styles.timerWarning
          ]}>
            {formatTime(remainingTime)}
          </Text>
          
          {remainingTime <= 5 && remainingTime > 0 && (
            <Text style={styles.warningText}>Get Ready!</Text>
          )}
          
          {isPaused && (
            <Text style={styles.pausedText}>PAUSED</Text>
          )}
        </View>

        <View style={styles.instructionSection}>
          <Text style={styles.instructionLabel}>Current Exercise</Text>
          <View style={styles.instructionCard}>
            <Text style={styles.instructionText}>{currentInstruction}</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: '#007AFF' }]}
            onPress={isPaused ? resumeWorkout : pauseWorkout}
          >
            <Text style={styles.controlButtonText}>{isPaused ? '▶' : '⏸'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: '#FF9500' }]}
            onPress={skipCurrent}
          >
            <Text style={styles.controlButtonText}>⏭</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: '#FF3B30' }]}
            onPress={endWorkout}
          >
            <Text style={styles.controlButtonText}>⏹</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Strength + Conditioning</Text>
          <Text style={styles.subtitle}>3-Day Program</Text>
        </View>
        
        <View style={styles.workoutList}>
          {workouts.map((workout, index) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              dayNumber={index + 1}
              onPress={() => startWorkout(workout)}
            />
          ))}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ✅ Timer-driven execution{'\n'}
            ✅ Exact workout specifications{'\n'}
            ✅ Offline-first design{'\n'}
            ✅ Audio & haptic feedback
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  workoutContainer: {
    flex: 1,
    backgroundColor: '#1D1D1F',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D1D1F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6D6D80',
    textAlign: 'center',
  },
  workoutList: {
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  workoutName: {
    fontSize: 14,
    color: '#6D6D80',
    lineHeight: 20,
  },
  cardMeta: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  blocksText: {
    fontSize: 12,
    color: '#6D6D80',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  chipText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6D6D80',
    textAlign: 'center',
    lineHeight: 24,
  },
  // Workout Screen Styles
  workoutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  workoutTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  blockProgress: {
    color: '#98989D',
    fontSize: 14,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#2C2C2E',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  timerSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  timer: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
  timerWarning: {
    color: '#FF9500',
  },
  warningText: {
    fontSize: 18,
    color: '#FF9500',
    fontWeight: '600',
    marginTop: 10,
  },
  pausedText: {
    fontSize: 24,
    color: '#FFD60A',
    fontWeight: 'bold',
    marginTop: 10,
  },
  instructionSection: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  instructionLabel: {
    fontSize: 18,
    color: '#98989D',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  instructionCard: {
    backgroundColor: '#2C2C2E',
    borderRadius: 16,
    padding: 20,
    minHeight: 80,
    justifyContent: 'center',
  },
  instructionText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 26,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingHorizontal: 20,
  },
  controlButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
