function BikeCard({ children }) {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <p className="text-lg font-bold mb-2">BikeCard Component</p>
      {children}
    </div>
  );
}

export { BikeCard };
