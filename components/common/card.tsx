import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
