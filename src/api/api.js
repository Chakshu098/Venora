export async function sendTask(agent, task) {
  const response = await fetch(`http://localhost:8000/api/agent/${agent}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();
  return data.reply;
}
