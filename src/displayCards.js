//import githubData from "./gqlrequest";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText, Button } 
    from 'reactstrap';

import React from "react";
import './cards.scss';

class Ghdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/davidmickev/repos?type=all&sort=updated&per_page=20')
            .then(response => response.json())
            .then(repos => {
                // Fetch languages for each repository
                const languagePromises = repos.map(repo =>
                    fetch(repo.languages_url).then(response => response.json())
                );
    
                // Wait for all language fetches to complete
                Promise.all(languagePromises).then(languages => {
                    // Combine repositories with their languages
                    const cards = repos.map((repo, index) => ({
                        ...repo,
                        languages: Object.keys(languages[index]), // Extract language names
                    }));
    
                    this.setState({ cards });
                });
            });
    }

    render() {
        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        };   

        return (
            <div className="grid">
                {this.state.cards.map((card, index) => (
                    <Card className="card" key={index}>
                        <CardTitle
                            onClick={() => {
                                openInNewTab(card.html_url);
                            }}
                            tag="h5"
                        >
                            {card.name}
                        </CardTitle>
                        <CardBody>
                            <CardSubtitle className="mb-2 text-muted">
                                {card.description || 'No description available'}
                            </CardSubtitle>
                            <CardText>
                                {/* Display all languages */}
                                {card.languages.length > 0
                                    ? card.languages.join(', ')
                                    : 'No languages available'}
                            </CardText>
                            <Button
                                className="btn btn-secondary"
                                onClick={() => {
                                    openInNewTab(card.html_url);
                                }}>
                                Visit Project
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }
}
export default Ghdata;