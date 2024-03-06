import fetch, { RequestInit } from 'node-fetch';

/**
 * Performs a network request using the fetch API.
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - Optional fetch options to customize the request.
 * @returns {Promise<T>} - A promise resolving to the JSON response as type T.
 * @throws {Error} - Throws an error if the request fails or the response status is not OK.
 */
export async function fetchAPI<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    // Return the response JSON parsed as type T.
    return await response.json() as Promise<T>;
  } catch (error) {
    // Handle or throw a custom error
    console.error(error);
    throw new Error('An error occurred while fetching data.');
  }
}