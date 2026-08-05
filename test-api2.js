async function test() {
  const token = (process.env.TOKEN || '').trim();
  
  const urls = [
    'https://eu-discoveryengine.googleapis.com/v1alpha/projects/pod-glb-training-prod/locations/eu/widgetStreamAssist',
    'https://discoveryengine.googleapis.com/v1alpha/projects/pod-glb-training-prod/locations/eu/widgetStreamAssist',
    'https://discoveryengine.googleapis.com/v1alpha/projects/13961363644/locations/eu/widgetStreamAssist'
  ];
  
  for (const url of urls) {
    console.log(`\nTesting ${url}`);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        configId: '60b725bb-724a-4585-ae6f-dd120e8dde94',
        additionalParams: { token: '-', origin: 'ORIGIN_UNSPECIFIED' },
        streamAssistRequest: {
          session: 'collections/default_collection/engines/app-main/sessions/-',
          query: { parts: [{ text: 'hello' }] }
        }
      })
    });
    console.log(`Status: ${res.status}`);
    const text = await res.text();
    console.log(`Body: ${text.substring(0, 200)}`);
  }
}

test();
