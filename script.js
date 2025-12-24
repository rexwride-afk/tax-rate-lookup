document.getElementById("taxForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const params = new URLSearchParams({
    street: street.value,
    city: city.value,
    state: state.value,
    zip: zip.value
  });

  const res = await fetch(
    "https://YOUR-WORKER-NAME.workers.dev/lookup?" + params
  );

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});
