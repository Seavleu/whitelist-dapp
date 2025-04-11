const { expect } = require("chai");

describe("Whitelist", function () {
  let whitelist, owner;
  const MAX_WHITELIST = 5;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const Whitelist = await ethers.getContractFactory("Whitelist");
    whitelist = await Whitelist.deploy(MAX_WHITELIST);
    await whitelist.deployed();
  });

  it("should start with 0 whitelisted addresses", async function () {
    expect(await whitelist.numAddressesWhitelisted()).to.equal(0);
  });

  it("should add an address to whitelist and update the count", async function () {
    await whitelist.addAddressToWhitelist();
    expect(await whitelist.numAddressesWhitelisted()).to.equal(1);
    expect(await whitelist.whitelistedAddresses(owner.address)).to.equal(true);
  });
});
