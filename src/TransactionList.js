import React from 'react'; 
import Transaction from './Transaction';

const txdata = [{
        "account" : "",
        "address" : "mzgTYEoQF7ZPnvkM53b6zyUHEGCEUxpcaK",
        "category" : "immature",
        "amount" : 9737.99000000,
        "confirmations" : 2,
        "generated" : true,
        "blockhash" : "0000e3df5f3c8da0f2bd54f0051ff9685024aaf7afbfab5e240070e277812f96",
        "blockindex" : 0,
        "blocktime" : 1513345871,
        "txid" : "e66ee959ba86678670a950a397602dab804fcd5056d0ee6c4e5fd170ba41bd22",
        "time" : 1513345863,
        "timereceived" : 1513345863
    },{
        "account" : "",
        "address" : "n4EN1d3muBwz8wnHknDqcTyEMjy4sZmLFz",
        "category" : "immature",
        "amount" : 9734.61000000,
        "confirmations" : 1,
        "generated" : true,
        "blockhash" : "00006ed22e492475b6a022c184730a7fc83a26d551ab00e2851cd3e42f148d9d",
        "blockindex" : 0,
        "blocktime" : 1513345871,
        "txid" : "c989e62d61f3443d6538a2b010fb253a69893e508e04e18cead188c914470b86",
        "time" : 1513345863,
        "timereceived" : 1513345863
    },
    {
        "account" : "",
        "address" : "mvFFFH3hA8rBHPoACrVo39bkGom5XQC3Rr",
        "category" : "send",
        "amount" : -10000.00000000,
        "fee" : -0.01000000,
        "confirmations" : 0,
        "txid" : "d0d0939d69daa2b512f53f77b38cd5b1a19e57329750993afef1917d56be8887",
        "time" : 1513346424,
        "timereceived" : 1513346424
    }

];

class TransactionList extends React.Component {

	constructor() {
	    super();
	    this.state = { 
	      txarray : null
	    };   
  	}

  	componentDidMount() {
		this.populateTxArray();
	}

	populateTxArray() {
		//TODO fetch list from node, instead of test data
		this.state.txarray = txdata.map( (tx) => {return tx;});
		console.log(this.state.txarray);
	}

	render() {
		return ("txlist");
	}
}
export default TransactionList;