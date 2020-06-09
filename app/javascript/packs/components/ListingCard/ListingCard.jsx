import React from "react";

const property = {
  title: "Appartment in City Center",
  beds: 3,
  baths: 2,
  priceInCents: 100000,
  formattedPrice: "$19,000.00",
  reviewCount: 32,
  rating: 4,
  imageUrl:
    "https://images.unsplash.com/photo-1580494767205-2da300954a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80"
};
const starRating = () => {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    stars.push(
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 fill-current ${
          i < property.rating ? "text-teal-500" : "text-gray-500"
        }`}
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
      </svg>
    );
  }
  return stars;
};
const ListingCard = () => {
  return (
    <div className="m-12">
      <div className="relative pb-5/6 rounded-lg overflow-hidden">
        <img
          className="absolute h-full w-full object-cover shadow-md"
          src={property.imageUrl}
        />
      </div>
      <div class="relative px-4 -mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {property.beds} beds &bull; {property.baths} baths
          </div>
          <h4 className="font-semibold text-lg truncate">{property.title}</h4>
          <div>
            {property.formattedPrice}
            <span className="text-gray-600 text-sm"> / week</span>
          </div>
          <div className="mt-2 flex items-center">
            {starRating()}
            <span className="text-gray-600 text-sm ml-2">
              {property.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
