const fs = require("fs").promises;

console.log(132415);

(async () => {
  try {
    const data = await fs.readFile("./data.txt", "utf8");
    console.log(data);
    const newContent = `${data} school`;
    await fs.writeFile("./data.txt", newContent, "utf8");
    // await fs.rename("./dateUtilsWthNahuya.js", "./tmp/dateUtils.js");
    // console.log(await fs.readdir("./node_modules"));
    await fs.unlink("tmp");
  } catch (error) {
    console.error(error);
  }
})();
