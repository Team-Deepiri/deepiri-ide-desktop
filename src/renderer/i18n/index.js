import en from './en';

const locale = 'en';
const messages = { en };

export function t(key) {
  const parts = key.split('.');
  let obj = messages[locale] || messages.en;
  for (const p of parts) {
    obj = obj?.[p];
  }
  return obj ?? key;
}

export { en };
export default messages;
