import React from "react";

function Balance({ current_balance = 10, used_balance = 10 }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-around md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Balance Available</h2>
          <p className="mt-1 text-sm text-gray-700">{current_balance}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Money Spent</h2>
          <p className="mt-1 text-sm text-gray-700">{used_balance}</p>
        </div>
      </div>
    </section>
  );
}

export default Balance;
