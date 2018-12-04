import * as React from 'react';
import { connect } from 'react-redux';
import { decrementScore, incrementScore } from '../actions';


export interface HomeProps {
  incrementScore?: (value: number) => {};
  decrementScore?: (value: number) => {};
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
   increment() {
    this.props.incrementScore(1);
  }

  decrement() {
    this.props.decrementScore(1);
  }

  render() {
    return (
    <div>HOME
      <button onClick={this.increment}>Score+</button>
      <button onClick={this.decrement}>Score-</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  incrementScore: (value: number) => dispatch(incrementScore(value)),
  decrementScore: (value: number) => dispatch(decrementScore(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

