import React from "react";
import "../Body.css";
import data from "../data";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      people: data,
      index: 0
    };
  }

  increment = () => {
    if (this.state.index < this.state.people.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  render() {
    let { people, index } = this.state;

    return (
      <section>
        <main>
          <h1 className = "slide">
            {index + 1} / {people.length}
          </h1>
          <h1 className ='name'>
            {people[index].name.first} {people[index].name.last}
          </h1>
          <h2>
            From: {people[index].city}, {people[index].country}
          </h2>
          <h2>Job Title: {people[index].title}</h2>
          <h2>Employer: {people[index].employer}</h2>
          <br />
          <h2>Favorite Movies: </h2>
          <ol className='movies'>
            <li>{people[index].favoriteMovies[0]}</li>
            <li>{people[index].favoriteMovies[1]}</li>
            <li>{people[index].favoriteMovies[2]}</li>
          </ol>
        </main>
        <div className="button-container">
          <h4 onClick={() => this.setState({ index: index - 1 })}>
            {"<"} Previous
          </h4>
          <h4 onClick={this.increment}>Next ></h4>
        </div>
      </section>
    );
  }
}

export default Body;