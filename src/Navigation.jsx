function Navigation() {
  return (
    <nav className="flex flex-col items-center">
      <h1 className="font-bold text-3xl text-center mt-8 text-neutral-900 mb-4">
        Extensions List
      </h1>
      <div className="flex items-center mx-12 w-70 justify-between">
        <button className="py-2 px-5 rounded-4xl bg-red-700 text-neutral-0">
          All
        </button>
        <button className="py-2 px-5 rounded-4xl bg-neutral-0 text-neutral-900">
          Active
        </button>
        <button className="py-2 px-5 rounded-4xl bg-neutral-0 text-neutral-900">
          Inactive
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
