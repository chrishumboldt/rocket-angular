/**
 * @author Quantify
 *
 * @NOTE that I still need to think about how to test this properly.
 */

/**
 * Get all the url data that we wouold ever need.
 */
function urlAll() {
   const windowLocation = window.location;
   const fullUrl = windowLocation.href;
   const currentUrl = fullUrl.split('#')[0];
   const hash = windowLocation.hash.substring(1);
   const host = windowLocation.host;
   const protocol = windowLocation.protocol + '//';
   let baseUrl = '';

   if (document.getElementsByTagName('base').length > 0) {
      baseUrl = document.getElementsByTagName('base')[0].href;
   } else {
      baseUrl = protocol + host;
   }

   const pathname = windowLocation.pathname;
   const segments = [];
   const pathnameSplit = pathname.split('/');

   for (let i = 0, len = pathnameSplit.length; i < len; i++) {
      if (pathnameSplit[i].indexOf('.') < 0 && pathnameSplit[i] != '') {
         segments.push(pathnameSplit[i]);
      }
   }

   return {
      base: baseUrl,
      current: currentUrl,
      full: fullUrl,
      hash: hash,
      host: host,
      pathname: pathname,
      protocol: protocol,
      segments: segments
   };
}

/**
 * Get the base url.
 */
function urlBase() {
   return urlAll().base;
}

/**
 * Get the current url.
 */
function urlCurrent() {
   return urlAll().current;
}

/**
 * Get the full url.
 */
function urlFull() {
   return urlAll().full;
}

/**
 * Get the url hash.
 */
function urlHash() {
   return urlAll().hash;
}

/**
 * Get the url host.
 */
function urlHost() {
   return urlAll().host;
}

/**
 * Get the url pathname.
 */
function urlPathname() {
   return urlAll().pathname;
}

/**
 * Get the url protocol.
 */
function urlProtocol() {
   return urlAll().protocol;
}

/**
 * Get the url segments.
 */
function urlsegments() {
   return urlAll().segments;
}

export const RocketUrl = {
   all: urlAll,
   base: urlBase,
   current: urlCurrent,
   full: urlFull,
   hash: urlHash,
   host: urlHost,
   pathname: urlPathname,
   protocol: urlProtocol,
   segments: urlsegments
}
