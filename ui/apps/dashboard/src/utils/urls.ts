import type { Route } from 'next';

export const WEBSITE_PRICING_URL = 'https://www.inngest.com/pricing';
export const WEBSITE_CONTACT_URL = 'https://www.inngest.com/contact';

export const DOCS_URLS = {
  SERVE: 'https://www.inngest.com/docs/sdk/serve',
};

export const skipCacheSearchParam = {
  name: 'skipCache',
  value: 'true',
} as const;

/**
 * Adds a query param that asks data fetchers to skip their cache.
 */
export function setSkipCacheSearchParam(url: string): string {
  let value = `${skipCacheSearchParam.name}=${skipCacheSearchParam.value}`;
  if (url.includes('?')) {
    url += '&' + value;
  } else {
    url += '?' + value;
  }
  return url;
}

export function getManageKey(pathname: string) {
  const regex = /\/manage\/(\w+)/;
  const match = pathname.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

export const pathCreator = {
  apps({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/apps` as Route;
  },
  app({ envSlug, externalAppID }: { envSlug: string; externalAppID: string }): Route {
    return `/env/${envSlug}/apps/${encodeURIComponent(externalAppID)}` as Route;
  },
  appSyncs({ envSlug, externalAppID }: { envSlug: string; externalAppID: string }): Route {
    return `/env/${envSlug}/apps/${encodeURIComponent(externalAppID)}/syncs` as Route;
  },
  createApp({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/apps/sync-new` as Route;
  },
  events({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/events` as Route;
  },
  eventType({ envSlug, eventName }: { envSlug: string; eventName: string }): Route {
    return `/env/${envSlug}/events/${encodeURIComponent(eventName)}` as Route;
  },
  envs(): Route {
    return '/env' as Route;
  },
  functions({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/functions` as Route;
  },
  function({ envSlug, functionSlug }: { envSlug: string; functionSlug: string }): Route {
    return `/env/${envSlug}/functions/${encodeURIComponent(functionSlug)}` as Route;
  },
  functionCancellations({
    envSlug,
    functionSlug,
  }: {
    envSlug: string;
    functionSlug: string;
  }): Route {
    return `/env/${envSlug}/functions/${encodeURIComponent(functionSlug)}/cancellations` as Route;
  },
  oldRuns({ envSlug, functionSlug }: { envSlug: string; functionSlug: string }): Route {
    return `/env/${envSlug}/functions/${encodeURIComponent(functionSlug)}/logs` as Route;
  },
  oldRun({
    envSlug,
    functionSlug,
    runID,
  }: {
    envSlug: string;
    functionSlug: string;
    runID: string;
  }): Route {
    return `/env/${envSlug}/functions/${encodeURIComponent(functionSlug)}/logs/${runID}` as Route;
  },
  keys({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/manage/keys` as Route;
  },
  neonIntegrationStep({ step }: { step?: string }): Route {
    return `/settings/integrations/neon${step ? `/${step}` : ''}` as Route;
  },
  // TODO: Support environments
  onboarding(): Route {
    return `/env/production/onboarding/` as Route;
  },
  onboardingSteps({ envSlug, step }: { envSlug: string; step: number }): Route {
    return `/env/${envSlug}/onboarding/${step}` as Route;
  },
  runPopout({ envSlug, runID }: { envSlug: string; runID: string }): Route {
    return `/env/${envSlug}/runs/${runID}` as Route;
  },
  runs({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/runs` as Route;
  },
  support(): Route {
    return '/support' as Route;
  },
  unattachedSyncs({ envSlug }: { envSlug: string }): Route {
    return `/env/${envSlug}/unattached-syncs` as Route;
  },
};
