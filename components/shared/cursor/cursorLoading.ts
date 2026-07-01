export const CURSOR_LOADING_EVENT = 'alrecz:cursor-loading';

/**
 * Lets any component force the cursor into its "loading" state without
 * threading state through context. Dispatches a DOM event CustomCursor
 * listens for; no-op during SSR.
 */
export function setCursorLoading(loading: boolean) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<{ loading: boolean }>(CURSOR_LOADING_EVENT, { detail: { loading } })
  );
}
