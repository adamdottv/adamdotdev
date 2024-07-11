const production = "adam.dev";
const dev = `dev.${production}`;

export const domain = { production, dev }[$app.stage] || `${$app.stage}.${dev}`;
export const zone = aws.route53.getZone({
  name: $app.stage === "production" ? production : dev,
});

export const outputs = {
  zone: zone.then((zone) => zone.zoneId),
};
