export default async function (request, env) {
  // Capture your custom environment variables from the sandboxed context
  const targetSecretValue = env.TEST_SECRET_KEY || "NOT_FOUND";

  const responseBody = {
    success: true,
    status: "Verified",
    timestamp: new Date().toISOString(),
    edge_environment: {
      platform: env.PLATFORM_NAME || "Unknown Platform",
      mode: env.ENVIRONMENT || "Unknown Mode",
    },
    custom_injected_secrets: {
      TEST_SECRET_KEY: targetSecretValue
    }
  };

  return new Response(JSON.stringify(responseBody, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
