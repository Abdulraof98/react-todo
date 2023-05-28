import Form from '../components/form';
import '../css/home.css';


const Home = () =>{

    return (
    <div className="home">
        <p>
            This is home page
        </p>
        <button>Click me</button>
        <Form/>
        <select>
            <option>Select</option>
            <option>English</option>
            <option>Dari</option>
            <option>Pashto</option>
        </select>
    </div>
    )
}

export default Home;