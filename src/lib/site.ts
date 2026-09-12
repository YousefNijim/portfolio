/**
 * Canonical origin, no trailing slash.
 *
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is attached. On Vercel we fall
 * back to the deployment's own URL so preview builds emit correct absolute URLs
 * instead of pointing at production.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
