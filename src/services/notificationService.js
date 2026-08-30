// Mock Notification Service - OneSignal removed
import {Alert} from 'react-native';

class NotificationService {
  constructor() {
    this.isInitialized = false;
    this.userId = null;
  }

  // Mock initialization - no OneSignal dependency
  initialize(appId) {
    if (this.isInitialized) return;

    try {
      // Mock initialization
      this.userId = 'mock-user-id';
      this.isInitialized = true;
      console.log('Mock Notification service initialized');
    } catch (error) {
      console.error('Error initializing Mock Notification service:', error);
    }
  }

  // Mock request notification permissions
  async requestPermissions() {
    try {
      console.log('Mock: Notification permissions requested');
      return true; // Mock always grants permission
    } catch (error) {
      console.error('Error requesting permissions:', error);
      return false;
    }
  }

  async getPermissionStatus() {
    try {
      return {
        hasPermission: true,
        permissionState: 'granted',
        canRequest: false
      };
    } catch (error) {
      console.error('Error getting permission status:', error);
      return {
        hasPermission: false,
        permissionState: 'unknown',
        canRequest: true
      };
    }
  }

  // Mock notification event handlers setup
  setupNotificationHandlers() {
    console.log('Mock: Notification handlers setup (no actual handlers)');
  }

  // Mock handle when notification is opened/clicked
  handleNotificationOpened(event) {
    console.log('Mock: Notification opened (no actual handling)');
  }

  // Mock notification handlers
  handleMiningRewardNotification(data) {
    console.log('Mock: Mining reward notification handled');
  }

  handleBoostNotification(data) {
    console.log('Mock: Boost notification handled');
  }

  handleDailyBonusNotification(data) {
    console.log('Mock: Daily bonus notification handled');
  }

  handleReferralNotification(data) {
    console.log('Mock: Referral notification handled');
  }

  // Mock get user ID
  async getUserId() {
    return this.userId || 'mock-user-id';
  }

  // Mock set external user ID
  setExternalUserId(externalId) {
    console.log('Mock: External user ID set:', externalId);
    this.userId = externalId;
  }

  // Mock add tags for user segmentation
  sendTags(tags) {
    console.log('Mock: Tags sent:', tags);
  }

  // Mock send notification to specific user
  async sendNotificationToUser(userId, title, message, data = {}) {
    console.log('Mock: Notification sent to user:', { userId, title, message, data });
  }

  // Mock send notification to all users
  async sendNotificationToAll(title, message, data = {}) {
    console.log('Mock: Broadcast notification sent:', { title, message, data });
  }

  // Mock disable notifications
  disableNotifications() {
    console.log('Mock: Notifications disabled');
  }

  // Mock enable notifications
  enableNotifications() {
    console.log('Mock: Notifications enabled');
  }
}

// Create singleton instance
const notificationService = new NotificationService();

export default notificationService;
