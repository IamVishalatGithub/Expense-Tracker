import React, { useState } from "react";

function NewTransaction({
  setBalance,
  setUsedBalance,
  toggleTransaction,
  setTransactions,
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance((prevBalance) => prevBalance - parseFloat(amount));
    setUsedBalance((prevBalance) => prevBalance + parseFloat(amount));
    const details = {
      id: Date.now(),
      description: description,
      amount: parseFloat(amount),
    };

    setTransactions((prevTransactions) => prevTransactions.concat(details));
    setDescription("");
    setAmount();
    toggleTransaction(0);
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              New Transaction
            </h2>

            <form
              action=""
              method="POST"
              className="mt-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Description{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Amount{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add Transaction
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewTransaction;
