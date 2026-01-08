const form = document.getElementById("taxForm");
const output = document.createElement("pre");
document.body.appendChild(output); // add output area if you don't have one

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  output.textContent = "Loading...";

  const params = new URLSearchParams({
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value
  });

  try {
    const response = await fetch(
      "https://taxjar-lookup.rex-w-ride.workers.dev/lookup?" + params.toString()
    );

    if (!response.ok) throw new Error("Failed to fetch tax data");

    const data = await response.json();

    output.textContent = `
Combined Rate: ${data.combined_rate}
State: ${data.state}
County: ${data.county}
City: ${data.city}
    `.trim();

  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});
