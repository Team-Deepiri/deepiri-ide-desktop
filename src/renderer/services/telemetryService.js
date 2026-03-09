/**
 * Telemetry stub for optional usage/error reporting.
 */
export const telemetryService = {
  recordEvent(name, props = {}) {
    if (process.env.NODE_ENV === 'development') {
      console.debug('[telemetry]', name, props);
    }
  },

  recordError(error, context = {}) {
    console.error('[telemetry error]', error, context);
  }
};
