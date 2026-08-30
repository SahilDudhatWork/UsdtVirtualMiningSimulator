// Mock Analytics Service - Firebase removed
class AnalyticsService {
  constructor() {
    this.isInitialized = false;
  }

  async initialize() {
    try {
      // Mock initialization - no Firebase dependency
      this.isInitialized = true;
      console.log('Mock Analytics service initialized');
    } catch (error) {
      console.warn('Failed to initialize analytics service:', error.message);
      this.isInitialized = false;
    }
  }

  // User Authentication Events
  async logLogin(method = 'email') {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Login event', { method });
  }

  async logSignUp(method = 'email') {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: SignUp event', { method });
  }

  // Mining Events
  async logMiningStarted(miningType = 'default') {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Mining started', { miningType, timestamp: Date.now() });
  }

  async logMiningCompleted(duration, coinsEarned, usdtEarned) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Mining completed', { duration, coinsEarned, usdtEarned, timestamp: Date.now() });
  }

  // Reward Events
  async logDailyRewardClaimed(rewardAmount) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Daily reward claimed', { rewardAmount, timestamp: Date.now() });
  }

  async logFlipRewardClaimed(rewardAmount, flipResult) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Flip reward claimed', { rewardAmount, flipResult, timestamp: Date.now() });
  }

  // Conversion Events
  async logCoinConversion(coinsConverted, usdtReceived) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Coin conversion', { coinsConverted, usdtReceived, timestamp: Date.now() });
  }

  // Screen Navigation Events
  async logScreenView(screenName, screenClass = null) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Screen view', { screenName, screenClass: screenClass || screenName });
  }

  // User Properties
  async setUserProperties(userId, userProperties = {}) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: User properties set', { userId, userProperties });
  }

  // Ad Events
  async logAdViewed(adNetwork, adType, placement) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Ad viewed', { adNetwork, adType, placement, timestamp: Date.now() });
  }

  async logAdClicked(adNetwork, adType, placement) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Ad clicked', { adNetwork, adType, placement, timestamp: Date.now() });
  }

  // Referral Events
  async logReferralShared(referralCode) {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: Referral shared', { referralCode, timestamp: Date.now() });
  }

  // Custom Events
  async logCustomEvent(eventName, parameters = {}) {
    if (!this.isInitialized) return;
    console.log(`Mock Analytics: Custom event ${eventName}`, { ...parameters, timestamp: Date.now() });
  }

  // App Lifecycle Events
  async logAppOpened() {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: App opened', { timestamp: Date.now() });
  }

  async logAppBackgrounded() {
    if (!this.isInitialized) return;
    console.log('Mock Analytics: App backgrounded', { timestamp: Date.now() });
  }
}

export default new AnalyticsService();
