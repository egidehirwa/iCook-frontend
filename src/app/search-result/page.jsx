import Recipe from "src/components/recipe.jsx";

const SearchResult = () => {
  return (
    <div className="container mx-auto lg:py-[40px]">
      <h3 className="text-2xl">Search result: </h3>
      <Recipe
        title={"Tiramisu"}
        cookingTime={"15 minuets"}
        preppingTime={"20 minuets"}
        servingFor={"2 persons"}
      />
    </div>
  );
};

export default SearchResult;
