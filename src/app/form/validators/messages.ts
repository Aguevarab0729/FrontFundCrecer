export const MESSAGE_KEYS = {
  propertyName: 'propertyName',
  minLength: 'minLength',
  maxLength: 'maxLength',
  totalLength: 'totalLength',
  propertyValue: 'propertyValue',
};

export const DEFAULT_MESSAGES: Record<string, string> = {
  required: `'{{${MESSAGE_KEYS.propertyName}}}' is required.`,
  length: `The length of ‘{{${MESSAGE_KEYS.propertyName}}}’ must be between {{${MESSAGE_KEYS.minLength}}} and {{${MESSAGE_KEYS.maxLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  minLength: `The length of ‘{{${MESSAGE_KEYS.propertyName}}}’ must be at least be {{${MESSAGE_KEYS.minLength}}} characters. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
  maxLength: `The length of ‘{{${MESSAGE_KEYS.propertyName}}}’ must be {{${MESSAGE_KEYS.maxLength}}} characters or fewer. You entered {{${MESSAGE_KEYS.totalLength}}} characters.`,
};

export function buildMessage(options: Record<string, any>) {
  if (
    'messageTemplate' in options &&
    typeof options["messageTemplate"] === 'string'
  ) {
    return Object.entries(options).reduce((msg, [key, value]) => {
      return msg.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }, options["messageTemplate"]);
  }
  return undefined;
}
