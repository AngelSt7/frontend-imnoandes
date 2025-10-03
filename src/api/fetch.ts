async function fetchSSR(input: RequestInfo | URL, init: RequestInit = {}) {

  if (typeof window === 'undefined') {
    init.headers = {
      ...init.headers,
      Origin: process.env.NEXT_PUBLIC_FRONTEND_URL || ''
    }
  }
  return fetch(input, init);
}

export default fetchSSR;
