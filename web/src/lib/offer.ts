export function daysUntilExpire(createdAt: Date, expirationDays: number = 7): number {
  const now = new Date();
  const created = new Date(createdAt);
  const diffMs = created.getTime() + expirationDays * 24 * 60 * 60 * 1000 - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function isOfferExpired(createdAt: Date, expirationDays: number = 7): boolean {
  return daysUntilExpire(createdAt, expirationDays) === 0;
}

