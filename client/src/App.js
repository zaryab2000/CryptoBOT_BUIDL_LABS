import React, { Component } from "react";
import { TezosNodeWriter, TezosParameterFormat } from "conseiljs";
import "./App.css";


var key_name = "test_key1";
var key = require(`../../keystore/${key_name}`);

var tezosNode = "https://carthagenet.smartpy.io/",
  contractAddress = "KT1DsT31zAR27hVx2T4oWRFhipXnuuSDPiDM";

class App extends Component{
   constructor() {
    super();
    this.state = {
      contract: contractAddress,
      wallet: key.publicKeyHash,
      address: "",
      newName: "",
      horizonalShift: "",
      transaction_receipt: "",
    };

    this.nameChanger = this.nameChanger.bind(this);
    this.handleNameChanger = this.handleNameChanger.bind(this);
    this.shiftHorizontal = this.shiftHorizontal.bind(this);
    this.handleHorizontalShift = this.handleHorizonalShift.bind(this);
  }

  handleNameChanger = (event) =>{
    this.setState({
      newName : event.target.value,
    })
  }

  handleHorizontalShift = (event) =>{
    this.setState({
      horizonalShift : event.target.value,
    })
  }

  async nameChanger(){

    console.log(this.state.newName)
     var keystore = key,
      amount = 1,
      fee = 100000,
      storage_limit = 1000,
      gas_limit = 200000,
      entry_point = undefined,
      parameters = `(Left (Left "${this.state.newName}"))`,
      derivation_path = "";

      const result = await TezosNodeWriter.sendContractInvocationOperation(
      tezosNode,
      keystore,
      contractAddress,
      amount,
      fee,
      derivation_path,
      storage_limit,
      gas_limit,
      entry_point,
      parameters,
      TezosParameterFormat.Michelson
    );

    this.setState({ transaction_receipt:  result.operationGroupID});
    alert(
      `Injected operation ! \n Invocation Group ID : ${result.operationGroupID}`
    );
  }

   async shiftHorizontal(){

    console.log(this.state.horizonalShift)
     var keystore = key,
      amount = 1,
      fee = 100000,
      storage_limit = 1000,
      gas_limit = 200000,
      entry_point = undefined,
      parameters = `(Left (Right "${this.state.horizonalShift}"))`,
      derivation_path = "";

      const result = await TezosNodeWriter.sendContractInvocationOperation(
      tezosNode,
      keystore,
      contractAddress,
      amount,
      fee,
      derivation_path,
      storage_limit,
      gas_limit,
      entry_point,
      parameters,
      TezosParameterFormat.Michelson
    );

    this.setState({ transaction_receipt:  result.operationGroupID});
    alert(
      `Injected operation ! \n Invocation Group ID : ${result.operationGroupID}`
    );
  }

  render(){
     return (
    <div className="App">
      <header className="App-header">
        <h2 className="headerName">CryptoBOT Interaction</h2>
        <br />
      
     </header>
 
      <div className="container">
        <h4 classNam="contractAdd">Contract Address: {this.state.contract}</h4> 
        <br />
        <p>Wallet Address Detected : {this.state.wallet}</p>
        <br />
        <p> Latest Operation Group ID : {this.state.transaction_receipt}</p>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Change the NAME</h5>
             <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">New Name</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="nameChanger"
                name="nameChanger"
                placeholder="Enter the NAME"
                value={this.state.newName}
                onChange={this.handleNameChanger}
              />
            </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.nameChanger}
            >Change
            </button>
          </div>
                </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Make Horizonal Shift</h5>
                <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">CoOrdinate_X</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="horizonalShift"
                name="horizonalShift"
                placeholder="Enter X"
                value={this.state.horizonalShift}
                onChange={this.handleHorizontalShift}
              />
            </div>
              <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.shiftHorizontal}
            >Change
            </button>
          </div>

              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
  }
}

export default App;
