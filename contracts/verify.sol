// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract DocumentVerification {
    address public admin;
    
    struct Exporter {
        bool exists;
        string name;
    }
    
    mapping(address => Exporter) public exporters;
    
    mapping(bytes32 => bool) public images;
    uint256 public documentCount;
    
    constructor() {
        admin = msg.sender;
        documentCount = 0;
    }
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    modifier onlyExporter() {
        require(exporters[msg.sender].exists, "Only exporters can perform this action");
        _;
    }
    
    function addExporter(address _address, string memory _name) public onlyAdmin {
        require(!exporters[_address].exists, "Exporter already exists");
        
        Exporter memory exporter = Exporter({
            exists: true,
            name: _name
        });
        
        exporters[_address] = exporter;
    }
    
    function deleteExporter(address _address) public onlyAdmin {
        require(exporters[_address].exists, "Exporter does not exist");
        delete exporters[_address];
    }
    
    function editExporter(address _address, string memory _name) public onlyAdmin {
        require(exporters[_address].exists, "Exporter does not exist");
        
        Exporter memory exporter = Exporter({
            exists: true,
            name: _name
        });
        
        exporters[_address] = exporter;
    }
    
    function addImage(string memory _imageHash) public onlyExporter {
        bytes32 imageHash = keccak256(bytes(_imageHash));
        images[imageHash] = true;
        documentCount++;
    }
    
    function verifyImage(string memory _imageHash) public view returns(bool) {
        bytes32 imageHash = keccak256(bytes(_imageHash));
        return images[imageHash];
    }
    function getDocumentCount() public view returns(uint256) {
        return documentCount;
    }
}
