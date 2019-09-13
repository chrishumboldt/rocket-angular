/**
 * @author Chris Humboldt
 */

export const RequestResponse = {
   200: {status: 200, statusText: 'OK'},
   201: {status: 201, statusText: 'Created'},
   202: {status: 201, statusText: 'Accepted'},
   204: {status: 204, statusText: 'No Content'},
   400: {status: 400, statusText: 'Bad Request'},
   401: {status: 401, statusText: 'Unauthorized'},
   403: {status: 403, statusText: 'Forbidden'},
   500: {status: 500, statusText: 'Internal Server Error'},
   502: {status: 502, statusText: 'Bad Gateway'},
   504: {status: 504, statusText: 'Gateway Timeout'}
}
