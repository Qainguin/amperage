// src/hooks.server.js
export function handleError({ error, event }) {
  console.error("An unexpected error occurred:", error);

  // This is the error object passed to the client
  return {
    message: "An internal server error occurred.",
    // In a development environment, you could expose more details for debugging
    // You'll want to avoid this in production
    // stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
  };
}
