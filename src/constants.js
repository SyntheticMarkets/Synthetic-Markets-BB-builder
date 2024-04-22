export const MAX_MOBILE_WIDTH = 813;

export const APP_ID_MAP = Object.freeze({
    production: Object.freeze({
        'bot.deriv.com': '53484',
        'bot.deriv.me': '53484', // todo: change when will be registered
        'bot.deriv.be': '53484',
    }),
    staging: Object.freeze({
        'staging-bot.deriv.com': '53484',
        'staging-bot.deriv.be': '53484',
    }),
    dev: Object.freeze({
        localhost: '53484',
        'localbot.binary.sx': '53484',
    }),
});

export const OFFICIAL_BOT_DOMAINS = [
    'bot.deriv.com',
    'bot.deriv.be',
    'bot.deriv.me',
    'staging-bot.deriv.com',
    'staging-bot.deriv.be',
    'staging-bot.deriv.me',
];

// Jacques Change APPID
