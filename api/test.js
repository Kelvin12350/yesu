export default async function (request, env) {
  // Capture global injected variables or fall back gracefully
  const activeSecret = env.TEST_SECRET_KEY || "NOT_FOUND";
  const platformName = env.PLATFORM_NAME || "GlobalTech-Edge-Substrate";
  const targetEnvironment = env.ENVIRONMENT || "production";

  const responseBody = {
    success: true,
    status: "Verified",
    timestamp: new Date().toISOString(),
    edge_environment: {
      platform: platformName,
      mode: targetEnvironment,
      request_url: request.url,
      request_method: request.method
    },
    custom_injected_secrets: {
      TEST_SECRET_KEY: activeSecret
    }
  };

  return new Response(JSON.stringify(responseBody, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "X-Substrate-Runtime-Engine": "Vercel-Style-Smart-Aura"
    }
  });
}
