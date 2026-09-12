(() => {
    'use strict';

    const RULES = Object.freeze([
        Object.freeze({
            type: 'EMAIL',
            pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi
        }),
        Object.freeze({
            type: 'SSN',
            pattern: /\b\d{3}-\d{2}-\d{4}\b/g,
            validate(value) {
                const [area, group, serial] = value.split('-').map(Number);
                return area !== 0 && area !== 666 && area < 900 && group !== 0 && serial !== 0;
            }
        }),
        Object.freeze({
            type: 'PAYMENT_CARD',
            pattern: /\b(?:\d[ -]*?){13,19}\b/g,
            validate(value) {
                const digits = value.replace(/\D/g, '');
                if (digits.length < 13 || digits.length > 19) return false;
                let sum = 0;
                let doubleDigit = false;
                for (let index = digits.length - 1; index >= 0; index -= 1) {
                    let digit = Number(digits[index]);
                    if (doubleDigit) {
                        digit *= 2;
                        if (digit > 9) digit -= 9;
                    }
                    sum += digit;
                    doubleDigit = !doubleDigit;
                }
                return sum % 10 === 0;
            }
        }),
        Object.freeze({
            type: 'PHONE',
            pattern: /(?:\+?1[ .-]?)?(?:\(\d{3}\)|\d{3})[ .-]\d{3}[ .-]\d{4}\b/g
        }),
        Object.freeze({
            type: 'IP_ADDRESS',
            pattern: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g,
            validate(value) {
                return value.split('.').every(part => Number(part) <= 255);
            }
        })
    ]);

    function scrub(input) {
        let text = typeof input === 'string' ? input : '';
        const replacements = [];
        const placeholders = new Map();
        const counters = new Map();

        for (const rule of RULES) {
            text = text.replace(rule.pattern, value => {
                if (rule.validate && !rule.validate(value)) return value;
                const key = `${rule.type}:${value.toLowerCase()}`;
                let placeholder = placeholders.get(key);
                if (!placeholder) {
                    const next = (counters.get(rule.type) || 0) + 1;
                    counters.set(rule.type, next);
                    placeholder = `[${rule.type}_${next}]`;
                    placeholders.set(key, placeholder);
                }
                replacements.push(Object.freeze({ type: rule.type, placeholder, original: value }));
                return placeholder;
            });
        }

        return Object.freeze({ text, replacements: Object.freeze(replacements) });
    }

    globalThis.CaptionKeepPrivacyScrubber = Object.freeze({ RULES, scrub });
})();
