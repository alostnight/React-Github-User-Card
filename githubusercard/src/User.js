import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default class User extends React.Component{
    constructor() {
        super();
        this.state = {
            user: {},
            followers: []
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/alostnight")
        .then(response => {
            console.log(response)
            this.setState({
                user: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })

        axios.get("https://api.github.com/users/alostnight/followers")
        .then(response => {
            console.log(response)
            this.setState({
                followers: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                {
                    <UserCard
                        avatar_url={this.state.user.avatar_url}
                        id={this.state.user.id}
                        login={this.state.user.login}
                    />
                }

                {this.state.followers.map(follower =>
                    <UserCard
                        avatar_url={follower.avatar_url}
                        id={follower.id}
                        name={follower.name}
                        login={follower.login}
                    />
                )}
            </div>
        )
    }
} 