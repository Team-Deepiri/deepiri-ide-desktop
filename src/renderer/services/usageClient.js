/**
 * Client-side usage helpers. Actual data comes from main via getUsage/getUsageLimits.
 */
export const usageClient = {
  async getUsage() {
    if (typeof window !== 'undefined' && window.electronAPI?.getUsage) {
      return window.electronAPI.getUsage();
    }
    return { today: { requests: 0, inputTokens: 0, outputTokens: 0 }, daily: {} };
  },

  async getLimits() {
    if (typeof window !== 'undefined' && window.electronAPI?.getUsageLimits) {
      return window.electronAPI.getUsageLimits();
    }
    return { rateLimitRequestsPerMinute: 0, dailyLimitRequests: 0, dailyLimitTokens: 0 };
  },

  async setLimits(limits) {
    if (typeof window !== 'undefined' && window.electronAPI?.setUsageLimits) {
      return window.electronAPI.setUsageLimits(limits);
    }
  }
};
