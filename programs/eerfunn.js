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
  ];
  console.log(item);
  const result = [];
  for (const data of item) {
    if (data.availability) {
      result.push(data);
    }
  }
  console.log(result);
}
filterItemByAvailability();
