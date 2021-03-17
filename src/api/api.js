export class ApiError extends Error {}

export async function fetchApi(path, options) {
  const { headers, ...requestOptions } = options;
  const endpoint = process.env.REACT_APP_POKE_API.concat(path);

  return fetch(endpoint, {
    headers: {
      'Client-Version': '1.0.0',
      Platform: 'Web',
      'Content-type': 'application/json; charset=UTF-8',
      ...headers,
    },
    ...requestOptions,
  }).then((response) =>
    response.json().then((body) => {
      if (response.status === 200 || response.status === 201) {
        return body;
      }

      if (response.status >= 400) {
        throw body.message;
      }
      return null;
    }),
  );
}
