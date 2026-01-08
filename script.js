const form = document.getElementById("taxForm");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  output.textContent = "Loading...";

  const params = new URLSearchParams({
    street: street.value,
    city: city.value,
    state: state.value,
    zip: zip.value
  });

  try {
    const response = await fetch(
      "https://taxjar-lookup.rex-w-ride.workers.dev/lookup?" + params.toString()
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tax rate");
    }

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
