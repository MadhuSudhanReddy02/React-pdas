import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className='container'>
                <div className='section'>
                    <div class="columns">
                        <div class="column is-4">
                            <ProfileCard 
                                title='alexa' 
                                handle='@alexa99' 
                                image={AlexaImage} 
                                description='Alexa was made by Amazon and help you buy things'
                            />
                        </div>
                        <div class="column is-4">
                            <ProfileCard 
                                title='cortana' 
                                handle='@cortana' 
                                image={CortanaImage}
                                description='Alexa was made by microsfort and help you buy things'
                            />
                        </div>
                        <div class="column is-4">
                            <ProfileCard 
                                title='siri' 
                                handle='@siri'
                                image={SiriImage}
                                description='Alexa was made by Apple and help you buy things'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App;
