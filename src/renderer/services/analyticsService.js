/**
 * Analytics stub. Can be wired to a real provider later.
 */
export const analyticsService = {
  track(eventName, properties = {}) {
    if (process.env.NODE_ENV === 'development') {
      console.debug('[analytics]', eventName, properties);
    }
  },

  identify(userId, traits = {}) {
    if (process.env.NODE_ENV === 'development') {
      console.debug('[analytics] identify', userId, traits);
    }
  }
};
