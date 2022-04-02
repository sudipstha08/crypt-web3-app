// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// like objects in OOP
contract Transactions {
  uint256 transactionCount;

// like functions in OOP
// address is a type and from is a variable name
  event Transfer (address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

// transactions variable is an array of type TransferStruct
  TransferStruct [] transactions;

//  Payable ensures that the function can send and receive Ether.
//  Memory in Solidity is a temporary place to store data whereas Storage
//  holds data between function calls. The Solidity Smart Contract can use any 
// amount of memory during the execution but once the execution stops, 
// the Memory is completely wiped off for the next execution

// The msg global variables in particular are special global variables that contain properties which allow access to the blockchain. For instance, msg.sender is always the address where the current (external) function call came from
  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    // Push specific transaction in the transaction array
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
  }

  function getAllTransactions() public view returns (TransferStruct[] memory){
    //
  }

  function getTransactionCount() public view returns (uint256) {

  }
}

