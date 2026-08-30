import React, { useEffect } from 'react';
import { LogBox, AppState } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import notificationService from './src/services/notificationService';
import multiAdManager from './src/utils/multiAdManager';
import analyticsService from './src/services/analyticsService';

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();

    // Initialize services with error handling
    const initializeServices = async () => {
      try {
        // Initialize Mock Analytics service
        await analyticsService.initialize();
        console.log('Analytics service initialized');
      } catch (error) {
        console.warn('Analytics service failed to initialize:', error);
      }

      try {
        // Initialize Enhanced Ad Manager (supports Google Mobile Ads only)
        await multiAdManager.initializeAds();
        console.log('Ad manager initialized');
      } catch (error) {
        console.warn('Ad manager failed to initialize:', error);
      }

      try {
        // Initialize Mock Notification service
        notificationService.initialize('mock-app-id');
        console.log('Notification service initialized');
      } catch (error) {
        console.warn('Notification service failed to initialize:', error);
      }

      try {
        // Log app opened event
        await analyticsService.logAppOpened();
      } catch (error) {
        console.warn('Failed to log app opened event:', error);
      }
    };

    initializeServices();

    // Handle app state changes for analytics
    const handleAppStateChange = async (nextAppState) => {
      try {
        if (nextAppState === 'background') {
          await analyticsService.logAppBackgrounded();
        } else if (nextAppState === 'active') {
          await analyticsService.logAppOpened();
        }
      } catch (error) {
        console.warn('Failed to log app state change:', error);
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
