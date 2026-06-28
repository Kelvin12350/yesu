// api/test-env.js

export default async function (request, env) {
  // Read the injected secret from the sandboxedEnv parameter
  const secret = env.TEST_SECRET_KEY;

  if (!secret) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Environment variable 'TEST_SECRET_KEY' was not found in the sandbox context." 
      }), 
      { 
        status: 404, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Environment sandbox integration verified!",
      platform: env.PLATFORM_NAME,      // Default variable
      environment: env.ENVIRONMENT,    // Default variable
      captured_secret: secret          // Your custom variable
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
