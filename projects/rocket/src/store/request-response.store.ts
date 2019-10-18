/**
 * @author Chris Humboldt
 */

export const RequestResponse = new Map<number, any>()
   .set(200, {status: 200, statusText: 'OK'})
   .set(201, {status: 201, statusText: 'Created'})
   .set(202, {status: 201, statusText: 'Accepted'})
   .set(204, {status: 204, statusText: 'No Content'})
   .set(400, {status: 400, statusText: 'Bad Request'})
   .set(401, {status: 401, statusText: 'Unauthorized'})
   .set(403, {status: 403, statusText: 'Forbidden'})
   .set(500, {status: 500, statusText: 'Internal Server Error'})
   .set(502, {status: 502, statusText: 'Bad Gateway'})
   .set(504, {status: 504, statusText: 'Gateway Timeout'});
