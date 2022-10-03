// Filter json object in array by attribute
function filterItemByAvailability() {
  const item = [
    {
      id: "1",
      name: "Spicy Instant Noodle",
      availability: true,
    },
    {
      id: "2",
      name: "Limited Item A",
      availability: false,
    },
    {
      id: "3",
      name: "Cute Plushie",
      availability: true,
    },
  ];
  console.log(item);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const data of item) {
    if (data.availability) {
      result.push(data);
    }
  }
  console.log(result);
}
filterItemByAvailability();
