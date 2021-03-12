const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "nbujbi4v",
  dataset: "production",
  token:
    "skcPoiFB6TTtM9ggCWCCOVLzKEar1WYNRWsRphBobyVJmBhfuH7la7w38YMdDxKJrO3lU4Il0BhmZ8VBp1CkTZp5rEDGIoYAHiceR9tGSV1rOVMys85CFsnT83QHHX9ctNhpqo0le4cHwDQptpH2g3tuZFGnidWSHYkruw45J4Xxlp7gdFyG", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true,
});

module.exports = client;
