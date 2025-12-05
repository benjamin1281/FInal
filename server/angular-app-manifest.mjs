
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/granjas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 758, hash: '40805740a045ca1078091e680a4014a241e46344192497d533dd65d8f062c014', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'e1e7314807b5191679a01efabf254fb9fe49e59c793e29212b81175255d77216', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3820, hash: '478bff6066591e2835759e96f55f240aef3d44fe19af4a648a491eb123cc51d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'granjas/index.html': {size: 5845, hash: '609cc10f819eec8584acab270198cf2b77400997df202646d43c62c459fe62b3', text: () => import('./assets-chunks/granjas_index_html.mjs').then(m => m.default)},
    'styles-SKN6C2XX.css': {size: 422, hash: 'H9UP5N3Z4eU', text: () => import('./assets-chunks/styles-SKN6C2XX_css.mjs').then(m => m.default)}
  },
};
