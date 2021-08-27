import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
import axiosWithAuth from "./../utils/axiosWithAuth";


class FriendsList extends React.Component {

    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
         axiosWithAuth()
						.get("/friends")
						.then((res) => {
							this.setState({
								friends: res.data.data,
							});
						})
						.catch((err) => {
							console.log(err);
						});
    }

    formatData = (friend) => {
axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(`YO Error: `, err)
    }

    render() {
        const friends = this.state
        return (
            <div className="friends-container">
            
            {this.state.friends.map(friend => {
                return <Friend key={friends.id}
                friend={friend} />
            })
        }
        
        </div>
                
            )
            
        }


}

export default Friends