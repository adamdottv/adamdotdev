const production = "adam.dev";
const dev = `dev.${production}`;

export const domain = { production, dev }[$app.stage] || `${$app.stage}.${dev}`;
