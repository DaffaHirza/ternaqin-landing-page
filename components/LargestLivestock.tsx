export default function LargestLivestock() {
  return (
    <div className="bg-white rounded-[28px] p-6 sm:p-8 flex flex-col w-full">
      <div className="text-center mb-8">
        <h2 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919]">
          Largest Livestock of The Year
        </h2>
        <p className="text-[clamp(12px,1.8vw,18px)] text-[#9A9A9A] mt-1">Jan 01 - Des 31, 2027</p>
      </div>
      {/* Inner Card */}
      <div className="bg-[#F8F9F9] rounded-[20px] p-6 sm:p-8">
        {/* Title */}

        <h3 className="text-base font-semibold text-[#191919] mb-6">
          Livestock Identification
        </h3>

        <div className="mt-6 text-sm">
          {[
            ["Animal Name", "Pikii Mow", "Farm Name", "Rimba Raya"],
            ["Livestock Status", "Available", "Animal Condition", "Excellent"],
            ["Animal Species", "Limousine", "Age of Animal (in months)", "24"],
            [
              "Animal Weight (in Kg)",
              "1.550,00",
              "Selling Price (in USD)",
              "8.920,00",
            ],
          ].map((row, i, arr) => (
            <div
              key={i}
              className={`py-4 ${
                i !== arr.length - 1 ? "border-b border-[#E5E7E7]" : ""
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pair 1 */}
                <div className="grid grid-cols-[1fr_auto] gap-x-6">
                  <span className="text-[#9A9A9A] break-words">{row[0]}</span>

                  {row[1] === "Available" ? (
                    <span className="px-3 py-1 text-xs bg-[#DFF3E8] text-[#2E7D5B] rounded-full whitespace-nowrap">
                      {row[1]}
                    </span>
                  ) : (
                    <span className="font-medium text-[#191919] text-right break-words">
                      {row[1]}
                    </span>
                  )}
                </div>

                {/* Pair 2 */}
                <div className="grid grid-cols-[1fr_auto] gap-x-6">
                  <span className="text-[#9A9A9A] break-words">{row[2]}</span>

                  <span className="font-medium text-[#191919] text-right break-words">
                    {row[3]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation */}
        <div className="mt-8">
          <p className="text-sm font-medium text-[#9A9A9A] mb-4">
            Documentation
          </p>

          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="relative w-[110px] h-[80px] rounded-[12px] overflow-hidden bg-gray-300 flex-shrink-0"
              >
                <img
                  src="/img/cow.svg"
                  alt="cow"
                  className="w-full h-full object-cover"
                />

                {i === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                    10+ more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
