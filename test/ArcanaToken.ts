import { expect } from "chai";
import { ethers } from "hardhat";

describe("Arcana", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploy() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Arcana = await ethers.getContractFactory("Arcana");
    const arcana = await Arcana.deploy(
      "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F",
      "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F",
      "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F"
    );

    return { arcana };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { arcana } = await deploy();
      expect(await arcana.address).not.to.be.equal(
        ethers.constants.AddressZero
      );
    });
  });
});
