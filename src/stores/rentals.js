import { defineStore } from "pinia";
import { ref } from "vue";

const _rentals = [
  {
    type: "rentals",
    id: "grand-old-mansion",
    attributes: {
      title: "Grand Old Mansion",
      owner: "Veruca Salt",
      city: "San Francisco",
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: "Estate",
      bedrooms: 15,
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
    },
  },
  {
    type: "rentals",
    id: "urban-living",
    attributes: {
      title: "Urban Living",
      owner: "Mike Teavee",
      city: "Seattle",
      location: {
        lat: 47.6062,
        lng: -122.3321,
      },
      category: "Condo",
      bedrooms: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg",
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.",
    },
  },
  {
    type: "rentals",
    id: "downtown-charm",
    attributes: {
      title: "Downtown Charm",
      owner: "Violet Beauregarde",
      city: "Portland",
      location: {
        lat: 45.5175,
        lng: -122.6801,
      },
      category: "Apartment",
      bedrooms: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
    },
  },
];

export const useRentalStore = defineStore("rentals", () => {
  const rentals = ref(
    _rentals.map((rental) => {
      return {
        id: rental.id,
        type: rental.type,
        ...rental.attributes,
      };
    })
  );

  return { rentals };
});
