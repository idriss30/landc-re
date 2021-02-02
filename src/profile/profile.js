import React from "react";
import "./profile.scss";
import axios from "axios";
import Footer from "../components/footer/footer.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/form/messages")
      .then((result) => {
        this.setState({ messages: [...result.data.messages] });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const list = [...this.state.messages];
    return (
      <>
        <section className="messages">
          <h1>Welcome Admin!</h1>
          <div className="messages__container">
            <ul>
              {list.map((message) => {
                return (
                  <li className="messages__container-group" key={message._id}>
                    <a
                      className="group__icon-envelope"
                      href={`http://localhost:3000/form/message/${message._id}`}
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                    <p className="group__icon-text">
                      from
                      <span>
                        {`${message.firstName} , ${message.lastName}`}
                      </span>
                      on {message.date}
                      <a href={`http://localhost:3000/message/${message._id}`}>
                        Click
                      </a>
                      to read
                    </p>
                    <a
                      className="group__icon-trash"
                      href={`http://localhost:3000/message/delete/${message.id}`}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Profile;
