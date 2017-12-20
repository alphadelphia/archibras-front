import React from 'react'; 
import Transaction from './Transaction';

class TransactionList extends React.Component {

	constructor() {
	    super();
	    this.state = { 
	      txarray : null
	    };   
  	}

  	componentDidMount() {

        fetch('http://localhost:8080/txlist')
        .then((res) => res.json())
        .then((data) => {
            this.setState({ txarray: data.reverse()}); //reverse so newest tx first in list
        })
	}

	render() {
        let list = this.state.txarray ? 
            this.state.txarray.map(tx  => <Transaction key={tx.txid + tx.category}  data={tx} />) : "";
		return (     
            <ul className="tx-menu">
              {list}
            </ul>          
        );
	}
}
export default TransactionList;
