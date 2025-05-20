import rentals from "@/data/rentals.json";

const _rentals = rentals.data.map((rental) => {
  return {
    id: rental.id,
    type: ["Condo", "Townhouse", "Apartment"].includes(rental.attributes.category) ? "Community" : "Standalone",
    ...rental.attributes,
  };
});

export function useRentals(id) {
  const model = id ? _rentals.find((rental) => rental.id === id) : _rentals;
  return {
    model,
  };
}
