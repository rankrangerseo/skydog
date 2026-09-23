const csvParser = require("csv-parser");
const fs = require("fs");
const { formatAddress } = require("./utils/formatter");

async function insertWL() {
  const entries = [];
  const invalids = [];
  const duplicate = [];
  let count = 1;

  fs.createReadStream(
    "/Users/ashutoshmehta/Downloads/Ment/Skydog/skydog-backend/addresses.csv"
  )
    .pipe(csvParser({ headers: ["walletAddress"], skipLines: 0 }))
    .on("data", (row) => {
      count++;
      const walletAddress = row.walletAddress?.trim();
      try {
        console.log(count, " ", walletAddress);
        if (
          walletAddress &&
          walletAddress.startsWith("0x") &&
          formatAddress(walletAddress)
        ) {
          if (
            entries.some(
              (entry) =>
                formatAddress(entry.walletAddress) ===
                formatAddress(walletAddress)
            )
          ) {
            duplicate.push(walletAddress);
          } else {
            entries.push({
              walletAddress: formatAddress(walletAddress),
            });
          }
        }
      } catch (error) {
        invalids.push(walletAddress);
        console.log(error);
      }
    })
    .on("end", async () => {
      try {
        console.log("Total:", count);
        console.log("Uniques:", entries.length);
        console.log("Duplicates:", duplicate.length);
        console.log("Invalid:", invalids.length);
        fs.writeFileSync(
          "/Users/ashutoshmehta/Downloads/Ment/Skydog/skydog-backend/entries.json",
          JSON.stringify(entries, null, 2)
        );
        // Write CSV file
        fs.writeFileSync(
          "/Users/ashutoshmehta/Downloads/Ment/Skydog/skydog-backend/entries.csv",
          entries.map((e) => e.walletAddress).join("\n")
        );
        return;

        // const result = await Whitelist.insertMany(entries, { ordered: false });
        // console.log(`${result.length} entries inserted successfully.`);
      } catch (error) {
        console.error("Error during insert:", error);
        if (error.writeErrors) {
          console.log(
            `${error.writeErrors.length} duplicate or invalid entries skipped.`
          );
        }
      }
    });
}

insertWL()
  .then()
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
