import rentals from "@/data/rentals.json";

export function useRentals() {
  const model = rentals.data;

  function findBy(id) {
    return model.find((rental) => rental.id === id);
  }

  const categories = ['Condo', 'Townhouse', 'Apartment']

  return {
    model,
    findBy,
    categories,
  };
}
