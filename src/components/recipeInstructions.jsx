export default function RecipeInstructions() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Instructions :</h2>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-row gap-2 items-center">
          <div className="p-4 rounded-full bg-grey flex items-center justify-center shrink w-8 h-8">
            <p>1</p>
          </div>
          <p>Prepare all the ingredients first of all.</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="p-4 rounded-full bg-grey flex items-center justify-center shrink w-8 h-8">
            <p>2</p>
          </div>
          <p>Prepare all the ingredients first of all.</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="p-4 rounded-full bg-grey flex items-center justify-center shrink w-8 h-8">
            <p>3</p>
          </div>
          <p>Prepare all the ingredients first of all.</p>
        </div>
      </div>
    </div>
  );
}
